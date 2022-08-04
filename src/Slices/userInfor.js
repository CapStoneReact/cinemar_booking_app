import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}
export const getInfor = createAsyncThunk(
    "userInfor/getInfor",
    async (values) => {
        try {
            const data = await authAPI.getInfor(values)
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const inforSlice = createSlice({
    name: "userInfor",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getInfor.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInfor.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(getInfor.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})

export default inforSlice.reducer;