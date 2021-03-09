import React from 'react';
import classes from './Header.module.scss';
import headerLogo from '../../assets/images/headerLogo.svg';
import headerLogoForMobile from '../../assets/images/logo-mob.svg';
import { useHistory } from 'react-router';

const Header: React.FC<Record<string, unknown>> = () => {
    const history = useHistory();
    return (
        <div className={classes.headerContainer}>
            <img
                className={classes.headerContainerImgDesktop}
                src={headerLogo}
                alt={'image'}
                style={{ cursor: 'pointer' }}
                onClick={() => history.replace('/login')}
            />
            <img
                className={classes.headerContainerImgMobile}
                src={headerLogoForMobile}
                alt={'image'}
                style={{ cursor: 'pointer' }}
                onClick={() => history.replace('/login')}
            />
        </div>
    );
};

export default Header;
