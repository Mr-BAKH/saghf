import { configureStore } from "@reduxjs/toolkit";
import user from "./User/index";


const store = configureStore({
    reducer:{
        user,
    }
})


export default store