import React from 'react';
import Box from '@material-ui/core/Box';
import classes from './Header.module.scss';
import {ReactComponent as HeaderLogo} from '../../assets/images/headerLogo.svg';
import {ReactComponent as HeaderLogoForMobile} from '../../assets/images/logoMob.svg';
import { useHistory } from 'react-router';

const Header: React.FC<Record<string, unknown>> = () => {
    const history = useHistory();
    return (
        <Box className={classes.headerContainer}>
            <HeaderLogo 
                className={classes.headerContainerImgDesktop}
                style={{ cursor: 'pointer' }}
                onClick={() => history.replace('/login')}
            />
            <HeaderLogoForMobile
                className={classes.headerContainerImgMobile}
                style={{ cursor: 'pointer' }}
                onClick={() => history.replace('/login')}
            />
        </Box>
    );
};

export default Header;
