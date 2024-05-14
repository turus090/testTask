import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["AC", "Automatic", "Kitchen", "TV", "Shower/WC"],
  active: [],
};

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    setActiveEquipment: (state, { payload }) => {
      const isActive = state.active.includes(payload);
      if (isActive) {
        state.active = state.active.filter((item) => item !== payload);
      } else {
        state.active = [...state.active, payload];
      }
    },
  },
});

export const { setActiveEquipment } = equipmentSlice.actions;

export default equipmentSlice.reducer;
