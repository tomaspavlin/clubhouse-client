import { createSlice } from '@reduxjs/toolkit';

// slice
const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    array: [],
  },
  reducers: {
    setEvents: (state, action) => {
      state.array = action.payload
    },
  },
});

// actions
const { setEvents } = eventsSlice.actions;

export const fetchEvents = () => async dispatch => {
  let res = await fetch("http://localhost:9000/events")
  res = await res.json()
  const events = res.events
  dispatch(setEvents(events))
};

// selectors
export const selectEvents = state => state.events.array;

// reducers
export const eventsReducer =  eventsSlice.reducer;
