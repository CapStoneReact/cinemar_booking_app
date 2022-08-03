import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';
import auth from './Slices/auth';
import showfilm from './Slices/showfilm';
import registerAuth from './Slices/registerAuth';
import userInfor from './Slices/userInfor';
import userAuth from './Slices/userAuth';
import newsReducer from './Pages/News/reducer';

const store = configureStore({
    reducer: {
        movie,
        auth,
        showfilm,
        registerAuth,
        userInfor,
        userAuth,
        newsReducer,


    },
})

export default store;