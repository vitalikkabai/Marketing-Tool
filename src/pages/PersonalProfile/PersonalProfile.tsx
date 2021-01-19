import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import classes from "./PersonalProfile.module.scss";


const PersonalProfile: React.FunctionComponent = () => {
    return (
        <Grid container className={classes.component}>
            <Grid xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}></Box>
            </Grid>
        </Grid>
    );
}

export default PersonalProfile;