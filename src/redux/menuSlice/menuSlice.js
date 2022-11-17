import {fetchData} from '../../utils/firebas'
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu= createAsyncThunk('menu/fetchMenu',async()=>{
     const data = await fetchData();
     return data;
})


const initialState = {
    menu: [],
    isLoading: false,
    error: ''
}
const menuSlice = createSlice({
    name:'menu',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchMenu.pending,state=>{
            state.isLoading = true
        })
        builder.addCase(fetchMenu.fulfilled,(state,action)=>{
            state.isLoading=false
            state.menu=action.payload
            state.error=''
        })
        builder.addCase(fetchMenu.rejected,(state,action)=>{
            state.isLoading=false
            state.menu=[]
            state.error=action.error.message
        })
    }
});

export default menuSlice.reducer;