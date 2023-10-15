import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getVisibleContacts(state, action) {
      return action.payload;
    },
  },
});

export const { getVisibleContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
