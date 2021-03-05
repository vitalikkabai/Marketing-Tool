import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState} from 'react';
import AvatarSelector from './AvatarSelector/AvatarSelector';
import classes from './PersonalProfile.module.scss';
import config from '../../aws-exports';
import {DialogContent} from '@material-ui/core';
import CustomButton from '../../components/common/Button/CustomButton';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import CustomInput from '../../components/common/Input/CustomInput';
import {PropsFromRedux} from './PersonalProfileContainer';
import avatarHover from '../../assets/images/avatarHover.svg';
import AutocompleteCustomInput from "../../components/common/AutocompleteCustomInput/AutocompleteCustomInput";
import data from "../../assets/dataset/country/countries";
import {useFormik} from "formik";
import * as Yup from "yup";
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket,
} = config;

const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isPersonalInfoEdited, setPersonalInfoEdited] = useState(false);
    const [isPasswordEdited, setPasswordEdited] = useState(false);
    const personalInfoFormik = useFormik({
        initialValues: {
            ownerName: props.profile.name,
            ownerEmail: props.profile.email,
            countryCode: {
                code: props.employee.countryCode.code,
                label: props.employee.countryCode.label,
                phone: props.employee.countryCode.phone,
            },
            phoneNumber: props.employee.phoneNumber,
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string()
                .max(15, "Invalid phone number")
                .min(6, "Invalid phone number")
                .trim()
                .required("Required"),
            ownerName: Yup.string()
                .trim()
                .required("Required"),
            ownerEmail: Yup.string()
                .trim()
                .email("Invalid email address")
                .required("Required"),
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            props.changePersonalInfo(personalInfoFormik.values.ownerName, personalInfoFormik.values.ownerEmail);
        },
    });

    const passwordFormik = useFormik({
        initialValues: {
            oldPassword: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
                .min(6,"Incorrect password")
                .required("Required"),
            password: Yup.string()
                .min(6,"The password must be at least 6 characters")
                .required("Required"),
            confirmPassword: Yup.string().when("password", {
                is: (val:any) => (!!(val && val.length > 0)),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Password mismatched"
                )
            }).required("Required")
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            props.changePassword(
                passwordFormik.values.oldPassword,
                passwordFormik.values.password,
                changePasswordSuccessCallback
            );
        },
    });

    useEffect(() => { //Validate async errors
        if (props.changeInfoErrorMessage.code)
        switch (props.changeInfoErrorMessage.code) {
            case 'AliasExistsException': {
                personalInfoFormik.setFieldError("ownerEmail", 'An account with the given email already exists')
                break;
            }
            case 'LimitExceededException': {
                personalInfoFormik.setFieldError("ownerEmail", 'Attempt limit exceeded, try again later')
                break;
            }
        }
    }, [props.changeInfoErrorMessage]);

    useEffect(() => { //Validate async errors
        if (props.sendResetLinkError.code)
        switch (props.sendResetLinkError.code) {
            case 'NotAuthorizedException': {
                passwordFormik.setFieldError("oldPassword", 'Incorrect password')
                break;
            }
            case 'LimitExceededException': {
                passwordFormik.setFieldError("oldPassword", 'Attempt limit exceeded, try again later')
                break;
            }
        }
    }, [props.sendResetLinkError]);

    const saveImage = async (imageBase64: string) => {
        const base64Data = Buffer.from(
            imageBase64.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
        );
        const key = `images/${
            props.profile.id
        }_${new Date().getTime()}_avatar.png`;

        const fileForUpload = {
            bucket,
            key,
            region,
        };
        props.saveProfileImage(fileForUpload, base64Data);
        setDialogOpen(false);
    };

    const changePasswordSuccessCallback = () => {
        passwordFormik.setFieldValue("oldPassword", "");
        passwordFormik.setFieldValue("password", "");
        passwordFormik.setFieldValue("confirmPassword", "");
        alert('Password Changed!');
    };

    useEffect(() => { // Set new input values on profile name & email update in redux
        personalInfoFormik.setFieldValue("ownerName", props.profile.name);
        personalInfoFormik.setFieldValue("ownerEmail", props.profile.email);
    }, [props.profile]);

    useEffect(() => { // Set new input values on employee country code and phone number update in redux
        personalInfoFormik.setFieldValue("countryCode", props.employee.countryCode);
        personalInfoFormik.setFieldValue("phoneNumber", props.employee.phoneNumber);
    }, [props.employee]);

    useEffect(() => {
        // Check that any values do not differ from the analogues in the reducer
        if (
            personalInfoFormik.values.ownerName !== props.profile.name ||
            personalInfoFormik.values.ownerEmail !== props.profile.email ||
            personalInfoFormik.values.countryCode !== props.employee.countryCode ||
            personalInfoFormik.values.phoneNumber !== props.employee.phoneNumber
        ) {
            setPersonalInfoEdited(true);
        } // Set edited mode
        else {
            setPersonalInfoEdited(false);
        }
    }, [personalInfoFormik.values, props.profile]);

    useEffect(() => {
        // Check that all password fields is not empty
        if (
            passwordFormik.values.password !== "" &&
            passwordFormik.values.oldPassword !== "" &&
            passwordFormik.values.confirmPassword !== ""
        ) {
            setPasswordEdited(true);
        } // Set edited mode
        else {
            setPasswordEdited(false);
        }
    }, [passwordFormik.values]);

    return (
        <Grid container className={classes.component} spacing={3}>
            <Grid
                className={classes.contentItem + ' ' + classes.topContainer}
                item
                xs={12}
            >
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Personal Profile</Typography>
                    </Box>
                    <Box className={classes.contentBox}>
                        <form
                            onSubmit={personalInfoFormik.handleSubmit}
                            className={classes.contentContainer}>
                            <Grid item md={10} lg={8}>
                                <Grid item style={{marginBottom: "24px"}}>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={'Name'}
                                        fullWidth={true}
                                        name={"ownerName"}
                                        value={personalInfoFormik.values.ownerName}
                                        error={personalInfoFormik.touched.ownerName && Boolean(personalInfoFormik.errors.ownerName)}
                                        helperText={personalInfoFormik.touched.ownerName && personalInfoFormik.errors.ownerName}
                                        onChange={personalInfoFormik.handleChange}
                                        onBlur={personalInfoFormik.handleBlur}
                                    />
                                </Grid>
                                <Grid item style={{marginBottom: "24px"}}>
                                    <CustomInput
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={'email'}
                                        fullWidth={true}
                                        name={"ownerEmail"}
                                        value={personalInfoFormik.values.ownerEmail}
                                        error={personalInfoFormik.touched.ownerEmail && Boolean(personalInfoFormik.errors.ownerEmail)}
                                        helperText={personalInfoFormik.touched.ownerEmail && personalInfoFormik.errors.ownerEmail}
                                        onChange={personalInfoFormik.handleChange}
                                        onBlur={personalInfoFormik.handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    container
                                    className={classes.phoneContainer}>
                                    <Grid item lg={4} xl={2}>
                                        <AutocompleteCustomInput
                                            label={'Country'}
                                            margin={'0 0 24px 0'}
                                            disabled={true}
                                            option={data}
                                            value={
                                                personalInfoFormik.values.countryCode
                                            }
                                            getOption={(option: {
                                                code: string;
                                                phone: string;
                                                label: string;
                                            }) => {
                                                if (
                                                    personalInfoFormik.values.countryCode.phone
                                                )
                                                    return (
                                                        '+' + option.phone
                                                    );
                                                else return option.phone;
                                            }}
                                            renderOption={(option: {
                                                code: string;
                                                phone: string;
                                                label: string;
                                            }) => (
                                                <React.Fragment>
                                                    <ReactCountryFlag
                                                        countryCode={
                                                            option.code
                                                        }
                                                        svg
                                                        title={option.code}
                                                    />
                                                    &nbsp;
                                                    {option.phone}
                                                </React.Fragment>
                                            )}
                                            error={
                                                Boolean(personalInfoFormik.errors.countryCode)
                                            }
                                            onChange={(
                                                event: Record<string,
                                                    unknown>,
                                                value: {
                                                    code: string,
                                                    label: string,
                                                    phone: string
                                                }
                                            ) => {
                                                if (value) {
                                                    personalInfoFormik.setFieldValue('countryCode', value);
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item lg={1}/>
                                    <Grid item lg={7} xl={9}>
                                        <CustomInput
                                            label="Phone Number"
                                            variant="outlined"
                                            placeholder={'Phone number'}
                                            fullWidth={true}
                                            disabled={true}
                                            name={"phoneNumber"}
                                            value={personalInfoFormik.values.phoneNumber}
                                            error={personalInfoFormik.touched.phoneNumber && Boolean(personalInfoFormik.errors.phoneNumber)}
                                            helperText={personalInfoFormik.touched.phoneNumber && personalInfoFormik.errors.phoneNumber}
                                            onChange={personalInfoFormik.handleChange}
                                            onBlur={personalInfoFormik.handleBlur}
                                        />
                                    </Grid>
                                    <Box className={classes.flagBox}>
                                        {personalInfoFormik.values.countryCode.code && (
                                            <ReactCountryFlag
                                                countryCode={
                                                    personalInfoFormik.values.countryCode.code
                                                }
                                                svg
                                                style={{
                                                    width: 'auto',
                                                    height: '100%',
                                                    marginLeft: '-4px',
                                                    marginBottom: '10px',
                                                }}
                                                title={
                                                    personalInfoFormik.values.countryCode.code
                                                }
                                            />
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box className={classes.buttonBox}>
                                <CustomButton type="submit"
                                              text="Edit"
                                              disabled={!isPersonalInfoEdited}
                                              isPending={props.isProfilePending}/>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Change Password</Typography>
                    </Box>

                    <Box className={classes.contentBox}>
                        <form
                            onSubmit={passwordFormik.handleSubmit}
                            className={classes.contentContainer}>
                            <Grid item xs={8}>
                                <Grid item style={{marginBottom: "24px"}}>
                                    <CustomInput
                                        type="password"
                                        label="Old Password"
                                        fullWidth
                                        name="oldPassword"
                                        value={passwordFormik.values.oldPassword}
                                        error={passwordFormik.touched.oldPassword && Boolean(passwordFormik.errors.oldPassword)}
                                        helperText={passwordFormik.touched.oldPassword && passwordFormik.errors.oldPassword}
                                        onChange={passwordFormik.handleChange}
                                        onBlur={passwordFormik.handleBlur}
                                        width={290}
                                    />
                                </Grid>
                                <Grid item style={{marginBottom: "24px"}}>
                                    <CustomInput
                                        type="password"
                                        label="New password"
                                        fullWidth
                                        name="password"
                                        value={passwordFormik.values.password}
                                        error={passwordFormik.touched.password && Boolean(passwordFormik.errors.password)}
                                        helperText={passwordFormik.touched.password && passwordFormik.errors.password}
                                        onChange={passwordFormik.handleChange}
                                        onBlur={passwordFormik.handleBlur}
                                        width={290}
                                    />
                                </Grid>
                                <Grid item style={{marginBottom: "24px"}}>
                                    <CustomInput
                                        type="password"
                                        label="Retype password"
                                        fullWidth
                                        name="confirmPassword"
                                        value={passwordFormik.values.confirmPassword}
                                        error={passwordFormik.touched.confirmPassword && Boolean(passwordFormik.errors.confirmPassword)}
                                        helperText={passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword}
                                        onChange={passwordFormik.handleChange}
                                        onBlur={passwordFormik.handleBlur}
                                        width={290}
                                    />
                                </Grid>
                            </Grid>
                            <Box className={classes.buttonBox}>
                                <CustomButton type="submit"
                                              text="Send"
                                              isPending={props.isPasswordPending}
                                              disabled={!isPasswordEdited}/>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                className={classes.contentItem + ' ' + classes.bottomContainer}
                item
                xs={12}
            >
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Personal Profile</Typography>
                    </Box>
                    <Box
                        className={
                            classes.contentContainer + ' ' + classes.contentBox
                        }
                    >
                        <Box className={classes.closeAccountBox}>
                            <Typography
                                variant="subtitle1"
                                className={classes.closeAccTypography}
                            >
                                Your account will be closed permanently.
                            </Typography>
                            <Box className={classes.buttonBox}>
                                <CustomButton
                                    // TODO: Set normal width to this button
                                    width="196px"
                                    type={'button'}
                                    text="CLOSE ACCOUNT"
                                    className={classes.closeAccButton}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Box className={classes.mainTitleBox}>
                        <Typography variant="h2">Upload Photo</Typography>
                    </Box>
                    <Box
                        className={
                            classes.avatarContainer + ' ' + classes.contentBox
                        }
                    >
                        <Box
                            className={classes.avatarBox}
                            onClick={() => setDialogOpen(true)}
                        >
                            <img
                                src={avatarHover}
                                alt="avatarHover"
                                className={classes.avatarHover}
                            />
                            <Avatar
                                alt="avatar"
                                className={classes.avatar}
                                src={props.avatarURL}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                    },
                }}
            >
                <DialogContent className={classes.logOutDialog}>
                    <Typography variant="h3" align="center">
                        Upload your photo
                    </Typography>

                    <Box className={classes.contentContainer}>
                        <AvatarSelector saveImage={saveImage}/>
                    </Box>
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

export default PersonalProfile;
