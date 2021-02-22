import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Time from './Time';
import JoinedChannel from './JoinedChannel';
import { Button } from '@material-ui/core';

export default function Event({event}) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Event
        </Typography>
        <Typography variant="h5" component="h2">
          {event.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <Time time={event.time_start}/>
          , Hosts: {event.hosts.length}
          {event.is_expired ? 'EXPIRED' : ''}
          {event.is_member_only ? 'MEMBER ONLY' : ''}
          <i> - {event.channel}</i>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           {event.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="primary">
          Open channel
        </Button>
        <JoinedChannel channelCode={event.channel}/>
      </CardActions>
    </Card>
  );
};
