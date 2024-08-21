import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = ({inputValue, setInputValue}) => {
  // const [inputValue, setInputValue] = useState('')
  // console.log(inputValue);
  const clearSearch = ()=>{
    setInputValue('')
  }
  return (
    <View style={styles.searchContainer}>
      <TextInput
        onChangeText = {(value)=>setInputValue(value)}
        style={styles.input}
        value={inputValue}
        placeholder='search product here'
      />
      <Pressable onPress={()=> clearSearch() }>
        <Entypo name="cross" size={34} color="white" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: colors.secondary
  },
  input: {
    width: '50%',
    padding: 10,
    borderColor: colors.fourth,
    borderWidth: 2,
    borderRadius: 10,
    color: colors.fourth,
    fontSize: 20
  }
})