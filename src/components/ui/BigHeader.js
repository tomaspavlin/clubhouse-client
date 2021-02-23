import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '16px 0'
  },
});

export default function BigHeader({children}) {
  const classes = useStyles();

  return (
    <Typography variant="h2" className={classes.root}>
      {children}
    </Typography>
  );
};
