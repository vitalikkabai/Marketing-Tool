import { Box, Grid, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import classes from './ManagersSideBarMenu.module.scss';
import { PropsFromRedux } from './ManagersSideBarMenuContainer';

const ManagersSideBarMenu: React.FunctionComponent<PropsFromRedux> = (
    props
) => {
    return (
        <Grid
            container
            direction={'column'}
            alignItems={'flex-start'}
            className={classes.menu}>
            <Box className={classes.gridItem}>
                <Typography variant={'h2'}>
                    {props.activeBusiness.companyName}
                </Typography>
            </Box>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}>
                {props.businesses.map((business, index) => {
                    return (
                        <ListItem
                            key={index}
                            onClick={() => {
                                props.setActiveBusiness(business);
                            }}>
                            <Typography variant={'subtitle1'}>
                                {business.business.companyName}
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
            <Box className={classes.bottomText + ' ' + classes.gridItem}>
                <hr
                    style={{
                        border: '1px solid #F8F8F8',
                        width: '236px',
                        margin: '0 0 46px 0',
                    }}
                />
                <Box>
                    <Typography
                        variant={'subtitle1'}
                        color={'primary'}
                        style={{ cursor: 'pointer' }}>
                        + Invite
                    </Typography>
                    <Typography variant={'subtitle1'}>Pricing</Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default ManagersSideBarMenu;
