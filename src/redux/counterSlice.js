import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counteValue:18,
    username:'Jazzy B',
    company:'',
    phone:''
}

export const stateSlice = createSlice({
    name:'slices',
    initialState,
    reducers:{
        increment:(state) => {
            state.counteValue += 1
        },
        decrement:(state) => {
            state.counteValue -= 1
        },
        incrementByAmount: (state, action) => {
            state.counteValue += action.payload
        }
    }
})


export const {increment, decrement, incrementByAmount} = stateSlice.actions

export default stateSlice.reducer