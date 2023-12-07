import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "./counter/couterSlice";

export const store = configureStore({

    reducer:{counter:couterSlice}

})

export type  RootSate = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch