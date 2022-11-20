import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isOpen:false,
    cartItems:[]
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        changeCartState:(state)=>{
            state.isOpen=!state.isOpen;
        },
        addItemToCart:(state,action)=>{
            let check = state.cartItems.find(({id})=>id === action.payload.id);
            
            if(!check){
                let item = {
                    ...action.payload,
                    quantity: 1
                }
                state.cartItems.push(item);
            }else{
                state.cartItems.map(item=>(item.id === action.payload.id?({...item,quantity:item.quantity++}):item))
            }
            
            
        },
        decrementFromCart:(state,action)=>{
            let check = state.cartItems.find(item=>item.id === action.payload.id );
            check.quantity>1?(
                state.cartItems.map(item=>item.id === action.payload.id?({...item,quantity:item.quantity--}):item)
            ):(
                state.cartItems.filter(item=>item.id !== action.payload.id)
            )
        },
        deleteFromCart:(state,action)=>{
            delete state.cartItems[action.payload]
        }
    }
})

export default cartSlice.reducer;

export const {addItemToCart,changeCartState,deleteFromCart,decrementFromCart} = cartSlice.actions;