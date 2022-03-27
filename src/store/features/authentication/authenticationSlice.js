import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        id: 0,
    },
    reducers: {
        login: (state) => {
            state.auth = true
        },
        logout: (state) => {
            state.auth = false
        },
        userId: (state, id) => {
            state.id = id.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, userId } = authenticationSlice.actions

export default authenticationSlice.reducer