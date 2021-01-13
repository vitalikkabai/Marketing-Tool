import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import classes from './Dashboard.module.scss';

const Dashboard = () => {

  return (
    <Grid container className={classes.dashboard}>
        <Typography variant="h2">Content</Typography>
    </Grid>
  )
};

export default Dashboard;