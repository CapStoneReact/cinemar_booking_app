import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';


const store = configureStore({
    reducer: {
        movie,
    },
})

export default store;