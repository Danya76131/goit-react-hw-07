import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { setNameFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filterSlice.reducer;
