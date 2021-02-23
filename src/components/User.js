import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, CardHeader } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { joinChannel } from '../store/channels';
import SimpleCard from './ui/SimpleCard';

export default function User({user}) {
  const dispatch = useDispatch()

  return (
    <SimpleCard>
      <CardHeader
        avatar={
          <Avatar src={user.photo_url}></Avatar>
        }
        title={user.name}
        subheader={user.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This user is online / {user.channel} / {user.topic}
        </Typography>
      </CardContent>
      {user.channel ? (
        <CardActions disableSpacing>
          <Button color="primary" onClick={() => dispatch(joinChannel(user.channel))}>
            Join user in channel
          </Button>
        </CardActions>
      ) : ''}

    </SimpleCard>
  );
};
