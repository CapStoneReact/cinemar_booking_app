import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';
import auth from './Slices/auth';

const store = configureStore({
    reducer: {
        movie,
        auth,
    },
})

export default store;