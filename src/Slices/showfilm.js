import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../Service/movieAPI";


const initialState = {
    movie: null,
    isLoading: false,
    error: null,
}

export const fetchShowtimeFilm = createAsyncThunk(
    'showfilm/fetchShowtime',
    async (id) => {
        try {
            const data = await movieAPI.fetchShowtime(id);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
)

const showFilmSlice = createSlice({
    name: "showfilm",
    initialState,
    reducers: {
        setShowTimeReset: (state) => {
            state.movie = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShowtimeFilm.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchShowtimeFilm.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.movie = payload;
        });
        builder.addCase(fetchShowtimeFilm.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})

export const { setShowTimeReset } = showFilmSlice.actions
export default showFilmSlice.reducer