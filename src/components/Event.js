import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Time from './Time';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { joinChannel } from '../store/channels';
import SimpleCard from './ui/SimpleCard';
import UsersAvatars from './UsersAvatars';

export default function Event({event}) {
  const dispatch = useDispatch()

  // TODO: Share logic with Channel component
  return (
    <SimpleCard>
      <CardContent>
        {event.club ? (
          <Typography color="textSecondary" gutterBottom>
            {event.club.name} 🏠
          </Typography>
        ) : ''}
        <Typography variant="h5" component="h2" gutterBottom>
          {event.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Time time={event.time_start}/>{' '}
          | {event.hosts.length} hosts
          {event.is_expired ? ' | Event has ended' : ''}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           {event.description}
        </Typography>
        <UsersAvatars users={event.hosts.slice(0, 5)} />
      </CardContent>
      {event.channel ? (
        <CardActions disableSpacing>
          <Button color="primary" onClick={() => dispatch(joinChannel(event.channel))}>
            Join Room
          </Button>
        </CardActions>
      ) : ''}
    </SimpleCard>
  );
};
