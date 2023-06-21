import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cartItems, CartItems } from './../../../cartItems'

interface CartState {
  items: CartItems[]
  amount: number
  total: number
  isLoading: boolean
}

const initialState: CartState = {
  items: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // clear cart
    clearCart: (state) => {
      state.items = []
    },
    // add products to cart
    addProduct: (state, action: PayloadAction<any>) => {
      // add item logic
    },
    // remove products from cart
    removeProduct: (state, action: PayloadAction<any>) => {
      // remove item logic
    },
    // calculate total
    calculateTotal: (state) => {},
  },
})

export const { clearCart, addProduct, removeProduct, calculateTotal } =
  cartSlice.actions
export default cartSlice.reducer
