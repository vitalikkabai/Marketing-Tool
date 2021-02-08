import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { FormEvent, useEffect, useState } from "react";
import AvatarSelector from "./AvatarSelector/AvatarSelector";
import classes from "./PersonalProfile.module.scss";
import config from '../../aws-exports'
import { DialogContent } from "@material-ui/core";
import CustomButton from "../../components/common/Button/CustomButton";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import CustomInput from "../../components/common/Input/CustomInput";
import {PropsFromRedux} from "./PersonalProfileContainer";
import avatarHover from "../../assets/images/avatarHover.svg"


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const saveImage = async (imageBase64: string) => {
        const base64Data = Buffer.from(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        const key = `images/${props.profile.id}_${new Date().getTime()}_avatar.png`

        const fileForUpload = {
            bucket,
            key,
            region,
        }
        props.saveProfileImage(fileForUpload, base64Data);
        setDialogOpen(false);
    }

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(oldPassword, newPassword, retypePassword);
        props.changePassword(oldPassword, newPassword, changePasswordSuccessCallback);
    }

    const [name, setName] = useState(props.profile.name)
    const [email, setEmail] = useState(props.profile.email)
    console.log(name, email)

    const changePasswordSuccessCallback = () => {
        console.log(oldPassword, newPassword, retypePassword)
        setOldPassword(() => "");
        setNewPassword(() => "");
        setRetypePassword(() => "");
        alert("Password Changed!")
    }

    useEffect(() => {
        setName(props.profile.name);
        setEmail(props.profile.email);
    }, [props.profile])

    const handleInfoUpdate = (e: FormEvent) => {
        e.preventDefault();
        console.log(name, email);
        props.changePersonalInfo(name, email);
    }

    return (
        <Grid container className={classes.component} spacing={3}>
            <Grid className={classes.contentItem + ' ' + classes.topContainer} item xs={12}>
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Personal Profile</Typography>
                    </Box>
                    <Box className={classes.contentBox}>
                        <form onSubmit={handleInfoUpdate} className={classes.contentContainer}>
                            <Grid item xs={8}>
                                <Grid item>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={"Name"}
                                        fullWidth={true}
                                        value={name}
                                        // error={inputValue.ownerName.error}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setName(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={"email"}
                                        fullWidth={true}
                                        value={email}
                                        // error={inputValue.ownerEmail.error}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={"email"}
                                        fullWidth={true}
                                        value={email}
                                        // error={inputValue.ownerEmail.error}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}/>
                            <Box className={classes.buttonBox}>
                                <CustomButton type='submit' text="Edit"/>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Change Password</Typography>
                    </Box>

                    <Box className={classes.contentBox}>
                        <form onSubmit={handleSubmit} className={classes.contentContainer}>
                            <Grid item xs={8}>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="Old Password"
                                        fullWidth
                                        name="password"
                                        required
                                        value={oldPassword}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setOldPassword(event.target.value)
                                        }
                                        width={290}
                                        autoFocus/>
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="New password"
                                        fullWidth
                                        name="password"
                                        value={newPassword}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setNewPassword(event.target.value)
                                        }
                                        width={290}
                                        required/>
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="Retype password"
                                        fullWidth
                                        name="password"
                                        value={retypePassword}
                                        margin={"0 0 32px 0"}
                                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                            setRetypePassword(event.target.value)
                                        }
                                        width={290}
                                        required/>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}/>
                            <Box className={classes.buttonBox}>
                                <CustomButton type='submit' text="Send"/>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Grid className={classes.contentItem + ' ' + classes.bottomContainer} item xs={12}>
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Personal Profile</Typography>
                    </Box>
                    <Box className={classes.contentContainer + " " + classes.contentBox}>
                        <Box className={classes.closeAccountBox}>
                            <Typography variant="subtitle1" className={classes.closeAccTypography}>
                                Your account will be closed permanently.
                            </Typography>
                            <Box className={classes.buttonBox}>
                                <CustomButton
                                    // TODO: Set normal width to this button
                                    width="196px" type={"button"} text="CLOSE ACCOUNT"
                                    className={classes.closeAccButton}/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>

					<Box className={classes.mainTitleBox}>
						<Typography variant="h2">Upload Photo</Typography>
					</Box>
					<Box className={classes.avatarContainer + " " + classes.contentBox}>
						<Box className={classes.avatarBox} onClick={() => setDialogOpen(true)}>
							<img src={avatarHover} alt="avatarHover" className={classes.avatarHover} />
							<Avatar alt="avatar" className={classes.avatar} src={props.profile.avatarPublicURL || ""} />
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				BackdropProps={{
					classes: {
						root: classes.backDrop
					}
				}}
			>
				<DialogContent className={classes.logOutDialog}>
					<Typography variant="h3" align="center">Upload your photo</Typography>

					<Box className={classes.contentContainer}>
						<AvatarSelector saveImage={saveImage} />
					</Box>
				</DialogContent>
			</Dialog>
		</Grid >
	);
}

export default PersonalProfile;