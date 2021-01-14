import React, { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordPage.module.scss";
import Header from "../../components/Header/Header";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import CustomInput from "../../components/common/Input/CustomInput";

type PropsType = {

}

const ResetPasswordPage: React.FC<PropsType> = (props) => {
  console.log("hi");
  return (
    <>
      <Header />
      <Container>
        <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
          <Grid item sm={6}>
            <Box className={classes.loginSheet}>
              <Box className={classes.backArrow}>
                <ArrowBackIcon />
                <Typography> BACK</Typography>
              </Box>

              <Grid item className={classes.gridItem}>
                <Typography variant="h2" className={classes.header}>
                  Reset password
                </Typography>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Enter your email address and we will send you a reset link.
                </Typography>
              </Grid>
              <Grid item className={classes.formContainer}>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <CustomInput
                        type="email"
                        placeholder="Email"
                        label="Email"
                        fullWidth
                        name="username"
                        required
                        color={"#9e9e9e"}
                        width={290}
                        autoFocus />
                    </Grid>
                    <Grid item className={classes.loginButton}>
                      <Button variant="contained" color="primary"
                        type="submit" className={classes.buttonBlock}>
                        Send
                  </Button>

                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ResetPasswordPage;