import filter from "./Slices/filter";
import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie';
import auth from './Slices/auth';
import showfilm from './Slices/showfilm';
import registerAuth from './Slices/registerAuth';
import userInfor from './Slices/userInfor';
import userAuth from './Slices/userAuth';
import newsReducer from './Pages/News/reducer';
import roomList from './Slices/roomList';
import bookTicket from './Slices/bookTicket';

const store = configureStore({
    reducer: {
        movie,
        auth,
        showfilm,
        registerAuth,
        userInfor,
        userAuth,
        newsReducer,
        roomList,
        bookTicket,
        filter,

    },
})

export default store;
