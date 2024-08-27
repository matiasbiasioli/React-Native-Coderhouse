// import { createSlice } from '@reduxjs/toolkit'

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cartItem: [],
//         totalItems: 0
//     },
//     reducers: {
//         setItemToCart(state, action) {
//             const newItem = action.payload;
//             const existingItem = state.cartItem.find(item => item.id === newItem.id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//                 existingItem.totalPrice += newItem.price;
//             } else {
//                 state.items.push({
//                     id: newItem.id,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     title: newItem.title,
//                 });
//             }
//             state.totalQuantity++;
//         },
//     }
// })

// export const { setItemToCart } = cartSlice.actions;
// export default cartSlice.reducer