import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
        <Header title='Categories' />
        <Categories navigation={navigation} />
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({})