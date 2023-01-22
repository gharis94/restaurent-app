import {createSlice} from '@reduxjs/toolkit'


export const tableSlice=createSlice({
    name:'table',
    initialState:{
        tableNo:''
    },
    reducers:{
        setTableNo:(state,action)=>{
            state.tableNo = action.payload;
        }
    }
})

export const {setTableNo} = tableSlice.actions

export default tableSlice.reducer;