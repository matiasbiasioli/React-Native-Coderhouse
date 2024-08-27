import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../theme/colors'
import React from 'react'

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    gap: 10
  },
  headerText: {
    fontSize: 30,
    color: colors.fourth,
    fontFamily: 'Poppins',
  }
})