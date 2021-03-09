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
import React, { useEffect } from 'react';
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
import { useHistory } from 'react-router';

const SideBarMenu: React.FC<any> = (props: { isAuth: boolean }) => {
    const theme = useTheme();
    const history = useHistory();
    const getCurrentLocation = () => {
        if (history.location.pathname.includes('product')) return '2';
        if (history.location.pathname.includes('market-research')) return '3';
        if (history.location.pathname.includes('brand-creation')) return '4';
        if (history.location.pathname.includes('sales-channels')) return '5';
        if (history.location.pathname.includes('customer-support')) return '6';
        if (history.location.pathname.includes('brand-awareness')) return '7';
        if (history.location.pathname.includes('improvements')) return '8';
        if (history.location.pathname.includes('sales-statistics')) return '9';
        if (history.location.pathname === '/') return '1';
        return '0';
    };
    useEffect(() => {
        setSelected(getCurrentLocation());
    }, [history.location.pathname]);

    const [selected, setSelected] = React.useState(getCurrentLocation());
    return (
        <Grid
            container
            direction={'column'}
            alignItems={'flex-start'}
            className={classes.menu}>
            <Box className={classes.gridItem}>
                <img src={logo} alt="logo" className={classes.logo} />
            </Box>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.rootList}>
                <ListItem
                    button
                    selected={selected === '1'}
                    classes={{ root: classes.item1, selected: classes.active1 }}
                    onClick={() => {
                        setSelected('1');
                        props.isAuth
                            ? history.push('/')
                            : history.push('/preview/');
                        theme.palette.primary.main;
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <CubeIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '1' ? 'h6' : 'subtitle1'}>
                                Dashboard
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '2'}
                    classes={{ root: classes.item2, selected: classes.active2 }}
                    onClick={() => {
                        setSelected('2');
                        props.isAuth
                            ? history.push('/products')
                            : history.push('/preview/products');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <BoxIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '2' ? 'h6' : 'subtitle1'}>
                                Products
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '3'}
                    classes={{ root: classes.item3, selected: classes.active3 }}
                    onClick={() => {
                        setSelected('3');
                        props.isAuth
                            ? history.push('/market-research')
                            : history.push('/preview/market-research');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <ListIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '3' ? 'h6' : 'subtitle1'}>
                                Market Research
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '4'}
                    classes={{ root: classes.item4, selected: classes.active4 }}
                    onClick={() => {
                        setSelected('4');
                        props.isAuth
                            ? history.push('/brand-creation')
                            : history.push('/preview/brand-creation');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <EditIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '4' ? 'h6' : 'subtitle1'}>
                                Brand Creation
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '5'}
                    classes={{ root: classes.item5, selected: classes.active5 }}
                    onClick={() => {
                        setSelected('5');
                        props.isAuth
                            ? history.push('/sales-channels')
                            : history.push('/preview/sales-channels');

                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <SaleIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '5' ? 'h6' : 'subtitle1'}>
                                Sales Channels
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '6'}
                    classes={{ root: classes.item6, selected: classes.active6 }}
                    onClick={() => {
                        setSelected('6');
                        props.isAuth
                            ? history.push('/customer-support')
                            : history.push('/preview/customer-support');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <SmileIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '6' ? 'h6' : 'subtitle1'}>
                                Customer Support
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '7'}
                    classes={{ root: classes.item7, selected: classes.active7 }}
                    onClick={() => {
                        setSelected('7');
                        props.isAuth
                            ? history.push('/brand-awareness')
                            : history.push('/preview/brand-awareness');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <SpeakIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '7' ? 'h6' : 'subtitle1'}>
                                Brand Awareness
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '8'}
                    classes={{ root: classes.item8, selected: classes.active8 }}
                    onClick={() => {
                        setSelected('8');
                        props.isAuth
                            ? history.push('/improvements')
                            : history.push('/preview/improvements');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <GraphIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '8' ? 'h6' : 'subtitle1'}>
                                Sales Statistics
                            </Typography>
                        }
                    />
                </ListItem>

                <ListItem
                    button
                    selected={selected === '9'}
                    classes={{ root: classes.item9, selected: classes.active9 }}
                    onClick={() => {
                        setSelected('9');
                        props.isAuth
                            ? history.push('/sales-statistics')
                            : history.push('/preview/sales-statistics');
                    }}>
                    <ListItemIcon classes={{ root: classes.listIconRoot }}>
                        <StonksIcon className={classes.svgIcon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === '9' ? 'h6' : 'subtitle1'}>
                                Improvements
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
                        style={{ cursor: 'pointer' }}>
                        + Invite
                    </Typography>
                    <Typography variant={'subtitle1'}>Pricing</Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default SideBarMenu;
