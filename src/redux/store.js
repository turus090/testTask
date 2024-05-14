import { configureStore } from "@reduxjs/toolkit";
import equipment from "./slices/equipment";
import type from "./slices/type";
import cars from "./slices/cars";

const store = configureStore({
  reducer: {
    equipment,
    type,
    cars
  },
});

export default store;
