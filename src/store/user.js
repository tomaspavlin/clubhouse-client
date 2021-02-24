import { createSlice } from '@reduxjs/toolkit';

// slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: undefined,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload
    },
  },
});

// actions
const { setUserProfile } = userSlice.actions;

export const fetchProfile = () => async dispatch => {
  let res = await fetch("http://localhost:9000/profile")
  const profile = await res.json()
  dispatch(setUserProfile(profile))
};

// selectors
export const selectProfile = state => state.user.profile;
export const selectUserId = state => state.user.profile?.user_profile?.user_id

// reducer
export const userReducer = userSlice.reducer;
