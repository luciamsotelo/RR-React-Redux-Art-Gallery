import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';
import { logger } from '../features/middleware';

// TODO -add a reducer to this store
export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [
        logger
    ]
})

