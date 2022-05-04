import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './counterSlice'

const store = configureStore({
  reducer: {
    slice: sliceReducer
  },
})
export default store