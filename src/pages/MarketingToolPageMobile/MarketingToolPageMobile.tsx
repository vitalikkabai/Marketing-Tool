import React, {useState} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../store/store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import classes from './MarketingToolPageMobile.module.scss';
import {Box, Grid, Typography} from '@material-ui/core';
import MobileTopBar from "../../components/TopBar/MobileTopBar";
import {ReactComponent as ListIcon} from "../../assets/images/listIcon.svg";
import {ReactComponent as ChatIcon} from "../../assets/images/chatIcon.svg";
import DashboardSteps from "../../components/DashBoard/UserDashBoard/DashboardSteps";
import ChatContainer from "../../components/Chat/ChatContainer";
import MobileSideBar from "../../components/SideBarMenu/MobileSideBar/MobileSideBar";

type PropsType = {
    isAuth: boolean;
};

const MarketingToolPageMobileContainer: React.FunctionComponent<PropsType> = (
    props
) => {
    const [active, setActive] = useState(1);

    const [isSideBarShown, setIsSideBarShown] = useState(false);

    return (
        <>
            <MobileSideBar isShown={isSideBarShown}/>
            <Box
                className={classes.wrapper + " " + (isSideBarShown ? classes.blur : "")}
                onClick={() => {
                    if (isSideBarShown) setIsSideBarShown(false);
                }}
            >
                <Box className={classes.marketingContainer}>
                    <MobileTopBar showSideBar={() => setIsSideBarShown(true)}/>

                    <Box className={classes.box} style={{height: "559px"}}>
                        {
                            active === 1 ?
                                <DashboardSteps/>
                                : <ChatContainer mobile/>
                        }
                    </Box>

                    <Box className={classes.box + ' ' + classes.switcherContainer}>
                        <Grid
                            container
                            className={classes.switcherContent}
                        >
                            <Typography
                                variant={'h6'}
                                color={'primary'}
                                className={classes.item + ' ' + (active === 1 && classes.active)}
                                onClick={() => setActive(1)}
                            >
                                <ListIcon fill={active === 1 ? "#fff" : "#4285F4"}/> To-do list
                            </Typography>
                            <Typography
                                variant={'h6'}
                                color={'primary'}
                                className={classes.item + ' ' + (active === 2 && classes.active)}
                                onClick={() => setActive(2)}
                            >
                                <ChatIcon fill={active === 2 ? "#fff" : "#4285F4"}/> Chat
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth,
    };
};

const connectedContainer = connect(mapStateToProps)(MarketingToolPageMobileContainer);
export default withAuthRedirect(connectedContainer);
