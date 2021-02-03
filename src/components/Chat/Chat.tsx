import React from "react"
import { Box, Grid, Typography } from "@material-ui/core";
import classes from "./Chat.module.scss"
import CustomInput from "../common/Input/CustomInput";
import CustomButton from "../common/Button/CustomButton";

const Chat = () => {
    return <Box className={classes.mainContainer}>
        <Grid item className={classes.chatContainer}>
            <Box>
                <Typography>Place for chat</Typography>
            </Box>
            <Box className={classes.chatInput}>
                <CustomInput />
                <CustomButton type={"button"} text={"send"} width={"120px"}/>
            </Box>
        </Grid>
    </Box>
}

export default Chat;