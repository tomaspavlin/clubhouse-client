import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/events';
import { fetchChannels } from '../store/channels';
import { selectPageIndex, setPageIndex } from '../store/page';
import { PageIndex } from '../model/enums';
import { fetchProfile, selectProfile } from '../store/user';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const dispatch = useDispatch();
  const pageIndex = useSelector(selectPageIndex);
  const profile = useSelector(selectProfile);
  const classes = useStyles();

  const clickEvents = () => {
    dispatch(setPageIndex(PageIndex.EVENTS))
    dispatch(fetchEvents())
  };

  const clickChannels = () => {
    dispatch(setPageIndex(PageIndex.CHANNELS))
    dispatch(fetchChannels())
  };

  const clickProfile = () => {
    dispatch(setPageIndex(PageIndex.PROFILE))
    dispatch(fetchProfile())
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Clubhouse Client
          </Typography>

          <Button color="inherit" onClick={clickEvents}>
            Events
          </Button>
          <Button color="inherit" onClick={clickChannels}>
            Channels
          </Button>
          <Button color="inherit" startIcon={<PersonIcon/>}  onClick={clickProfile}>
            {profile?.user_profile?.username}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
