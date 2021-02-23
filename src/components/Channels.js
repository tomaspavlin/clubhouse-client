import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels, selectChannels } from '../store/channels';
import Channel from './Channel';
import BigHeader from './ui/BigHeader';

function Channels() {
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();

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

      {channels.map(channel => (
        <Channel key={channel.channel_id} channel={channel} />
        )
      )}

    </React.Fragment>
  );
}

export default Channels;
