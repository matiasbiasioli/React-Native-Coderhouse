import React from 'react'
import TabNav from './TabNav'
import AuthNav from './AuthNav'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const MainNav = () => {
    const user = useSelector(state => state.authSlice.user)
    return (
        <NavigationContainer>
            {user ? <TabNav /> : <TabNav />}
        </NavigationContainer>
    )
}

export default MainNav