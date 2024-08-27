import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
// import { products } from '../data/products'
import ProductsItem from '../components/ProductsItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/homeSlice'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors'
import { useGetProductsQuery } from '../services/ecApi'



const Products = ({ navigation, route }) => {
    //Llamo con el useSelector a la data guardada en store en el homeSlice
    // const products = useSelector(state => state.homeSlice.allProducts);
    // console.log('Productos', JSON.stringify(products, null, ''));

    const { data } = useGetProductsQuery()
    // console.log('Productos en fire', JSON.stringify(data, null, ''));
    const products = data

    const [inputValue, setInputValue] = useState('')
    const [productFiltered, setProductFiltered] = useState([]);

    const { item } = route.params;
    const dispatch = useDispatch();
    dispatch(setCategory(item))

    // Input de busqueda
    useEffect(() => {
        if (products) {
            const productsFilter = products.filter(e => e.category === item);
            setProductFiltered(productsFilter)
        }
        if (inputValue) {
            const searchProductFilter = products.filter((e) => e.title.toLowerCase() == inputValue.toLowerCase())
            setProductFiltered(searchProductFilter)
        }
    }, [products, inputValue]);
    
    return (
        <View style={styles.productsContainer}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color="white" />
                </Pressable>
                <Header title={item} />
            </View>
            <Search inputValue={inputValue} setInputValue={setInputValue} />
            <FlatList
                data={productFiltered}
                renderItem={({ item }) => <ProductsItem navigation={navigation} item={item} />}
                keyExtractor={key => key.id} />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: colors.secondary,
        paddingTop: 40,
        paddingBottom: 20
    }
})