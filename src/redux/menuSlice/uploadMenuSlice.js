// import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
// import { uploadData } from '../../utils/firebas';


// export const uploadMenu = createAsyncThunk('menuUpload/upload',async(data)=>{
//     console.log('thunk',data)
//     const rsp = await uploadData(data,'menu');
//  return rsp;  
// })

// const initialState={
//     status:'',
//     uploading:false,
//     error:''
// }
// const uploadMenuSlice = createSlice({
//     name:'uploadMenu',
//     initialState,
//     extraReducers:(builder)=>{
//         builder.addCase(uploadMenu.pending,(state)=>{
//             state.uploading=true
//         })
//         builder.addCase(uploadMenu.fulfilled,(state,action)=>{
//             state.uploading=false;
//             state.status=action.payload
//             state.error=''
//         })
//         builder.addCase(uploadMenu.rejected,(state,action)=>{
//             state.uploading=false;
//             state.status='unsuccessful';
//             state.error=action.payload
//         })
//     }

// })
// export default uploadMenuSlice.reducer;