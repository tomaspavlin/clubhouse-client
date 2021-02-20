import * as React from 'react';
import Channel from './Channel';
import { useDispatch, useSelector } from 'react-redux';
import { loadChannels, selectChannels } from '../store/channels';

function Channels() {
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();

  return (
    <div className="channels">
      <h1>Channels</h1>
      <button onClick={() => dispatch(loadChannels())}>Refresh channels</button>
      <ul>
        {channels.map(ch => (
          <div>
            <h2>{ch.topic}</h2>
            {ch.num_speakers}/{ch.num_all} {ch.is_explore_channel ? 'explore' : 'non-explore'}
            <i> - {ch.channel}</i>
            <Channel channelCode={ch.channel}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Channels;
