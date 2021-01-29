import {Container} from '@material-ui/core';
import React from 'react';
import classes from './Header.module.scss';
import headerLogo from '../../assets/images/headerLogo.svg';
import {useHistory} from "react-router";

const Header = () => {
    const history = useHistory();
    return (
        <div className={classes.headerContainer}>
            <img src={headerLogo} alt={"image"} style={{cursor: "pointer"}}
                 onClick={() => history.replace("/login")}/>
        </div>

    );
}


export default Header;