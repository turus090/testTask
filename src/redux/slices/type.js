import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: ["Van", "Fully Integrated", "Alcove"],
  active: [],
};

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setActiveType: (state, { payload }) => {
      const isActive = state.active.includes(payload);
      if (isActive) {
        state.active = state.active.filter((item) => item !== payload);
      } else {
        state.active = [...state.active, payload];
      }
    },
  },
});

export const { setActiveType } = typeSlice.actions;

export default typeSlice.reducer;
