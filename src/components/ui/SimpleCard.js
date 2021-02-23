import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: 16
  },
});

export default function SimpleCard({children}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {children}
    </Card>
  );
};
