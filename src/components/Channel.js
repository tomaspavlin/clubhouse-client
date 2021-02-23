import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { joinChannel } from '../store/channels';
import SimpleCard from './ui/SimpleCard';
import UsersAvatars from './UsersAvatars';

export default function Channel({channel}) {
  const dispatch = useDispatch()

  return (
    <SimpleCard>
      <CardContent>
        {channel.club_name ? (
          <Typography color="textSecondary" gutterBottom>
            {channel.club_name} 🏠
          </Typography>
        ) : ''}
        <Typography variant="h5" component="h2" gutterBottom>
          {channel.topic}
        </Typography>
        <Typography color="textSecondary">
          {channel.num_all} users
        </Typography>
        <UsersAvatars users={channel.users.slice(0, 10)} />
      </CardContent>
      <CardActions disableSpacing>
        <Button color="primary" onClick={() => dispatch(joinChannel(channel.channel))}>
          Join room
        </Button>
      </CardActions>
    </SimpleCard>
  );
};
