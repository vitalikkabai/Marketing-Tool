import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@material-ui/core';
import React from 'react';
import classes from './ManagersSideBarMenu.module.scss';
import logo from '../../assets/images/headerLogo.svg';
import { ReactComponent as CubeIcon } from '../../assets/images/menuIcons/Cubes.svg';

const ManagersSideBarMenu = (props: any) => {
    return (
        <Grid
            container
            direction={'column'}
            alignItems={'flex-start'}
            className={classes.menu}
        >
            <Box className={classes.gridItem}>
                <img src={logo} alt="logo" className={classes.logo} />
            </Box>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}
            >
                <ListItem
                    button
                    classes={{
                        root: classes.item1,
                        selected: classes.active1,
                    }}
                >
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <CubeIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant={'subtitle1'}>
                                Dashboard
                            </Typography>
                        }
                    />
                </ListItem>
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
                        style={{ cursor: 'pointer' }}
                    >
                        + Invite
                    </Typography>
                    <Typography variant={'subtitle1'}>Pricing</Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default ManagersSideBarMenu;
