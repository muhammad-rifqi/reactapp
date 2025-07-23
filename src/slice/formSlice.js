// src/features/userForm/userFormSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: null,
};

const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { setFormData, clearFormData } = userFormSlice.actions;
export default userFormSlice.reducer;
