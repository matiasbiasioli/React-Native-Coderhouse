import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/Products'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name="home"/>
            <Stack.Screen component={Products} name="products" />
            <Stack.Screen component={ProductDetail} name="productDetail" />
        </Stack.Navigator>
    )
}

export default RootNavigation

