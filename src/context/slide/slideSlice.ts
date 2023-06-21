import { createSlice } from '@reduxjs/toolkit'

interface slideState {
  currentSlide: number
}

const initialState: slideState = {
  currentSlide: 0,
}

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setSlide: (state, action) => {
      state.currentSlide = action.payload
    },
    prevSlide: (state) => {
      state.currentSlide = state.currentSlide === 0 ? 2 : state.currentSlide - 1
    },
    nextSlide: (state) => {
      state.currentSlide = state.currentSlide === 2 ? 0 : state.currentSlide + 1
    },
  },
})

export const { setSlide, prevSlide, nextSlide } = carouselSlice.actions
export default carouselSlice.reducer
