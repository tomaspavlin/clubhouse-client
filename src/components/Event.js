import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Time from './Time';
import { Button, Chip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { joinChannel } from '../store/channels';
import SimpleCard from './ui/SimpleCard';

export default function Event({event}) {
  const dispatch = useDispatch()

  return (
    <SimpleCard>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Event
        </Typography>
        <Typography variant="h5" component="h2">
          {event.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Time time={event.time_start}/>
          <Chip label={'Hosts: ' + event.hosts.length} />
          {event.is_expired ? <Chip label='EXPIRED'/> : ''}
          {event.is_member_only ? <Chip label='MEMBER_ONLY'/> : ''}
          <Chip label={event.channel}/>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           {event.description}
        </Typography>
      </CardContent>
      {event.channel ? (
        <CardActions disableSpacing>
          <Button color="primary" onClick={() => dispatch(joinChannel(event.channel))}>
            Join channel
          </Button>
        </CardActions>
      ) : ''}
    </SimpleCard>
  );
};
