import { Grid, Typography } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { byOwnerUid, byOwnerUidDate } from '../../graphql/queries';
import { AppStateType } from '../../store/store';
import classes from './Dashboard.module.scss';

const Dashboard: FunctionComponent<{auth: any}> = (props) => {
  useEffect(()=> {
    console.log(props.auth);
    (API.graphql(graphqlOperation(byOwnerUidDate, { ownerUID: 'abcd', filter: {ownerName: {eq:"asdfasdf"}} })) as Promise<any>)
    .then((res)=> console.log(res))
    
  },[])
  return (
    <Grid container className={classes.dashboard}>
        <Typography variant="h2">Dashboard Content</Typography>
    </Grid>
  )
};

const mapStateToProps = (state: AppStateType) => {
  return {
      auth: state.AuthReducer

  }
};

export default connect(mapStateToProps)(Dashboard);