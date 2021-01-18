import React from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordForm.module.scss";
import CustomInput from "../common/Input/CustomInput";
import GoBackButton from "../common/Button/GoBackButton";
import CustomButton from "../common/Button/CustomButton";


type PropsType = {
  handleSubmit: any
  setCode: any
  setNewPassword: any
  setRetypePassword: any
  setIsEmail: any
}

const ResetPasswordForm: React.FC<PropsType> = (props) => {
  return (
    <Container>
      <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
        <Grid item sm={6}>
          <Box className={classes.loginSheet}>
            <GoBackButton onClick={() => {
              props.setCode("");
              props.setNewPassword("");
              props.setRetypePassword("");
              props.setIsEmail(false)
            }} />
            <Grid item className={classes.gridItem}>
              <Typography variant="h2" className={classes.header}>
                Reset password
            </Typography>
            </Grid>
            <Grid item className={classes.formContainer}>
              <form onSubmit={props.handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <CustomInput
                      type="text"
                      label="Code"
                      fullWidth
                      name="email"
                      required
                      onChange={(event: any) =>
                        props.setCode(event.target.value)
                      }
                      color={"#9e9e9e"}
                      width={290}
                      autoFocus />
                  </Grid>
                  <Grid item>
                    <CustomInput
                      type="password"
                      label="New password"
                      fullWidth
                      name="password"
                      onChange={(event: any) =>
                        props.setNewPassword(event.target.value)
                      }
                      color={"#9e9e9e"}
                      width={290}
                      required />
                  </Grid>
                  <Grid item>
                    <CustomInput
                      type="password"
                      label="Retype password"
                      fullWidth
                      name="password"
                      onChange={(event: any) =>
                        props.setRetypePassword(event.target.value)
                      }
                      color={"#9e9e9e"}
                      width={290}
                      required />
                  </Grid>
                  <Grid item className={classes.resetButtonSubmit}>
                    <CustomButton type='submit' text="Send" />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>)
}

export default ResetPasswordForm;