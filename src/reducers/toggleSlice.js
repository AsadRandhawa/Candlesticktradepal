import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false, // Default toggle state
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

// Export the action correctly
export const { setToggle } = toggleSlice.actions;

// Export the reducer correctly
export default toggleSlice.reducer;
