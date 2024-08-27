import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { setItemSelected } from '../redux/slices/homeSlice'

const ProductsItem = ({ item, navigation }) => {
  const dispatch = useDispatch()
  const handleItemSelected = () => {
    dispatch(setItemSelected(item))
    navigation.navigate('productDetail')
  }
  return (
    <Pressable style={styles.itemContainer} onPress={() => handleItemSelected()}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <View>
        <Image style={styles.imageSize} source={{ uri: item.images }} />
      </View>
    </Pressable>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.secondary,
    padding: 30,
    width: '90%',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTextContainer: {
    flex: 1
  },
  itemText: {
    fontSize: 30
  },
  imageSize: {
    width: 100,
    height: 100
  }
})