import { configureStore } from '@reduxjs/toolkit';
import { channelsReducer } from './channels';
import { eventsReducer } from './events';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    events: eventsReducer,
  },
});
