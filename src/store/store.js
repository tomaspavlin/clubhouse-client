import { configureStore } from '@reduxjs/toolkit';
import { channelsReducer } from './channels';
import { eventsReducer } from './events';
import { pageReducer } from './page';
import { userReducer } from './user';

export default configureStore({
  reducer: {
    channels: channelsReducer,
    events: eventsReducer,
    page: pageReducer,
    user: userReducer,
  },
});
