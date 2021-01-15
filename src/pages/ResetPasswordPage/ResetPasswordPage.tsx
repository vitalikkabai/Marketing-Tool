import React, { useState } from "react";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import classes from "./ResetPasswordPage.module.scss";
import Header from "../../components/Header/Header";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import CustomInput from "../../components/common/Input/CustomInput";

type PropsType = {
  email: (email: string) => void
}

const ResetPasswordPage: React.FC<PropsType> = (props) => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  //const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    console.log(email);
    event.preventDefault();
    if (email) {
      setIsEmail(!isEmail);
      console.log(isEmail);
    }
    // props.signIn(email);
  }
  return (
    <>
      <Header />
      {!isEmail && <Container>
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
      }

      {isEmail && <Container>
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
                          setEmail(event.target.value)
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
                        // value={password}
                        // onChange={(event: any) =>
                        //   setPassword(event.target.value)
                        // }
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
                        // value={password}
                        // onChange={(event: any) =>
                        //   setPassword(event.target.value)
                        // }
                        color={"#9e9e9e"}
                        width={290}
                        required />
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

      }

    </>
  )
}

export default ResetPasswordPage;