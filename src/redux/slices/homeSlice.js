import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../../data/categories'
import { products } from '../../data/products'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        allCategories: categories,
        allProducts: products,
        categorySelected: '',
        itemSelected: {}
    },
    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload;
        },
        setItemSelected: (state, action) =>{
            state.itemSelected = action.payload
        }
    }
});

export const { setCategory, setItemSelected } = homeSlice.actions;

export default homeSlice.reducer
