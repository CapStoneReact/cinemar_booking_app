import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';
import auth from './Slices/auth';
import showfilm from './Slices/showfilm';
import registerAuth from './Slices/registerAuth';

const store = configureStore({
    reducer: {
        movie,
        auth,
        showfilm,
        registerAuth
    },
})

export default store;