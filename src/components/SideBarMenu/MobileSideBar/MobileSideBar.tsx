import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import React from 'react';
import classes from './MobileSideBar.module.scss';
import {ReactComponent as BoxIcon} from '../../../assets/images/menuIcons/BoxIcon.svg';
import {ReactComponent as CubeIcon} from '../../../assets/images/menuIcons/Cubes.svg';
import {ReactComponent as EditIcon} from '../../../assets/images/menuIcons/EditIcon.svg';
import {ReactComponent as GraphIcon} from '../../../assets/images/menuIcons/GraphIcon.svg';
import {ReactComponent as ListIcon} from '../../../assets/images/menuIcons/ListIcon.svg';
import {ReactComponent as SaleIcon} from '../../../assets/images/menuIcons/SaleIcon.svg';
import {ReactComponent as SmileIcon} from '../../../assets/images/menuIcons/SmileIcon.svg';
import {ReactComponent as SpeakIcon} from '../../../assets/images/menuIcons/SpeakIcon.svg';
import {ReactComponent as StonksIcon} from '../../../assets/images/menuIcons/StonksIcon.svg';
import {ReactComponent as MobileLogo} from '../../../assets/images/mobileLogo.svg';
import TimeBar from "../../TimeBar/TimeBar";

const MobileSideBar: React.FC<any> = (props: any) => {
    const handleClick = (i: number) => {
        console.log(i);
    }

    return (
        <Grid
            container
            direction={'column'}
            alignItems={'flex-end'}
            className={classes.menu + " " + (props.isShown ? classes.isShown : "")}
            wrap="nowrap"
        >
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                className={classes.topContainer}
            >
                <Grid item className={classes.logoContainer}>
                    <MobileLogo/>
                </Grid>
                <TimeBar small/>
            </Grid>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}>
                <ListItem
                    button
                    classes={{root: classes.item1}}
                    onClick={() => handleClick(1)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <CubeIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Dashboard
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item2}}
                    onClick={() => handleClick(2)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <BoxIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Products
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item3}}
                    onClick={() => handleClick(3)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <ListIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Market Research
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item4}}
                    onClick={() => handleClick(4)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <EditIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Brand Creation
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item5}}
                    onClick={() => handleClick(5)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SaleIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Sales Channels
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item6}}
                    onClick={() => handleClick(6)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SmileIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Customer Support
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item7}}
                    onClick={() => handleClick(7)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SpeakIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Brand Awareness
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item8}}
                    onClick={() => handleClick(8)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <GraphIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Sales Statistics
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    classes={{root: classes.item9}}
                    onClick={() => handleClick(9)}
                >
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <StonksIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='h6'>
                                Improvements
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
            <Box className={classes.bottomText + ' ' + classes.gridItem}>
                <Typography
                    variant={'subtitle1'}
                    color={'primary'}
                    style={{cursor: 'pointer', marginBottom: "10px" }}>
                    + Invite
                </Typography>
                <Typography variant={'subtitle1'}>Pricing</Typography>
            </Box>
        </Grid>
    );
};

export default MobileSideBar;