import { Grid, Typography } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBusiness, listBusinesss } from '../../graphql/queries';
import { AppStateType } from '../../store/store';
import classes from './Dashboard.module.scss';

const Dashboard: FunctionComponent<{auth: any}> = (props) => {
  useEffect(()=> {
    console.log(props.auth);
    (API.graphql(graphqlOperation(listBusinesss)
    ) as Promise<any>)
    .then((res)=> console.log(res)).catch(e => console.log(e));
    
    (API.graphql(graphqlOperation(getBusiness,{ownerUID:"3df546a0-41fc-4fe8-ad8b-42519518d38c"})) as Promise<any>)
		.then((res)=> console.log(res)).catch(e => console.log(e))
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