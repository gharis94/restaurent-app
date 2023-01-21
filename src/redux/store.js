import { configureStore} from "@reduxjs/toolkit";
import menuSlice from './menuSlice/menuSlice';
//import uploadMenuSlice from './menuSlice/uploadMenuSlice';
import cartSlice from "./cartSlice/cartSlice";
import orderSlice from './orderSlice/orderSlice'

export const store= configureStore({
    reducer:{
        menu:menuSlice,
        cart:cartSlice,
        order:orderSlice
    }
})