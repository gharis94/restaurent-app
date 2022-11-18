import { createSlice } from "@reduxjs/toolkit";


initialState={
    orders:[]
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.orders.push(action.payload)
        }
    }
})

export default orderSlice.reducer;