import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import classes from './Dashboard.module.scss';
import logo from '../../assets/images/logo.svg';
import number3 from '../../assets/images/number3.svg';
import downArrow from '../../assets/images/downArrow.svg';
import clock from '../../assets/images/clock.svg';




const Dashboard = () => {



  return (
    <Grid className={classes.dashboard}>
      <Grid className={classes.menu}>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            Dashboard
          </li>
          <li>
            Products
            <img src={number3} alt="number3" />
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Market Research
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Brand Creation
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Sales Channels
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Customer Support Management
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Brand Awareness
            <img src={downArrow} alt="downArrow" />
          </li>
          <li>
            Improvement Statistics
            <img src={downArrow} alt="downArrow" />
          </li>
        </ul>
      </Grid>

      <Grid className={classes.content}>
        <Grid className={classes.header}>
          <Grid className={classes.clockContainer}>
            <Grid className={classes.clock}>
              <Typography>TIME IN ISRAEL</Typography>
              <Typography className={classes.time}><img src={clock} alt="clock" /> 4:25</Typography>
            </Grid>
            <Grid className={classes.clock}>
              <Typography>TIME DIFFERENCE</Typography>
              <Typography className={classes.time}><img src={clock} alt="clock" /> 1h</Typography>
            </Grid>
            <Grid className={classes.clock}>
              <Typography>YOUR TIME</Typography>
              <Typography className={classes.time}><img src={clock} alt="clock" /> 3:25</Typography>
            </Grid>
          </Grid>

          <Grid className={classes.personalInfo}>

          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.messenger}>
      </Grid>

    </Grid>
  )
};

export default Dashboard;