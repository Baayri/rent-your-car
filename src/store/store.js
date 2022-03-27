import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import authReducer from './features/authentication/authenticationSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
})