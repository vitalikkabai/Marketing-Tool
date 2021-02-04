import React from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordForm.module.scss";
import CustomInput from "../common/Input/CustomInput";
import GoBackButton from "../common/Button/GoBackButton";
import CustomButton from "../common/Button/CustomButton";


type PropsType = {
  code:  {value: string, touched: boolean, error: boolean, errorText: string, name: string}
  newPassword:  {value: string, touched: boolean, error: boolean, errorText: string, name: string}
  retypePassword:  {value: string, touched: boolean, error: boolean, errorText: string, name: string}
  errorMessage: string
  handleInput: (inputData: string, inputType: string) => void
  handleSubmit: (event: React.FormEvent<Element>) => void
  cleanSuccess: () => {type: string}
}

const ResetPasswordForm: React.FC<PropsType> = (props) => {
  return (
    <Container>
      <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
        <Grid item sm={6}>
          <Box className={classes.loginSheet}>
            <GoBackButton onClick={() => {
              props.handleInput("", "CODE")
              props.handleInput("", "NEW_PASSWORD")
              props.handleInput("", "CONFIRM_PASSWORD")
              props.cleanSuccess();
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
                      name="code"
                      value={props.code.value}
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                          props.handleInput(event.target.value, "CODE")
                      }
                      width={290}
                      error={props.code.error}
                      autoFocus />
                  </Grid>
                  <Grid item>
                    <CustomInput
                      type="password"
                      label="New password"
                      fullWidth
                      name="password"
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                          props.handleInput(event.target.value, "NEW_PASSWORD")
                      }
                      width={290}
                      error={props.newPassword.error}
                      value={props.newPassword.value} />
                  </Grid>
                  <Grid item>
                    <CustomInput
                      type="password"
                      label="Retype password"
                      fullWidth
                      name="password"
                      onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                          props.handleInput(event.target.value, "CONFIRM_PASSWORD")
                      }
                      width={290}
                      error={props.retypePassword.error}
                      value={props.retypePassword.value} />
                  </Grid>
                  <Grid item className={classes.errorText}>
                    <Typography variant={"subtitle1"}>
                      {props.errorMessage}
                    </Typography>
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