import React from "react"
import {Box, Grid, Typography} from "@material-ui/core";
import classes from "./Chat.module.scss"

const Chat = () => {
    return <Box className={classes.mainContainer}>
        <Grid item className={classes.teamContainer}>
            <Typography>Team</Typography>
        </Grid>
        <Grid item className={classes.chatContainer}>
            <Typography>Chat</Typography>
        </Grid>
    </Box>
}

export default Chat;