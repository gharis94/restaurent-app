import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isOpen:false,
    cartItems:[]
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        cartState:(state)=>{
            state.isOpen=!state.isOpen;
        }
    }
})

export default cartSlice;