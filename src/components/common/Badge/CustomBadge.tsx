import React from 'react';
import { Badge, makeStyles } from '@material-ui/core';
import ToDoIcon from "../../../assets/images/ToDoListIcon.svg";
import styles from "./CustomBadge.module.scss"

const CustomBadge = () => {
  const useStyles = makeStyles({
    badge: {
      height: "16px",
      width: "16px",
      top: "10px",
      minWidth: "16px",
      fontSize: "10px",
      left: "40px"
    },
    circleRipple: {
      backgroundColor: "#35ffc3",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      animation: "ripple 1.7s linear infinite"
    },

    "@keyframes ripple": {
      "0%": {
        boxShadow: "0 0 0 0 rgba($color, 0.6)"
      },
      "100%": {
        boxShadow: "0 0 0 0.6em rgba($color, 0)"
      },
    }

  });

  const classes = useStyles();

  return (
    <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }} className={styles.circleRipple} >
      <img src={ToDoIcon} alt="ToDoIcon" />
    </Badge >
  )
}

export default CustomBadge;