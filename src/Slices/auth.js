import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: {
        takKhoan: "",
        email: "",
        accessToken: ""

    },
    isLoading: false,
    error: null,
    // user: JSON.parse(localStorage.getItem("user")) || null
}
export const loginAction = createAsyncThunk(
    "auth/login",
    async (values) => {
        try {
            const data = await authAPI.loginAction(values)
            // const data = { name: "AAAA" }
            //lưu thông in user xuống local storage
            localStorage.setItem("user", JSON.stringify(data))
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(loginAction.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })
    }
})

export default authSlice.reducer;