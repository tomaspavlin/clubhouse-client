import { createSlice } from '@reduxjs/toolkit';

// slice
const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    array: [],
    joinedChannel: undefined,
    isModalOpened: false,
  },
  reducers: {
    setChannels: (state, action) => {
      state.array = action.payload
    },
    setJoinedChannel: (state, action) => {
      console.assert(action.payload !== undefined)
      state.joinedChannel = action.payload
      state.isModalOpened = true
    },
    unsetJoinedChannel: (state, action) => {
      state.joinedChannel = undefined
      state.isModalOpened = false
    },
    setModalOpened: (state, action) => {
      state.isModalOpened = true
    },
  },
});

// actions
const { setChannels, setJoinedChannel, unsetJoinedChannel, setModalOpened } = channelsSlice.actions;

export const fetchChannels = () => async dispatch => {
  let res = await fetch("http://localhost:9000/channels")
  res = await res.json()
  const channels = res.channels
  dispatch(setChannels(channels))
};

export const joinChannel = (channelCode) => async (dispatch, getState) => {
  if (selectJoinedChannel(getState()) !== undefined) {
    console.warn("Channel is still joined, closing. This should not happen.")
    await dispatch(leaveChannel())
  }
  dispatch(setModalOpened())
  let res = await fetch(`http://localhost:9000/channels/${channelCode}/join`)
  res = await res.json()
  const channel = res
  dispatch(setJoinedChannel(channel))
}

export const leaveChannel = () => async (dispatch, getState) => {
  const channelCode = selectJoinedChannelCode(getState())
  await fetch(`http://localhost:9000/channels/${channelCode}/leave`)
  dispatch(unsetJoinedChannel())
}

// selectors
export const selectChannels = state => state.channels.array;
export const selectJoinedChannel = state => state.channels.joinedChannel;
export const selectJoinedChannelCode = state => state.channels.joinedChannel?.channel;
export const selectIsModalOpened = state => state.channels.isModalOpened;

// reducer
export const channelsReducer = channelsSlice.reducer;
