import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { sdk_auth } from '../firabase/sdk_auth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/authSlice'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [errorMail, setErrorMail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onHandleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(sdk_auth, email, password)
            console.log(response);
            dispatch(setUser(response.user.email))
            dispatch(setIdToken(response._tokenResponse.idToken))
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
                <Text>Login</Text>
            </Pressable>
            <Pressable style={styles.registerText} onPress={() => navigation.navigate('register')}>
                <Text>Click here to Register</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    registerText: {
        marginTop: 5,
    },
    errorText: {
        color: 'red'
    }
})