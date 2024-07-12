//in case of hook and return use jsx otherwise js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
})

//formik is a renowned library used for form validation
// redux er store ta components er sathe map hoy