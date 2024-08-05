import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import {apiSlice} from './slices/apiSlice'


const store = configureStore({

    reduce : {
        [apiSlice,reducerPath]: apiSlice.reducer,
        auth:authReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
devTools:true,
});