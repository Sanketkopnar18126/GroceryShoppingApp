import { createSlice } from "@reduxjs/toolkit";

const AddDetails = createSlice({
  name: "addDetails",
  initialState: [],
  reducers: {
    setLocal(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setLocal } = AddDetails.actions;
export default AddDetails.reducer;
