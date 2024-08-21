import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import MapLocation from '../screens/MapLocation'

const ProfileNav = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Profile} name='profile' />
            <Stack.Screen component={MapLocation} name='mapLocation'/>
        </Stack.Navigator>
    )
}

export default ProfileNav