import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { joinChannel } from '../store/channels';

export default function Channel({channel}) {
  const dispatch = useDispatch()

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Channel
        </Typography>
        <Typography variant="h5" component="h2">
          {channel.topic}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {channel.num_speakers}/{channel.num_all} {channel.is_explore_channel ? 'explore' : 'non-explore'}
          <i> - {channel.channel}</i>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="primary" onClick={() => dispatch(joinChannel(channel.channel))}>
          Join channel
        </Button>
      </CardActions>
    </Card>
  );
};
