import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';

// TODO -add a reducer to this store
export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})

