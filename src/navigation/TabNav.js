import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import RootNavigation from './RootNavigation'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../theme/colors'
import ProfileNav from './ProfileNav'

const TabNav = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, title: '' }}>
            <Tab.Screen
                component={RootNavigation}
                name='home'
                options={{ tabBarIcon: ({focused}) => <FontAwesome name="home" size={focused ? 34 : 30} color={focused ? colors.primary : 'black'} /> }} />
            <Tab.Screen
                component={ProfileNav}
                name='profile'
                options={{ tabBarIcon: ({focused}) => <FontAwesome name="user" size={focused ? 32 : 28} color={focused ? colors.primary : 'black'} /> }} />
        </Tab.Navigator>

    )
}

export default TabNav

const styles = StyleSheet.create({})