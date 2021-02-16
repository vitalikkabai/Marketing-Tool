import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, {FormEvent, useEffect, useState} from 'react';
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
    const [inputValue, setInputValue] = useState({
        countryCode: {
            value: {
                code: props.employee.countryCode.code,
                label: props.employee.countryCode.label,
                phone: props.employee.countryCode.phone,
            },
            touched: false,
            error: false,
            errorText: '',
            name: 'COUNTRY_CODE',
        },
        phoneNumber: {
            value: props.employee.phoneNumber,
            touched: false,
            error: false,
            errorText: '',
            name: 'PHONE_NUMBER',
        },
        ownerName: {
            value: props.profile.name,
            touched: false,
            error: false,
            errorText: '',
            name: 'OWNER_NAME',
        },
        ownerEmail: {
            value: props.profile.email,
            touched: false,
            error: false,
            errorText: '',
            name: 'OWNER_EMAIL',
        },
        oldPassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'OLD_PASSWORD',
        },
        newPassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'NEW_PASSWORD',
        },
        confirmPassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'CONFIRM_PASSWORD',
        },
    });

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.phoneNumber.name: {
                    currInputValue.phoneNumber.value = inputData;
                    currInputValue.phoneNumber.touched = true;
                    currInputValue.phoneNumber.error = false;
                    currInputValue.phoneNumber.errorText = '';
                    break;
                }
                case prevInput.ownerName.name: {
                    currInputValue.ownerName.value = inputData;
                    currInputValue.ownerName.touched = true;
                    currInputValue.ownerName.error = false;
                    currInputValue.ownerName.errorText = '';
                    break;
                }
                case prevInput.ownerEmail.name: {
                    currInputValue.ownerEmail.value = inputData;
                    currInputValue.ownerEmail.touched = true;
                    currInputValue.ownerEmail.error = false;
                    currInputValue.ownerEmail.errorText = '';
                    break;
                }
                case prevInput.newPassword.name: {
                    currInputValue.newPassword.value = inputData;
                    currInputValue.newPassword.touched = true;
                    currInputValue.newPassword.error = false;
                    currInputValue.newPassword.errorText = '';
                    break;
                }
                case prevInput.oldPassword.name: {
                    currInputValue.oldPassword.value = inputData;
                    currInputValue.oldPassword.touched = true;
                    currInputValue.oldPassword.error = false;
                    currInputValue.oldPassword.errorText = '';
                    break;
                }
                case prevInput.confirmPassword.name: {
                    currInputValue.confirmPassword.value = inputData;
                    currInputValue.confirmPassword.touched = true;
                    currInputValue.confirmPassword.error = false;
                    currInputValue.confirmPassword.errorText = '';
                    break;
                }
                default:
                    break;
            }
            return currInputValue;
        });
    };

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
        setInputValue((prevStyle) => ({
            ...prevStyle,
            oldPassword: {
                ...prevStyle.oldPassword,
                value: "",
            },
        }));
        setInputValue((prevStyle) => ({
            ...prevStyle,
            newPassword: {
                ...prevStyle.newPassword,
                value: "",
            },
        }));
        setInputValue((prevStyle) => ({
            ...prevStyle,
            confirmPassword: {
                ...prevStyle.confirmPassword,
                value: "",
            },
        }));
        alert('Password Changed!');
    };

    useEffect(() => { // Set new input values on profile name & email update in redux
        setInputValue((prevStyle) => ({
            ...prevStyle,
            ownerName: {
                ...prevStyle.ownerName,
                value: props.profile.name,
            },
        }));
        setInputValue((prevStyle) => ({
            ...prevStyle,
            ownerEmail: {
                ...prevStyle.ownerEmail,
                value: props.profile.email,
            },
        }));
    }, [props.profile]);

    useEffect(() => { // Set new input values on employee country code and phone number update in redux
        setInputValue((prevStyle) => ({
            ...prevStyle,
            countryCode: {
                ...prevStyle.countryCode,
                value: props.employee.countryCode,
            },
        }));
        setInputValue((prevStyle) => ({
            ...prevStyle,
            phoneNumber: {
                ...prevStyle.phoneNumber,
                value: props.employee.phoneNumber,
            },
        }));
    }, [props.employee]);

    useEffect(() => {
        // Check that any values do not differ from the analogues in the reducer
        if (
            inputValue.ownerName.value !== props.profile.name ||
            inputValue.ownerEmail.value !== props.profile.email ||
            inputValue.countryCode.value !== props.employee.countryCode ||
            inputValue.phoneNumber.value !== props.employee.phoneNumber
        ) {
            setPersonalInfoEdited(true);
        } // Set edited mode
        else {
            setPersonalInfoEdited(false);
        }
    }, [inputValue]);

    useEffect(() => {
        // Check that all password fields is not empty
        if (
            inputValue.newPassword.value !== "" &&
            inputValue.oldPassword.value !== "" &&
            inputValue.confirmPassword.value !== ""
        ) {
            setPasswordEdited(true);
        } // Set edited mode
        else {
            setPasswordEdited(false);
        }
    }, [inputValue.newPassword.value, inputValue.oldPassword.value, inputValue.confirmPassword.value]);

    const handleProfileInfoSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.changePersonalInfo(inputValue.ownerName.value, inputValue.ownerEmail.value);
    };

    const handlePasswordSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.changePassword(
            inputValue.oldPassword.value,
            inputValue.newPassword.value,
            changePasswordSuccessCallback
        );
    };

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
                            onSubmit={handleProfileInfoSubmit}
                            className={classes.contentContainer}
                        >
                            <Grid item md={10} lg={8}>
                                <Grid item>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={'Name'}
                                        fullWidth={true}
                                        value={inputValue.ownerName.value}
                                        // error={inputValue.ownerName.error}
                                        margin={'0 0 32px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                                >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'OWNER_NAME'
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={'email'}
                                        fullWidth={true}
                                        value={inputValue.ownerEmail.value}
                                        // error={inputValue.ownerEmail.error}
                                        margin={'0 0 32px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                                >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'OWNER_EMAIL'
                                            )
                                        }
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
                                                inputValue.countryCode.value
                                            }
                                            getOption={(option: {
                                                code: string;
                                                phone: string;
                                                label: string;
                                            }) => {
                                                if (
                                                    inputValue.countryCode
                                                        .value.phone
                                                )
                                                    return (
                                                        '+' + option.phone
                                                    );
                                                else return option.phone;
                                            }}
                                            renderOption={(option: any) => (
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
                                                inputValue.countryCode.error
                                            }
                                            onChange={(
                                                event: Record<string,
                                                    unknown>,
                                                value: any
                                            ) => {
                                                if (value) {
                                                    setInputValue(
                                                        (prevStyle) => ({
                                                            ...prevStyle,
                                                            countryCode: {
                                                                ...prevStyle.countryCode,
                                                                value: value,
                                                            },
                                                        })
                                                    );
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
                                            value={
                                                inputValue.phoneNumber.value
                                            }
                                            error={
                                                inputValue.phoneNumber.error
                                            }
                                            onChange={(
                                                event: React.ChangeEvent<
                                                    | HTMLTextAreaElement
                                                    | HTMLInputElement
                                                    >
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'PHONE_NUMBER'
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Box className={classes.flagBox}>
                                        {inputValue.countryCode.value
                                            .code && (
                                            <ReactCountryFlag
                                                countryCode={
                                                    inputValue.countryCode
                                                        .value.code
                                                }
                                                svg
                                                style={{
                                                    width: 'auto',
                                                    height: '100%',
                                                    marginLeft: '-4px',
                                                    marginBottom: '10px',
                                                }}
                                                title={
                                                    inputValue.countryCode
                                                        .value.code
                                                }
                                            />
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}/>
                            <Box className={classes.buttonBox}>
                                <CustomButton type="submit" text="Edit" disabled={!isPersonalInfoEdited}/>
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
                            onSubmit={handlePasswordSubmit}
                            className={classes.contentContainer}
                        >
                            <Grid item xs={8}>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="Old Password"
                                        fullWidth
                                        name="password"
                                        required
                                        value={inputValue.oldPassword.value}
                                        margin={'0 0 32px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                                >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'OLD_PASSWORD'
                                            )
                                        }
                                        width={290}
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="New password"
                                        fullWidth
                                        name="password"
                                        value={inputValue.newPassword.value}
                                        margin={'0 0 32px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                                >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'NEW_PASSWORD'
                                            )
                                        }
                                        width={290}
                                        required
                                    />
                                </Grid>
                                <Grid item>
                                    <CustomInput
                                        type="password"
                                        label="Retype password"
                                        fullWidth
                                        name="password"
                                        value={inputValue.confirmPassword.value}
                                        margin={'0 0 32px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                                >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'CONFIRM_PASSWORD'
                                            )
                                        }
                                        width={290}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}/>
                            <Box className={classes.buttonBox}>
                                <CustomButton type="submit" text="Send" disabled={!isPasswordEdited}/>
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
