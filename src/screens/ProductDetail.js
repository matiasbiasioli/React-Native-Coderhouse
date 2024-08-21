import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Header from '../components/Header'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'

const ProductDetail = ({ navigation, route }) => {
    // const { item } = route.params
    const item = useSelector(state => state.homeSlice.itemSelected)

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Header title={item.title} />
                <Pressable onPress={() => navigation.goBack()}>
                    <Text>Ir Atrás</Text>
                </Pressable>
            </View>
            <View style={styles.productDetailContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageSize} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{item.title} </Text>
                    <Text style={styles.productText}>Hemisferio: {item.category} </Text>
                    <Text style={styles.productText}>Description: {item.description} </Text>
                    <Text style={styles.productText}>Price: ${item.price} </Text>
                </View>
                <Pressable style={styles.buttonContainer} onPress={console.log('funciona')}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    productDetailContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    imageSize: {
        width: 150,
        height: 150,
    },
    detailsContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 20,
        marginHorizontal: 20,
        gap: 20,
    },
    productTitle: {
        fontFamily: 'PoppinsBold',
        fontSize: 30
    },
    productText: {
        fontSize: 30
    },
    buttonContainer: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '90%',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.fourth,
        fontSize: 20,
    }
})