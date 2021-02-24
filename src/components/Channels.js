import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels, joinChannel, selectChannels } from '../store/channels';
import Channel from './Channel';
import BigHeader from './ui/BigHeader';
import { Box, Button } from '@material-ui/core';

function Channels() {
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();

  const [shownItemsCount, setShownItemsCount] = useState(10);

  useEffect(() => {
    // passing an empty array as second argument triggers the callback in useEffect only after the initial
    // render thus replicating `componentDidMount` lifecycle behaviour
    dispatch(fetchChannels())
  }, []);

  return (
    <React.Fragment>

      <BigHeader>
        Rooms
      </BigHeader>

      {channels.slice(0, shownItemsCount).map(channel => (
        <Channel key={channel.channel_id} channel={channel} />
        )
      )}

      {channels.length > shownItemsCount ? (
        <Box m={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => setShownItemsCount(shownItemsCount + 10)}>
            Show more
          </Button>
        </Box>
      ) : ''}

    </React.Fragment>
  );
}

export default Channels;
