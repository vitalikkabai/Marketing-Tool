import { Grid, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import classes from './Dashboard.module.scss';
import logo from '../../assets/images/logo.svg';
import number3 from '../../assets/images/number3.svg';
import downArrow from '../../assets/images/downArrow.svg';
import clock from '../../assets/images/clock.svg';




const Dashboard = () => {

  //{ timeZone: 'Asia/Jerusalem' }) // this is Israel zone.
  const israelTimeArr: string[] = new Date().toLocaleString('he-IL', { timeZone: 'Australia/Sydney' }).split(', ')[1].split(':');// change on Israel zone, Australia just from test
  const [currentTime, setCurrentTime] = useState(new Date());
  const [israelCurrentTime, setIsraelCurrentTime] = useState({ hour: parseInt(israelTimeArr[0]), min: parseInt(israelTimeArr[1]) });

  useEffect(() => {
    let prevTime = currentTime;
    const intervalId = setInterval(() => {
      const newTime = new Date();
      const newIsraelTimeArr = new Date().toLocaleString('he-IL', { timeZone: 'Australia/Sydney' }).split(', ')[1].split(':');// change on Israel zone, Australia just from test
      if (newTime.getMinutes() !== prevTime.getMinutes()) {
        prevTime = newTime;
        setIsraelCurrentTime({ hour: parseInt(newIsraelTimeArr[0]), min: parseInt(newIsraelTimeArr[1]) });
        setCurrentTime(newTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


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

              <Typography className={classes.time}>
                <img src={clock} alt="clock" />
                {israelCurrentTime ?
                  <Typography className={classes.time}>
                    {israelCurrentTime.hour < 10 ? "0" + israelCurrentTime.hour : israelCurrentTime.hour}:
                    {israelCurrentTime.min < 10 ? "0" + israelCurrentTime.min : israelCurrentTime.min}
                  </Typography>
                  : null
                }</Typography>
            </Grid>
            <Grid className={classes.clock}>
              <Typography>TIME DIFFERENCE</Typography>
              <Typography className={classes.time}>
                <img src={clock} alt="clock" />
                {israelCurrentTime && currentTime ? currentTime.getHours() - israelCurrentTime.hour : null}
              </Typography>
            </Grid>
            <Grid className={classes.clock}>
              <Typography>YOUR TIME</Typography>
              <Typography className={classes.time}>
                <img src={clock} alt="clock" />
                {currentTime ?
                  <Typography className={classes.time}>
                    {currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()}:
                    {currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()}
                  </Typography>
                  : null
                }
              </Typography>
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