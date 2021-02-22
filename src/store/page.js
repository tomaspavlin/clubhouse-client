import { createSlice } from '@reduxjs/toolkit';
import { PageIndex } from '../model/enums';

// slice
const pageSlice = createSlice({
  name: 'page',
  initialState: {
    index: PageIndex.CHANNELS,
  },
  reducers: {
    setPageIndex: (state, action) => {
      state.index = action.payload
    },
  },
});

// actions
export const { setPageIndex } = pageSlice.actions;

// selectors
export const selectPageIndex = state => state.page.index;

// reducer
export const pageReducer = pageSlice.reducer;
