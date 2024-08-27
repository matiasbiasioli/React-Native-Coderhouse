import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux'
import { setItemToCart } from '../redux/slices/cartSlice'

const ProductDetail = ({ navigation, route }) => {
    // const { item } = route.params
    const user = useSelector(state => state.authSlice.user)
    const item = useSelector(state => state.homeSlice.itemSelected)

    const dispatch = useDispatch()

    const handleCart = ()=>{
        navigation.navigate('cart')
    }

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color="white" />
                </Pressable>
                <Header title={item.category} />
            </View>
            <View style={styles.productDetailContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageSize} source={{ uri: item.images }} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{item.title} </Text>
                    <Text style={styles.productText}>Categorie: {item.category} </Text>
                    <Text style={styles.productText}>Description: {item.description} </Text>
                    <Text style={styles.productText}>Price: ${item.price} </Text>
                </View>
                <Pressable style={styles.buttonContainer} onPress={handleCart}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        paddingTop: 40,
        paddingBottom: 20,
        gap: 10
    },
    productDetailContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    imageSize: {
        width: 350,
        height: 350,
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
    },

})