import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { FormEvent, useEffect, useState } from "react";
import classes from "./BusinessProfile.module.scss";
import { AppStateType } from "../../store/store";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { Profile, S3Object } from "../../models";
import { saveProfileImage } from "../../store/Profile/ProfileActions";
import CustomInput from "../../components/common/Input/CustomInput";
import { changePassword, changePersonalInfo } from "../../store/Auth/AuthActions";
import RoleBoxes from "../../components/common/RoleBoxes/RoleBoxes";

const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {


    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");


    const [selectedRole, setSelectedRole] = useState(props.business.roleTags ? [
        props.business.roleTags.Sales,
        props.business.roleTags.Marketing,
        props.business.roleTags.Logistics,
        props.business.roleTags.Accounting,
        props.business.roleTags.Production,
        props.business.roleTags.QC
    ] : [false,false,false,false,false,false]);


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
        <Box className={classes.component}>
            <Typography variant={"h2"}>Business Profile</Typography>
            <form onSubmit={handleInfoUpdate}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={6}>
                        <Box >

                            <CustomInput
                                label="Company Name"
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
                                label="Country"
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
                            <CustomInput
                                type="text"
                                label="City"
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
                            <CustomInput
                                type="text"
                                label="Business Number"
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
                            {/* <CustomButton type='submit' text="Edit" /> */}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <RoleBoxes selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
                    </Grid>
                    <Grid item xs={6}>
                        3
                    </Grid>
                    <Grid item xs={6}>
                        4
                    </Grid>
                </Grid>
            </form>
        </Box >

    );
}
function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer.profile,
        business: state.BusinessReducer
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        saveProfileImage: (s3: S3Object, bufferImg: Buffer) => dispatch(saveProfileImage(s3, bufferImg)),
        changePassword: (oldPassword: string, newPassword: string, callback: () => void) => dispatch(changePassword(oldPassword, newPassword, callback)),
        changePersonalInfo: (name: string, email: string) => dispatch(changePersonalInfo(name, email))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PersonalProfile);