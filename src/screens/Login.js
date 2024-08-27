import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { sdk_auth } from '../firabase/sdk_auth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/authSlice'
import logo from '../../assets/img/logo-2.jpeg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMail, setErrorMail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)

    const onHandleLogin = async () => {
        try {
            //Guardamos el user en Firebase authentication
            const response = await signInWithEmailAndPassword(sdk_auth, email, password)
            // console.log(response);
            //Seteamos el userEmail y el userPassword en Asyncstorage
            const setUserEmail = await AsyncStorage.setItem('userEmail', response.user.email)
            const setUserPassword = await AsyncStorage.setItem('userPassword', response._tokenResponse.idToken)
            dispatch(setUser(response.user.email))
            dispatch(setIdToken(response._tokenResponse.idToken))
            console.log("esto trae el setuserEmail:", setUserEmail);
            console.log("esto trae el setuserPassword:", setUserPassword);
        }
        catch (error) {
            console.log('hay un error:', error);
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                setErrorMail('The username is required')
            } else if (error.message === 'Firebase: Error (auth/missing-password).') {
                setErrorPassword('The password is required')
            } else if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                setErrorMail('The username or password doesnt exist')
                setErrorPassword('The username or password doesnt exist')
            }
        }
    }
    return (
        <View style={styles.loginContainer}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                style={styles.loginInput}
                placeholder='Username or Email'
                value={email}
                onChangeText={setEmail}
            />
            {errorMail && <Text style={styles.errorText}>{errorMail}</Text>}
            <TextInput
                placeholder='Password'
                style={styles.loginInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {errorPassword && <Text style={styles.errorText}>{errorPassword}</Text>}
            <Pressable style={styles.loginButton} onPress={() => onHandleLogin()}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.registerTextContainer} onPress={() => navigation.navigate('register')}>
                <Text style={styles.registerText}>Click here to Register</Text>
            </Pressable>
            <Pressable style={styles.registerTextContainer} onPress={() => navigation.navigate('')}>
                <Text style={styles.registerText} >Get inside witouth login</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.fourth
    },
    image: {
        width: 150,
        height: 120,
        marginBottom: 20
    },
    loginText: {
        fontSize: 25,
        marginBottom: 20
    },
    loginInput: {
        width: '70%',
        marginVertical: 5,
        borderColor: 'black',
        borderWidth: 3,
        padding: 10,
        borderRadius: 30,
    },
    loginButton: {
        width: '30%',
        marginTop: 10,
        padding: 8,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: 'pink',
        marginBottom: 5,
    },
    loginButtonText: {
        fontSize: 15
    },
    registerTextContainer: {
        marginTop: 5,
    },
    registerText: {
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    errorText: {
        color: 'red'
    }
})