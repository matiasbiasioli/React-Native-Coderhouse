import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../theme/colors'
import React from 'react'

const Header = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        paddingTop: 40,
        paddingBottom: 20,
    },
    headerText: {
        fontSize: 30,
        color: colors.fourth,
        fontFamily: 'Poppins',
    }
})