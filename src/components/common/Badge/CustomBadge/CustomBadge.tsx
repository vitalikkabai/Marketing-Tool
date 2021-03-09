import React from 'react';
import { Badge, makeStyles } from '@material-ui/core';
import ToDoIcon from '../../../../assets/images/ToDoListIcon.svg';
import styles from './CustomBadge.module.scss';

type PropTypes = {
    badgeCount: number;
};

const CustomBadge: React.FunctionComponent<PropTypes> = (props) => {
    const useStyles = makeStyles({
        badge: {
            height: '16px',
            top: '10px',
            minWidth: '24px',
            fontSize: '10px',
            left: '40px',
            borderRadius: '10px',
            background: '#EA4335',
            color: '#fff',
            position: 'absolute',
            zIndex: 100,
        },
    });

    const classes = useStyles();

    return (
        <Badge
            badgeContent={props.badgeCount}
            classes={{ badge: classes.badge }}
            className={styles.circleRipple}>
            <img src={ToDoIcon} alt="ToDoIcon" />
        </Badge>
    );
};

export default CustomBadge;
