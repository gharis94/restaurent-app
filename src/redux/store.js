import { configureStore,combineReducers} from "@reduxjs/toolkit";
import menuSlice from './menuSlice/menuSlice';
//import uploadMenuSlice from './menuSlice/uploadMenuSlice';
import cartSlice from "./cartSlice/cartSlice";
import orderSlice from './orderSlice/orderSlice'
import tableSlice from "./tableSlice/tableSlice";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";


const configpersist={
    key:'root',
    version:1,
    storage,
}
const reducer = combineReducers({
    menu: menuSlice,
    cart: cartSlice,
    order: orderSlice,
    table: tableSlice
})
const persistedReducer = persistReducer(configpersist,reducer);

export const store= configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})