import { configureStore} from "@reduxjs/toolkit";
import menuSlice from './menuSlice/menuSlice';
import uploadMenuSlice from './menuSlice/uploadMenuSlice';
import cartSlice from "./cartSlice/cartSlice";

export const store= configureStore({
    reducer:{
        menu:menuSlice,
        uploadMenu:uploadMenuSlice,
        cart:cartSlice
    }
})