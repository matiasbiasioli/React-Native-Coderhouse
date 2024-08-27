import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slices/homeSlice'
import { ecApi } from '../services/ecApi'
import authSlice from './slices/authSlice'
import cartSlice from './slices/cartSlice'

const store = configureStore({
    reducer: {
        homeSlice,
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice,
        // cartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ecApi.middleware)
})

export default store
