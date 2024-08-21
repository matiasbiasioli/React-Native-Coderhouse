import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
// import { products } from '../data/products'
import ProductsItem from '../components/ProductsItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/homeSlice'



const Products = ({ navigation, route }) => {
    //Llamo con el useSelector a la data guardada en store en el homeSlice
    const products = useSelector(state => state.homeSlice.allProducts);
    // console.log('Productos', JSON.stringify(products, null, ''));

    const [inputValue, setInputValue] = useState('')
    const [productFiltered, setProductFiltered] = useState([]);
    
    const { item } = route.params;
    const dispatch = useDispatch();
    dispatch(setCategory(item))
    
    useEffect(() => {
        const productsFilter = products.filter((el) => el.category === item);
        setProductFiltered(productsFilter);
        if (inputValue) {
            const searchProductFilter = products.filter((el) => el.title.toLowerCase() == inputValue.toLowerCase())
            setProductFiltered(searchProductFilter)
        }
    }, [inputValue])

    return (

        <View style={styles.productsContainer}>
            <Header title={item} />
            <Pressable onPress={() => navigation.goBack()}>
                <Text>Ir Atrás</Text>
            </Pressable>
            <Search inputValue={inputValue} setInputValue={setInputValue} />
            <FlatList
                data={productFiltered}
                renderItem={({ item }) => <ProductsItem navigation={navigation} item={item} />}
                keyExtractor={products.id}
            />
        </View>

    )
}

export default Products

const styles = StyleSheet.create({

})