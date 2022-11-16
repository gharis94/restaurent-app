import { configureStore} from "@reduxjs/toolkit";
import {menuSlice} from './menuSlice/menuSlice'

export const store= configureStore({
    reducer:{
        menu:menuSlice
    }
})