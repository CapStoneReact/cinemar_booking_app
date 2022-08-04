import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroup: "BHDStar",
  selectedTheater: "bhd-star-cineplex-bitexco",
};

const filterSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    changeGroup: (state, { payload }) => {
      state.selectedGroup = payload;
    },
    changeTheater: (state, { payload }) => {
      state.selectedTheater = payload;
    },
  },
});

export const { changeGroup, changeTheater } = filterSlice.actions;
export default filterSlice.reducer;
