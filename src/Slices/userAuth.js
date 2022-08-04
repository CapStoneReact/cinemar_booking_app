import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../Service/authAPI";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}
export const fetchUserList = createAsyncThunk(
    "userAuth/fetchUserList",
    async (group) => {
        try {
            const data = await authAPI.fetchUserList(group)
            //lưu thông in user xuống local storage
            return data
        }
        catch (e) {
            throw e;
        }

    }
)
export const updateUser = createAsyncThunk(
    "userAuth/updateUser",
    async (values, group, dispatch) => {
        try {
            const data = await authAPI.updateUser(values, group)
            alert("Cập Nhật User Thành Công");
            dispatch(fetchUserList(group));
            //lưu thông in user xuống local storage
            JSON.parse(localStorage.getItem("user"))
            return data
        }
        catch (e) {
            throw e;
        }

    }
)

const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUserList.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(fetchUserList.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(updateUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error;
        })

    }
})

export default userAuthSlice.reducer;