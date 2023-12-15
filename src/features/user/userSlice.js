import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    user:'victor'
}


const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        loginUser: (state) => {
        },
        logoutUser: (state) => {
            state.user = false;
            
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer