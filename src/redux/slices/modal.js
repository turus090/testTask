import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
  status: "default",
  idCar: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true
      state.status = "default"
      state.idCar = payload
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer