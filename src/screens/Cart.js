import { StyleSheet, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';


const Cart = ({ navigation }) => {
    // const cartItems = useSelector(state => state.cart.cartItem)
    return (
        <View style={styles.cartContainer}>
            <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={30} color="white" />
            </Pressable>
            <Header title='Cart' />
            {/* <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            /> */}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
})