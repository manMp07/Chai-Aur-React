import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        incremet(state){
            state.count += 1;
        },
        decrement(state){
            state.count -= 1;
        },
        incremetByValue(state, action){
            state.count += action.payload;
        }
    }
})

export const {incremet, decrement, incremetByValue} = counterSlice.actions;

export default counterSlice.reducer;