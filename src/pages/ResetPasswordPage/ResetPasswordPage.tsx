import React, { useState } from "react";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordPage.module.scss";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";
import CustomInput from "../../components/common/Input/CustomInput";
import GoBackButton from "../../components/common/Button/GoBackButton";
import { ReactComponent as BigCheckMark } from "../../assets/images/bigCheckMark.svg";
import CustomButton from "../../components/common/Button/CustomButton";


type PropsType = {
}

const ResetPasswordPage: React.FC<PropsType> = (props) => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isNewPassword, setIsNewPassword] = useState(false);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email && !isNewPassword && !isEmail) {
      setIsEmail(!isEmail);
    }
    if (code && newPassword && retypePassword) {
      if (newPassword === retypePassword) {
        setIsNewPassword(!isNewPassword)
      }
    }
  }
  return (
    //TO DO fix problem with back button and registration
    //Split code into component
    <>
      <Header />
      {!isEmail && <Container>
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
                <form onSubmit={handleSubmit}>
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
                          setEmail(event.target.value)
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
      }

      {isEmail && !isNewPassword && <Container>
        <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
          <Grid item sm={6}>
            <Box className={classes.loginSheet}>
              <GoBackButton onClick={() => {
                setCode("");
                SetNewPassword("");
                setRetypePassword("");
                setIsEmail(!isEmail)
              }} />
              <Grid item className={classes.gridItem}>
                <Typography variant="h2" className={classes.header}>
                  Reset password
                </Typography>
              </Grid>
              <Grid item className={classes.formContainer}>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <CustomInput
                        type="text"
                        label="Code"
                        fullWidth
                        name="email"
                        required
                        onChange={(event: any) =>
                          setCode(event.target.value)
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
                          SetNewPassword(event.target.value)
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
                          setRetypePassword(event.target.value)
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
      </Container>

      }
      {
        isNewPassword &&
        <Container>
          <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
            <Grid item sm={6}>
              <Box className={classes.loginSheet}>
                <Grid item className={classes.bigCheckMark}>
                  <BigCheckMark />
                </Grid>

                <Grid item>
                  <Typography variant="h2" className={classes.checkHeadline}>
                    Password Resent link was sent to your email
                  </Typography>
                </Grid>
                <Grid item className={classes.closeButton}>
                  <CustomButton onClick={() => { history.push("login") }} type='button' text="Close" />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>

      }

    </>
  )
}

export default ResetPasswordPage;