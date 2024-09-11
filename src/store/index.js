import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../reducers/counterSlice'
import toggleReducer from '../reducers/toggleSlice'
import InputSlice from '../reducers/InputSlice'
export default configureStore({
  reducer: {
    currency: currencyReducer,
    toggle: toggleReducer,
    InputValue: InputSlice,
  },
})