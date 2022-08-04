import { configureStore } from "@reduxjs/toolkit";
import movie from "./Slices/movie";
import auth from "./Slices/auth";
import showfilm from "./Slices/showfilm";
import filter from "./Slices/filter";

const store = configureStore({
  reducer: {
    movie,
    auth,
    showfilm,
    filter,
  },
});

export default store;
