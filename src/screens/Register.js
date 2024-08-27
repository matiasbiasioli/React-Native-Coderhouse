import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { sdk_auth } from '../firabase/sdk_auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import logo from '../../assets/img/sony-logo.png'



const Register = ({ navigation }) => {
    const [errorMail, setErrorMail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleRegister = async () => {
        try {
            const response = await createUserWithEmailAndPassword(sdk_auth, email, password);
            console.log('response', response);
            navigation.navigate('login')
        }
        catch (error) {
            console.log('error:', error);
            if (email.length === 0) {
                setErrorMail('Debe completar este campo')
            } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                setErrorMail('El campo email es invalido')
            } else if (password.length === 0) {
                setErrorPassword('Debe completar este campo')
            } else if (password.length <= 5) {
                setErrorPassword('El campo password debe ser mayor a 6 caracteres')
            }
        }
    };
    return (
        <View style={styles.loginContainer}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.loginText}>Register</Text>
            <TextInput
                style={styles.loginInput}
                value={email}
                onChangeText={(text) => {
                    setEmail(text)
                    setErrorMail('')
                }}
                placeholder='Email' />
            {errorMail &&
                <Text style={styles.errorMessage}>{errorMail}</Text>
            }
            <TextInput
                style={styles.loginInput}
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={(text) => {
                    setPassword(text)
                    setErrorPassword('')
                }} />
            {errorPassword &&
                <Text style={styles.errorMessage}>{errorPassword}</Text>
            }
            <Pressable style={styles.registerButton} onPress={() => onHandleRegister()}>
                <Text style={styles.registerButtonText}>Register</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('login')}>
                <Text style={styles.loginTextAsk}>¿Do you have an user? Login</Text>
            </Pressable>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    registerButton: {
        width: '30%',
        marginTop: 10,
        padding: 8,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: 'pink',
        marginBottom: 5,
    },
    registerButtonText: {
        fontSize: 15
    },
    loginTextAsk: {
        fontSize: 20,
        textDecorationLine: 'underline'
    },
    errorMessage: {
        color: 'red'
    }
})