import React, { useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@material-ui/core";
import classes from "./LoginForm.module.scss";
import { useHistory } from "react-router";
import CustomInput from "../common/Input/CustomInput"
import GoBackButton from "../common/Button/GoBackButton";

type PropsType = {
	isAuth: boolean
	signIn: (username: string, password: string) => void
	getAuthData: () => void
}


const LoginForm: React.FC<PropsType> = (props) => {

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		props.signIn(username, password);
	}

	if (props.isAuth) {
		history.push("")
	}

	return (
		<Grid container justify="center" alignItems={"center"}>
			<Grid container direction="column" justify="center" className={classes.loginForm}>
				<Box className={classes.loginSheet}>
					<GoBackButton onClick={() => { console.log("Back Clicked") }} />
					<Grid item className={classes.gridItem}>
						<Typography variant="h2" className={classes.header}>
							Login
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
										name="username"
										value={username}
										onChange={(event: any) =>
											setUserName(event.target.value)
										}
										required
										color={"#9e9e9e"}
										width={290}
										autoFocus />
								</Grid>
								<Grid item>
									<CustomInput
										type="password"
										placeholder="Password"
										label="Password"
										fullWidth
										name="password"
										value={password}
										onChange={(event: any) =>
											setPassword(event.target.value)
										}
										color={"#9e9e9e"}
										width={290}
										required />
								</Grid>
								<Grid item className={classes.loginButton}>
									<Button variant="contained" color="primary"
										type="submit" className={classes.buttonBlock}>
										Log In
                  </Button>

								</Grid>
							</Grid>
						</form>
					</Grid>
					<Grid item className={classes.forgotPassword}>
						<Link variant="body2" className={classes.link}
							onClick={() => {
								history.push("resetPassword")
							}}>
							Forgot your password?
            </Link>
					</Grid>
					<Grid item className={classes.createAccount}>
						<Typography variant={"subtitle1"}>Don’t have an account yet?&nbsp;
              <Link variant={"subtitle1"} className={classes.link}
								onClick={() => {
									history.push("register")
								}}>
								Register
              </Link>
						</Typography>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
}


export default LoginForm;