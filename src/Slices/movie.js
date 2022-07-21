import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Service/movieAPI";


const initialState = {
    movies: [],
    isLoading: false,
    error: null,
}

export const getMovieShowing = createAsyncThunk(
    'movie/getMovieShowing',
    async () => {
        try {
            const data = await movieAPI.getMovieShowing();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getMovieShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovieShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.movies = payload;
        });
        builder.addCase(getMovieShowing.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export default movieSlice.reducer