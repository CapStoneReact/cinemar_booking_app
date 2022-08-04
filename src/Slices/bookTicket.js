import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomListAPI from "../Service/roomListAPI";

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}
export const bookingTicket = createAsyncThunk(
    "bookTicket/bookingTicket",
    async (values) => {
        try {
            const data = await roomListAPI.bookTicket(values)

            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const bookTicketSlice = createSlice({
    name: "bookTicket",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(bookingTicket.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(bookingTicket.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(bookingTicket.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})

export default bookTicketSlice.reducer;