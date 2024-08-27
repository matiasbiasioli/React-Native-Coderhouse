import { Image, Pressable, SafeAreaView, StyleSheet, Text, View, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location';
import { ActivityIndicator } from 'react-native';
import { usePutImageMutation } from '../services/ecApi';
import { useGetImageQuery } from '../services/ecApi';
import { colors } from '../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slices/authSlice';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    // const [image, setImage] = useState()
    const defaultImage = 'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg';
    //Ingresar imagen en DB de firebase
    const [trigger, result] = usePutImageMutation()
    //Traer imagen guardada en db firebase
    const { data, isLoading, error, refetch } = useGetImageQuery()
    //Traer locación
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    //Tomar imagen de galeria
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        });
        // console.log(result);
        if (!result.canceled) {
            //setear imagen en variable local
            // setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
            //setear imagen con el trigger en base de datos firebase
            await trigger({ image: `data:image/jpeg;base64,${result.assets[0].base64}` })
            refetch()
        }
    };
    //Camera Permissions
    const cameraImage = async () => {
        let cameraResult = await ImagePicker.requestCameraPermissionsAsync()
        // console.log(cameraResult)
        if (cameraResult.granted === false) {
            alert('no le has dado permisos')
        } else if (cameraResult) {
            const openCamera = await ImagePicker.launchCameraAsync({
                // mediaTypes: ImagePicker.MediaTypeOptions.All,
                // allowsEditing: true,
                // aspect: [4, 4],
                // quality: 1,
                base64: true
            })
            console.log(openCamera);
            // setImage(openCamera.assets[0].uri)
            await trigger({ image: `data:image/jpeg;base64,${openCamera.assets[0].base64}` })
            refetch()
        }
    }
    //Mapa Locacion
    const mapLoc = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log('LOCATION es:', location);
        setLocation(location);
        navigation.navigate('mapLocation', { location })
    }
    //LogOut
    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('userEmail');
            await AsyncStorage.removeItem('userPassword');
            dispatch(clearUser())
            // navigation.navigate('login')
        }
        catch (error) {
            console.log(error);
        }
    }
    //Alert Logout
    const alertLogOut = () => {
        Alert.alert('Logout', '¿Really you want to logout?', [
            { text: 'Cancel'},
            { text: 'Si', onPress: ()=> logOut()},
        ]);
    }

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Header title={'My Profile'} />
            </View>
            <View style={styles.imageContainer}>
                {/* {data ? <Image style={styles.profileImage} source={{ uri: data.image }} /> : <Image style={styles.profileImage} source={{ uri: defaultImage }} />} */}
                {isLoading ? <ActivityIndicator size="large" color="#0000ff" />
                    :
                    <Image style={styles.profileImage} source={data ? { uri: data.image } : { uri: defaultImage }} />
                }
            </View>
            <Pressable style={styles.btnContainer} onPress={() => pickImage()}>
                <MaterialCommunityIcons name="view-gallery" size={40} color="black" />
                <Text>Open Galery</Text>
            </Pressable>
            <Pressable style={styles.btnContainer} onPress={() => cameraImage()}>
                <Entypo name="camera" size={40} color="black" />
                <Text>Open Camera</Text>
            </Pressable>
            <Pressable style={styles.btnContainer} onPress={() => mapLoc()}>
                <Entypo name="map" size={40} color="black" />
                <Text>Open Map</Text>
            </Pressable>
            <Pressable style={styles.btnContainer} onPress={alertLogOut}>
                <MaterialIcons name="logout" size={40} color="black" />
                <Text>Logout</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.secondary,
        paddingTop: 20,
        paddingBottom: 20,
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 200,
        height: 200
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 20,
    }
})