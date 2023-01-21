import {createDraftSafeSelector} from '@reduxjs/toolkit'

const cart = state => state.cart

export const isOpenSelector = state=> {
    console.log('isOpenSelector')
    return(state.isOpen)};

export const totalCount = createDraftSafeSelector(cart,(state)=>{
    console.log('totalCount')
    return(state.cartItems.reduce((acc,cur)=>{
    acc += cur.quantity;
   return acc; 
},0))})

export const cartItemSelector =createDraftSafeSelector(cart,(state)=>{
    console.log('cartItemSelector')
    return(state.cartItems)});

export const totalAmount = createDraftSafeSelector(cart,(state)=>{
    console.log('totalAmount')
    return(state.cartItems.reduce((acc,cur)=>{
    acc += (cur.quantity*cur.price);
    return acc;
},0))})