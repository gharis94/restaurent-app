import {fetchData,uploadData,updateData} from '../../utils/firebas'
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenu= createAsyncThunk('menu/fetchMenu',async()=>{
     const data = await fetchData('menu');
     return data;
})

export const uploadMenu = createAsyncThunk('menu/upload', async (data) => {
    console.log('thunk', data)
    const rsp = await uploadData(data, 'menu');
    return rsp;
})

export const updateMenu = createAsyncThunk('menu/menuUpdate',async (data)=>{
    console.log('updating..')
    const rsp = await updateData('menu',data)
    console.log(rsp)
    return rsp
})


const initialState = {
    menu: [],
    status: '',
    error: '',
    searchField:'',
    category:'all',
    isDisplay:true
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
            state.status = 'fetching the menu'
        })
        builder.addCase(fetchMenu.fulfilled,(state,action)=>{
            state.status='fetched successful'
            state.menu=action.payload
            state.error=''
        })
        builder.addCase(fetchMenu.rejected,(state,action)=>{
            state.status='fetching unsuccessful'
            state.error=action.error.message
        })
        builder.addCase(uploadMenu.pending,state=>{
            state.status='uploading menu'
        })
        builder.addCase(uploadMenu.fulfilled,state=>{
            state.status='menu uploaded'
        })
        builder.addCase(uploadMenu.rejected,(state,action)=>{
            state.status='uploading menu failed'
            state.error=action.error.message
        })
        builder.addCase(updateMenu.pending,(state)=>{
            state.status='updating the menu'
        })
        builder.addCase(updateMenu.fulfilled,(state,action)=>{
            state.status='updated menu'
            //console.log(action.meta.arg)
            state.menu=state.menu.map(item=>item.id===action.meta.arg.id?(action.meta.arg):(item))
        })
        builder.addCase(updateMenu.rejected,(state,action)=>{
            state.status='updating failed'
            state.error=action.error.message
        })
    }
});
export const{setSearchField,setCategory} = menuSlice.actions

export default menuSlice.reducer;