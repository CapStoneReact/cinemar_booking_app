import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomListAPI from "../Service/roomListAPI";

const initialState = {
    data: null,
    loading: false,
    error: null,
}
export const fetchRoomList = createAsyncThunk(
    "roomList/fetchRoomList",
    async (values) => {
        try {
            const data = await roomListAPI.fetchRoomList(values)

            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const roomListSlice = createSlice({
    name: "roomList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRoomList.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        });
        builder.addCase(fetchRoomList.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error;
        })

    }
})

export default roomListSlice.reducer;