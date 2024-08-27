import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../theme/colors'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Header title='Categories' />
      </View>
      <Categories navigation={navigation} />
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  headerView: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: colors.secondary
  }
})