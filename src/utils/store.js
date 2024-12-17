import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
})

/***
 * 
 * configureStore(takes an object which has multiple key:value pairs)
 * reducer: {} // needs to be passed inside object.
 * 
 * 
 * 
*/