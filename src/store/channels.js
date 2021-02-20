import { createSlice } from '@reduxjs/toolkit';

// slice
const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    array: [],
  },
  reducers: {
    setChannels: (state, action) => {
      state.array = action.payload
    },
  },
});

// actions
const { setChannels } = channelsSlice.actions;

export const loadChannels = () => async dispatch => {
  let res = await fetch("http://localhost:9000/channels")
  res = await res.json()
  const channels = res.channels
  dispatch(setChannels(channels))
};

// selectors
export const selectChannels = state => state.channels.array;

// reducer
export const channelsReducer = channelsSlice.reducer;
