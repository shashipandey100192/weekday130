import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"ravi",
  age:59,
  phone:"954154"
}


export const myactionstype = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 10
    },
    valuechange:(state)=>{
        state.name = state.playload.name;
    }

  }
})

export const { increment,valuechange} = myactionstype.actions

export default myactionstype.reducer