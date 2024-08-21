import { View, Text, useState, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
// import MapView from 'react-native-maps'


const MapLocation = ({ route, navigation }) => {
    const { location } = route.params;
    console.log(location);
    console.log(JSON.stringify(location, null, " "));

    return (
        <View>
            <Header title='Map' />
            <Pressable onPress={() => navigation.goBack()}>
                <Text>Ir Atrás</Text>
            </Pressable>
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
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapLocation