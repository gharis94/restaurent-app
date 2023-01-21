import {createDraftSafeSelector,createSelector} from '@reduxjs/toolkit'

export const menu =state=>state.menu;

export const getMenu =createDraftSafeSelector(menu,(state)=>{ 
    console.log('getMenu')
    return(state.menu)});

export const getCategory =createSelector([menu],(state)=>{
    console.log('getCategory')
    return(state.category)});