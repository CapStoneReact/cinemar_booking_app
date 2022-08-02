import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}
export const registerAction = createAsyncThunk(
    "registerAuth/register",
    async (values) => {
        try {
            const data = await authAPI.registerAcion(values)
            //lưu thông in user xuống local storage
            localStorage.setItem("user", JSON.stringify(data))
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const registerAuthSlice = createSlice({
    name: "registerAuth",
    initialState,
    reducers: {
        resetRegisterAuth: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(registerAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(registerAction.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})
export const { resetRegisterAuth } = registerAuthSlice.actions;

export default registerAuthSlice.reducer;