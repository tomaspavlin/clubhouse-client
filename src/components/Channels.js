import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannels } from '../store/channels';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Channel from './Channel';

function Channels() {
  const channels = useSelector(selectChannels);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Box m={2}>
        <Typography variant="h2">
          Channels
        </Typography>
      </Box>

      {channels.map(channel => (
          <Box m={2}>
            <Channel channel={channel} />
          </Box>
        )
      )}

    </React.Fragment>
  );
}

export default Channels;
