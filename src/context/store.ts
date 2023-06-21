'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import modalSlice from './modal/modalSlice'
import slideSlice from './slide/slideSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
    carousel: slideSlice,
  },
})

export default store
