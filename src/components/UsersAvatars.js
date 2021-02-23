import React from 'react';
import { Avatar, Box, makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: 10,
    },
  },
}));

export default function UsersAvatars({users}) {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" className={classes.root}>
      {users.map((user) => (
        <Tooltip title={user.name}>
          <Avatar key={user.user_id} src={user.photo_url} />
        </Tooltip>
      ))}
    </Box>
  )
};
