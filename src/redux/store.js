import { configureStore } from "@reduxjs/toolkit";
import equipment from "./slices/equipment";
import type from "./slices/type";
import cars from "./slices/cars";
import modal from "./slices/modal";

const store = configureStore({
  reducer: {
    equipment,
    type,
    cars,
    modal
  },
});

export default store;
