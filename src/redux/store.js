import { configureStore} from "@reduxjs/toolkit";
import menuSlice from './menuSlice/menuSlice'
import uploadMenuSlice from './menuSlice/uploadMenuSlice'

export const store= configureStore({
    reducer:{
        menu:menuSlice,
        uploadMenu:uploadMenuSlice
    }
})