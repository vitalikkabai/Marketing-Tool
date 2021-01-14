import React from "react"
import {Box, Grid, Typography} from "@material-ui/core";
import classes from "./Chat.module.scss"
import team1 from "../../assets/images/Teammate1.svg"
import team2 from "../../assets/images/Teammate2.svg"
import team3 from "../../assets/images/Teammate3.svg"
import team4 from "../../assets/images/Teammate4.svg"

const Chat = () => {
    return <Box className={classes.mainContainer}>
        <Grid item className={classes.teamContainer}>
            <Box className={classes.teamAvatarBox}>
                <img src={team4} alt={"avatar"}/>
                <img src={team2} alt={"avatar"}/>
                <img src={team3} alt={"avatar"}/>
                <img src={team1} alt={"avatar"}/>
            </Box>
            <Typography color={"primary"}>View team</Typography>
        </Grid>
        <Grid item className={classes.chatContainer}>
            <Typography>Chat</Typography>
        </Grid>
    </Box>
}

export default Chat;