import {Collapse, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
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
                    <ListItemText primary={<Typography variant="h6">Dashboard</Typography>}/>
                </ListItem>
                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <AllInboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="h6">Products</Typography>} />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="h6">Market Research</Typography>} />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="h6">Brand Creation</Typography>} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Item</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Item</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Item</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Item</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{console.log("click")}}>
                    <ListItemIcon>
                        <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="h6">Sales Channels</Typography>} />
                    {fakeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
        </Grid>
    )
};

export default SideBarMenu;