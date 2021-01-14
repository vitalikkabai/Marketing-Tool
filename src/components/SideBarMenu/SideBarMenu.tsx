import {Box, Collapse, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import classes from './SideBarMenu.module.scss';
import logo from '../../assets/images/headerLogo.svg';
import { ReactComponent as BoxIcon } from '../../assets/images/menuIcons/BoxIcon.svg';
import { ReactComponent as CubeIcon } from '../../assets/images/menuIcons/Cubes.svg';
import { ReactComponent as EditIcon } from '../../assets/images/menuIcons/EditIcon.svg';
import { ReactComponent as GraphIcon } from '../../assets/images/menuIcons/GraphIcon.svg';
import { ReactComponent as ListIcon } from '../../assets/images/menuIcons/ListIcon.svg';
import { ReactComponent as SaleIcon } from '../../assets/images/menuIcons/SaleIcon.svg';
import { ReactComponent as SmileIcon } from '../../assets/images/menuIcons/SmileIcon.svg';
import { ReactComponent as SpeakIcon } from '../../assets/images/menuIcons/SpeakIcon.svg';
import { ReactComponent as StonksIcon } from '../../assets/images/menuIcons/StonksIcon.svg';
import { ReactComponent as CircleIcon } from '../../assets/images/menuIcons/CircleIcon.svg';
import {ExpandLess, ExpandMore} from "@material-ui/icons";


const SideBarMenu = () => {

    const [open, setOpen] = React.useState("");
    const [selected, setSelected] = React.useState("1");

    return (
        <Grid container direction={"column"} alignItems={"flex-start"} className={classes.menu}>
            <Box className={classes.gridItem}>
                <img src={logo} alt="logo" className={classes.logo}/>
            </Box>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}
            >
                <ListItem button
                          selected={selected === "1"}
                          classes={{root: classes.item1, selected: classes.active1 }}
                          onClick={()=>{setSelected("1"); setOpen("1")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <CubeIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "1" ? "h6":"subtitle1"}>Dashboard</Typography>}/>
                </ListItem>
                <ListItem button
                          selected={selected === "2"}
                          classes={{root: classes.item2, selected: classes.active2 }}
                          onClick={()=>{setSelected("2"); setOpen("2")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <BoxIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "2" ? "h6":"subtitle1"}>Products</Typography>} />
                </ListItem>

                <ListItem button
                          selected={selected === "3"}
                          classes={{root: classes.item3, selected: classes.active3 }}
                          onClick={()=>{setSelected("3"); setOpen("3")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <ListIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "3" ? "h6":"subtitle1"}>Market Research</Typography>} />
                    {open === "3" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "3"} timeout="auto" unmountOnExit className={classes.collapseList3}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button
                          selected={selected === "4"}
                          classes={{root: classes.item4, selected: classes.active4 }}
                          onClick={()=>{setSelected("4"); setOpen("4")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <EditIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "4" ? "h6":"subtitle1"}>Brand Creation</Typography>} />
                    {open === "4"? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "4"} timeout="auto" unmountOnExit className={classes.collapseList4}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Instructional manuals / videos  </Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button
                          selected={selected === "5"}
                          classes={{root: classes.item5, selected: classes.active5 }}
                          onClick={()=>{setSelected("5"); setOpen("5")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SaleIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "5" ? "h6":"subtitle1"}>Customer Support </Typography>} />
                    {open === "5" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "5"} timeout="auto" unmountOnExit className={classes.collapseList5}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button
                          selected={selected === "6"}
                          classes={{root: classes.item6, selected: classes.active6 }}
                          onClick={()=>{setSelected("6"); setOpen("6")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SmileIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "6" ? "h6":"subtitle1"}>Sales Channels</Typography>} />
                    {open === "6" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "6"} timeout="auto" unmountOnExit className={classes.collapseList6}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Instructional manuals / videos  </Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button
                          selected={selected === "7"}
                          classes={{root: classes.item7, selected: classes.active7 }}
                          onClick={()=>{setSelected("7"); setOpen("7")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <SpeakIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "7" ? "h6":"subtitle1"}>Brand Awareness </Typography>} />
                    {open === "7" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "7"} timeout="auto" unmountOnExit className={classes.collapseList7}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button
                          selected={selected === "8"}
                          classes={{root: classes.item8, selected: classes.active8 }}
                          onClick={()=>{setSelected("8"); setOpen("8")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <GraphIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "8" ? "h6":"subtitle1"}>Improvements</Typography>} />
                    {open === "8" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "8"} timeout="auto" unmountOnExit className={classes.collapseList8}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button
                          selected={selected === "9"}
                          classes={{root: classes.item9, selected: classes.active9 }}
                          onClick={()=>{setSelected("9"); setOpen("9")}}>
                    <ListItemIcon classes={{root: classes.listIconRoot}}>
                        <StonksIcon className={classes.svgIcon}/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={selected === "9" ? "h6":"subtitle1"}>Sales</Typography>} />
                    {open === "9" ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open === "9"} timeout="auto" unmountOnExit className={classes.collapseList9}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Logo Creation</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Copywriting</Typography>} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon classes={{root: classes.nestedListIconRoot}}>
                                <CircleIcon className={classes.expandIcon}/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1">Packaging design</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Box className={classes.bottomText + " " + classes.gridItem}>
                <hr style={{border: "1px solid #F8F8F8", width: "236px", margin:"0 0 46px 0"}}/>
                <Box>
                    <Typography variant={"subtitle1"}>Pricing</Typography>
                    <Typography variant={"subtitle1"}>About us 关于我们</Typography>
                </Box>
            </Box>
        </Grid>
    )
};

export default SideBarMenu;