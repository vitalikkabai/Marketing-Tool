import React from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordForm.module.scss";
import { useHistory } from "react-router";
import CustomInput from "../common/Input/CustomInput";
import GoBackButton from "../common/Button/GoBackButton";
import CustomButton from "../common/Button/CustomButton";

type PropsType = {
  setEmail: any
  handleSubmit: any
}


const SendResetLink: React.FC<PropsType> = (props) => {
  const history = useHistory();
  return (

    <Container>
      <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
        <Grid item sm={6}>
          <Box className={classes.loginSheet}>
            <GoBackButton onClick={() => {
              history.push("login");
            }} />
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
              <form onSubmit={props.handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      label="Email"
                      fullWidth
                      name="email"
                      required
                      onChange={(event: any) =>
                        props.setEmail(event.target.value)
                      }
                      color={"#9e9e9e"}
                      width={290}
                      autoFocus />
                  </Grid>
                  <Grid item className={classes.loginButton}>
                    <CustomButton className={classes.buttonBlock} type='submit' text="Send" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SendResetLink;