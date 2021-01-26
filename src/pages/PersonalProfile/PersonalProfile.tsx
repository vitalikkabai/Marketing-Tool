import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { API, graphqlOperation, Storage } from "aws-amplify";
import React, { FormEvent, useEffect, useState } from "react";
import { updateProfile } from "../../graphql/mutations";
import AvatarSelector from "./AvatarSelector/AvatarSelector";
import classes from "./PersonalProfile.module.scss";
import config from '../../aws-exports'
import { AppStateType } from "../../store/store";
import { connect, ConnectedProps } from "react-redux";
import { UserAttributes } from "../../store/Auth/AuthReducer";
import { getProfile, listProfiles, profileByOwner } from "../../graphql/queries";
import { Dispatch } from "redux";
import { Profile, S3Object } from "../../models";
import { saveProfileImage } from "../../store/Profile/ProfileActions";
import { DialogContent } from "@material-ui/core";
import CustomButton from "../../components/common/Button/CustomButton";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import { getS3ObjectSrc } from "../../utils/profile/profile";
import CustomInput from "../../components/common/Input/CustomInput";
import { changePassword, changePersonalInfo } from "../../store/Auth/AuthActions";


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const saveImage = async (imageBase64: string) => {
        const base64Data = Buffer.from(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        const key = `images/${props.profile.owner}_${new Date().getTime()}_avatar.png`

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
        props.changePassword(oldPassword, newPassword);
    }

    const [name, setName] = useState(props.profile.name)
    const [email, setEmail] = useState(props.profile.email)

    const handleInfoUpdate = (e: FormEvent) => {
        e.preventDefault();
        console.log(name,email);
        props.changePersonalInfo(name, email);
    }

    return (
        <Grid container className={classes.component}>
            <Grid item xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}>
                    <form onSubmit={handleInfoUpdate}>

                        <CustomInput
                            label="Name"
                            variant="outlined"
                            placeholder={"Name"}
                            fullWidth={true}
                            value={name}
                            // error={inputValue.ownerName.error}
                            margin={"0 0 16px 0"}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setName(event.target.value)
                            }
                        />
                        <CustomInput
                            type="text"
                            label="Email"
                            variant="outlined"
                            placeholder={"email"}
                            fullWidth={true}
                            value={email}
                            // error={inputValue.ownerEmail.error}
                            margin={"0 0 16px 0"}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(event.target.value)
                            }
                        />
                        <CustomButton type='submit' text="Edit" />
                    </form>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h2">Change Password</Typography>
                <Box className={classes.contentContainer}>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <CustomInput
                                    type="password"
                                    label="Old Password"
                                    fullWidth
                                    name="password"
                                    required
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setOldPassword(event.target.value)
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
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setNewPassword(event.target.value)
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
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
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
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}></Box>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h2">Upload Photo</Typography>
                <Box className={classes.contentContainer}>
                    <Avatar alt="avatar" src={getS3ObjectSrc(props.profile.avatar)} />

                    <CustomButton onClick={() => setDialogOpen(true)} type={"button"} text="CHANGE" />
                </Box>
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
        </Grid>
    );
}
function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer.profile
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        saveProfileImage: (s3: S3Object, bufferImg: Buffer) => dispatch(saveProfileImage(s3, bufferImg)),
        changePassword: (oldPassword: string, newPassword: string) => dispatch(changePassword(oldPassword, newPassword)),
        changePersonalInfo: (name:string, email: string) => dispatch(changePersonalInfo(name, email))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PersonalProfile);