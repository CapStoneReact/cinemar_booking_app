import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';
import auth from './Slices/auth';
import showfilm from './Slices/showfilm';

const store = configureStore({
    reducer: {
        movie,
        auth,
        showfilm,
    },
})

export default store;