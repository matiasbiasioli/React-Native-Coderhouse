import { Pressable, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import React from 'react'
// import { categories } from '../data/categories'
import { colors } from '../theme/colors'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/ecApi'

const Categories = ({ navigation }) => {
  //Llamo con el useSelector el state guardado en el homeSlice
  // const categories = useSelector(state => state.homeSlice.allCategories)
  // const isLoading = false
  //Llamamos a las categorias en Firebase con el Hook que creamos
  const { data, isLoading } = useGetCategoriesQuery()
  const categories = data;
  return (
    <View style={styles.viewContainer}>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" />
        : <FlatList
          style={styles.categoriesContainer}
          data={categories}
          renderItem={({ item }) =>
            <Pressable onPress={() => navigation.navigate('products', { item })}>
              <Text style={styles.itemContainer}>{item}</Text>
            </Pressable>
          }
          keyExtractor={key => key}
        />
      }
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.third,
  },
  categoriesContainer: {
    paddingTop: 5,
  },
  itemContainer: {
    backgroundColor: colors.primary,
    color: colors.fourth,
    margin: 'auto',
    marginVertical: 3,
    width: '90%',
    textAlign: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: colors.fourth,
    borderRadius: 10,
    fontSize: 20
  }
})