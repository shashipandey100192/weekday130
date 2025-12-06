import { configureStore } from '@reduxjs/toolkit'
import myactionstype from './Myactionslist';

export const myactionstore = configureStore({
  reducer: {
    counter:myactionstype
  },
})