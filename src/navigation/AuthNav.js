import { StyleSheet, View } from 'react-native'
import React from 'react'
import Login from '../screens/Login'
import Register from '../screens/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNav from './TabNav'

const AuthNav = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Login} name='login'/>
        <Stack.Screen component={Register} name='register'/>
        {/* <Stack.Screen component={TabNav} name='home'/> */}
    </Stack.Navigator>
  )
}

export default AuthNav

const styles = StyleSheet.create({})