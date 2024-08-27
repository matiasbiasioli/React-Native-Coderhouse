import { View, Text, useState, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors';
// import MapView from 'react-native-maps'


const MapLocation = ({ route, navigation }) => {
    const { location } = route.params;
    console.log(location);
    console.log(JSON.stringify(location, null, " "));

    return (
        <View>
            <View style={styles.mapContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color="white" />
                </Pressable>
                <Header title='Map' />
            </View>

            {/* <View>
                <MapView
                    style={styles.map}
                    pointerEvents={true}
                    showsUserLocation={true}
                    region={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        backgroundColor: colors.secondary,
        paddingTop: 40,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapLocation