

import { Container } from '@material-ui/core';
import React from 'react';
import classes from './Header.module.scss';
import headerLogo from '../../assets/images/headerLogo.svg';
const Header = () => {
    return (
        <div className={classes.headerContainer}>
            <Container >
                <img src={headerLogo} />
            </Container>
        </div>

    );
}


export default Header;