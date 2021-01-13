import {Collapse, Grid, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import React from 'react';
import classes from './SideBarMenu.module.scss';
import logo from '../../assets/images/headerLogo.svg';
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const SideBarMenu = () => {

    const [open, setOpen] = React.useState(false);
    const [fakeOpen, setFakeOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid container direction={"column"} alignItems={"center"} className={classes.menu}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}
            >
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <AllInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Market Research" />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Brand Creation" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Item" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Item" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Item" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Item" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales Channels" />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
        </Grid>
    )
};

export default SideBarMenu;