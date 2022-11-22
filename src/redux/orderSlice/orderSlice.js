import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {uploadData,fetchData,updateData} from '../../utils/firebas';

export const addToOrders = createAsyncThunk('adddToOrders/order',async(dataObj)=>{
    console.log('start')
    const {data,amount} = dataObj;
    let updatedData = data.map(item=>({
        name:item.name,
        itemId:item.id,
        quantity:item.quantity,
    }));
    let newData ={
        items:updatedData,
        status:false,
        amount
    }
    await uploadData(newData,'orders');
})

export const fetchOrders = createAsyncThunk('fetchOrders/order',async()=>{
    const rsp = await fetchData('orders');
    return rsp
})

export const updateOrder = createAsyncThunk('updateOrder.order',async(dataObj)=>{
    const rsp = await updateData(dataObj);
    return rsp;
})

const initialState={
    status:'',
    error:'',
    orders:[]
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(addToOrders.pending,(state)=>{
            state.status='uploading';
        })
        builder.addCase(addToOrders.fulfilled,(state)=>{
            state.status='success'
        })
        builder.addCase(addToOrders.rejected,(state,action)=>{
            state.status = 'failed';
            state.error =action.payload;
        })
        builder.addCase(fetchOrders.pending,(state)=>{
            state.status = 'data fetching pending';
        })
        builder.addCase(fetchOrders.fulfilled,(state,action)=>{
            state.status = 'data fetched successful';
            state.orders = action.payload;
        })
        builder.addCase(fetchOrders.rejected,(state,action)=>{
            state.status = 'data fetching failed';
            state.error = action.payload;
        })
        builder.addCase(updateOrder.pending,(state)=>{
            state.status = 'data updating in progress';
        })
        builder.addCase(updateOrder.fulfilled,(state,action)=>{
            state.status = 'data updated';
            state.orders=action.payload;
        })
        builder.addCase(updateOrder.rejected,(state,action)=>{
            state.status = 'data updating failed';
            state.error = action.payload;
        })
    }
})

export default orderSlice.reducer;