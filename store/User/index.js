import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
            id:'',
            name:'',
            pass:'',
            phone:'',
            uploaded:'',
            // access: false             DEFAULT**
            access: true
        },
    reducers:{
        setuser(state,action){
            return {...state,
                access: true,
                name: action.payload.name,
                phone: action.payload.phone,
                id: action.payload.id
            }
        },
        logOut(state){
            console.log('log out successfully!')
            return{...state, access: false, id:''}
        }
    }
})

export const userAction = userSlice.actions;

export default userSlice.reducer;
