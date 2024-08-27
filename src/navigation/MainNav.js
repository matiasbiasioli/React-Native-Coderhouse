import React, { useEffect, useState } from 'react'
import TabNav from './TabNav'
import AuthNav from './AuthNav'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIdToken, setUser } from '../redux/slices/authSlice'

const MainNav = () => {
    const [checkedUserEmail, setCheckedUserEmail] = useState()
    const [checkedUserPassword, setCheckedUserPassword] = useState()
    const user = useSelector(state => state.authSlice.user)
    const userPassword = useSelector(state => state.authSlice.idToken)
    console.log('trae user:', user);
    console.log('trae userPassword:', userPassword);
    
    useEffect(() => {
        const checkUser = async () => {
            try {
                const getUserEmail = await AsyncStorage.getItem('userEmail');   
                const getUserPassword = await AsyncStorage.getItem('userPassword');
                getUserEmail ? setCheckedUserEmail(getUserEmail) : setCheckedUserEmail(user);
                getUserPassword ? setCheckedUserPassword(getUserPassword) : setCheckedUserPassword(userPassword)
            } catch (error) {
                console.log(error);
            };
        };
        checkUser();
    },[user, userPassword])

    return (
        <NavigationContainer>
            {(checkedUserEmail && checkedUserPassword) ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
    )
}

export default MainNav