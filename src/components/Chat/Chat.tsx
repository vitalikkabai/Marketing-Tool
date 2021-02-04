import React from "react"
import { Box, Grid, Typography } from "@material-ui/core";
import classes from "./Chat.module.scss"
import CustomInput from "../common/Input/CustomInput";
import CustomButton from "../common/Button/CustomButton";

const Chat = () => {
    return <Box className={classes.mainContainer}>
        <Grid item className={classes.chatContainer}>
        </Grid>
    </Box>
}

export default Chat;