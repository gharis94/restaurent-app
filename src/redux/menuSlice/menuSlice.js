import {fetchData} from '../../utils/firebas'
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu= createAsyncThunk('menu/fetchMenu',async()=>{
     const data = await fetchData('menu');
     return data;
})


const initialState = {
    menu: [],
    isLoading: false,
    error: '',
    searchField:'',
    category:'all'
}
const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        setSearchField:(state,action)=>{
            state.searchField=action.payload
        },
        setCategory:(state,action)=>{
            state.category=action.payload
        }
    },
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
export const{setSearchField,setCategory} = menuSlice.actions

export default menuSlice.reducer;