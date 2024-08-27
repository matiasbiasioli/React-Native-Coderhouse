import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/img/sony-logo.png'

const SplashScreen = () => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={Logo} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 250,
        height: 180
    }
})