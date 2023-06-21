import { combineReducers } from 'redux'

// individual slice
import cartReducer from './cart/cartSlice'
import modalSlice from './modal/modalSlice'
import slideSlice from './slide/slideSlice'

// Combine the individual reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalSlice,
  carousel: slideSlice,
  // other reducers...
})

// Define the RootState type by inferring the type of the root reducer
export type RootState = ReturnType<typeof rootReducer>
