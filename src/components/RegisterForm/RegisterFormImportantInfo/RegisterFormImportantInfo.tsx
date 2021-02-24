import {
    Box,
    CircularProgress,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import classes from '../RegisterForm.module.scss';
import { useHistory } from 'react-router';
import GoBackButton from '../../common/Button/GoBackButton';
import UxAssistant from '../UxAssistant/UxAssistant';
import CustomInput from '../../common/Input/CustomInput';
import CustomButton from '../../common/Button/CustomButton';
import {
    isNotEmail,
    isNotMinLength,
    isNameNotValid,
    isPasswordsNotEqual,
    isNotPhone,
} from '../../../utils/validators/validators';
import AutocompleteCustomInput from '../../common/AutocompleteCustomInput/AutocompleteCustomInput';
import data from '../../../assets/dataset/country/countries';
import { PropsFromRedux } from './RegisterFormImportantInfoContainer';
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';

const RegisterFormImportantInfo: React.FunctionComponent<PropsFromRedux> = (
    props
) => {
    const history = useHistory();
    const [emptyFieldsError, setEmptyFieldsError] = useState(false);
    const [inputValue, setInputValue] = useState({
        //For input values
        companyName: {
            value: props.companyName,
            touched: false,
            error: false,
            errorText: '',
            name: 'COMPANY_NAME',
        },
        countryCode: {
            value: {
                code: props.businessNumber.code,
                label: props.businessNumber.label,
                phone: props.businessNumber.phone,
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
        password: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'PASSWORD',
        },
        confirmPassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'CONFIRM_PASSWORD',
        },
    });
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        const { employee: { roleTags } } = props;
        // Redirect to first step if prev step values is empty
        if (!Object.values(roleTags).some(e => e === true)) history.push('/register');
        if (props.businessNumber.code === '') props.getUserLocation(); //Fetch userLocation if CountyCode is empty
    }, []);


    useEffect(() => { //Validate async errors
        if (props.registerErrorText.code) setPending(false);
        switch (props.registerErrorText.code) {
            case 'UsernameExistsException': {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    ownerEmail: {
                        ...prevStyle.ownerEmail,
                        error: true,
                        errorText: props.registerErrorText.message.replace(
                            /\.$/,
                            ''
                        ),
                    },
                }));
                break;
            }
        }
    }, [props.registerErrorText.code]);

    useEffect(() => {
        setInputValue((prevStyle) => ({
            ...prevStyle,
            countryCode: {
                ...prevStyle.countryCode,
                value: props.businessNumber,
            },
        }));
    }, [props.businessNumber]);

    const resetFieldErrors = () => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            currInputValue.companyName.error = false;
            currInputValue.companyName.errorText = '';

            currInputValue.countryCode.error = false;
            currInputValue.countryCode.errorText = '';

            currInputValue.phoneNumber.error = false;
            currInputValue.phoneNumber.errorText = '';

            currInputValue.ownerName.error = false;
            currInputValue.ownerName.errorText = '';

            currInputValue.ownerEmail.error = false;
            currInputValue.ownerEmail.errorText = '';

            currInputValue.password.error = false;
            currInputValue.password.errorText = '';

            currInputValue.confirmPassword.error = false;
            currInputValue.confirmPassword.errorText = '';

            return currInputValue;
        });
    };

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.companyName.name: {
                    currInputValue.companyName.value = inputData;
                    currInputValue.companyName.touched = true;
                    currInputValue.companyName.error = false;
                    currInputValue.companyName.errorText = '';
                    break;
                }
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
                case prevInput.password.name: {
                    currInputValue.password.value = inputData.replace(
                        /\s/g,
                        ''
                    );
                    currInputValue.password.touched = true;
                    currInputValue.password.error = false;
                    currInputValue.password.errorText = '';
                    break;
                }
                case prevInput.confirmPassword.name: {
                    currInputValue.confirmPassword.value = inputData.replace(
                        /\s/g,
                        ''
                    );
                    currInputValue.confirmPassword.touched = true;
                    currInputValue.confirmPassword.error = false;
                    currInputValue.confirmPassword.errorText = '';
                    break;
                }
                default:
                    break;
            }
            const inputArray = Object.entries(inputValue);
            const emptyInputNames: Array<string> = [];
            inputArray.forEach((el, index) => {
                if (inputArray[index][1].value == '')
                    emptyInputNames.push(inputArray[index][0]);
            });
            if (!emptyInputNames[0]) setEmptyFieldsError(false);
            return currInputValue;
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetFieldErrors();
        setEmptyFieldsError(false);
        const emptyMessage = 'The input fields cannot be empty';
        const passwordError = isNotMinLength(inputValue.password.value);
        const emailError = isNotEmail(inputValue.ownerEmail.value);
        const phoneError = isNotPhone(inputValue.phoneNumber.value);
        const nameError = isNameNotValid(inputValue.ownerName.value);
        const confirmError = isPasswordsNotEqual(
            inputValue.password.value,
            inputValue.confirmPassword.value
        );

        const inputArray = Object.entries(inputValue);
        const emptyInputNames: Array<string> = [];
        inputArray.forEach((el, index) => {
            if (inputArray[index][1].value.toString().replace(/\s/g, '') === '')
                emptyInputNames.push(inputArray[index][0]);
        });

        //ToDo find another way to validate empty fields
        if (emptyInputNames[0] || !inputValue.countryCode.value.code) {
            // if any empty fields detected
            if (!inputValue.companyName.value.replace(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    companyName: {
                        ...prevStyle.companyName,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.countryCode.value.code) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    countryCode: {
                        ...prevStyle.countryCode,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.phoneNumber.value.replaceAll(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    phoneNumber: {
                        ...prevStyle.phoneNumber,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.ownerName.value.replaceAll(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    ownerName: {
                        ...prevStyle.ownerName,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.ownerEmail.value.replace(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    ownerEmail: {
                        ...prevStyle.ownerEmail,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.password.value.replace(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    password: {
                        ...prevStyle.password,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            if (!inputValue.confirmPassword.value.replace(/\s/g, '')) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    confirmPassword: {
                        ...prevStyle.confirmPassword,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
            setEmptyFieldsError(true);
            return;
        } else {
            // if no empty fields detected
            if (emailError) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    ownerEmail: {
                        ...prevStyle.ownerEmail,
                        error: true,
                        errorText: emailError,
                    },
                }));
                return;
            } else if (nameError) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    ownerName: {
                        ...prevStyle.ownerName,
                        error: true,
                        errorText: nameError,
                    },
                }));
                return;
            } else if (phoneError) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    phoneNumber: {
                        ...prevStyle.phoneNumber,
                        error: true,
                        errorText: phoneError,
                    },
                }));
                return;
            } else if (passwordError) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    password: {
                        ...prevStyle.password,
                        error: true,
                        errorText: passwordError,
                    },
                }));
                return;
            } else if (confirmError) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    confirmPassword: {
                        ...prevStyle.confirmPassword,
                        error: true,
                        errorText: confirmError,
                    },
                }));
                return;
            } else {
                saveInputData();
                setPending(true);
                props.signUp(
                    inputValue.ownerEmail.value,
                    inputValue.password.value,
                    inputValue.ownerName.value
                );
            }
        }
    };

    const handleBackPressed = () => {
        saveInputData();
        history.goBack();
    };

    const saveInputData = () => {
        props.setBusinessName(
            inputValue.companyName.value.replace(/ +/g, ' ').trim()
        );
        props.setEmployee({
            ...props.employee,
            countryCode: inputValue.countryCode.value,
            phoneNumber: inputValue.phoneNumber.value,
        });
        props.setProfile({
            ...props.profile,
            name: inputValue.ownerName.value.replace(/ +/g, ' ').trim(),
            email: inputValue.ownerEmail.value,
        });
    };

    const getErrorMessage = () => {
        if (emptyFieldsError) return 'The input fields cannot be empty';
        if (inputValue.password.errorText) return inputValue.password.errorText;
        if (inputValue.phoneNumber.errorText)
            return inputValue.phoneNumber.errorText;
        if (inputValue.confirmPassword.errorText)
            return inputValue.confirmPassword.errorText;
        if (inputValue.ownerEmail.errorText)
            return inputValue.ownerEmail.errorText;
        if (inputValue.ownerName.errorText)
            return inputValue.ownerName.errorText;
        return '';
    };

    useEffect(() => { //Detect page refreshing
        window.onbeforeunload = (e: BeforeUnloadEvent) => {
            e.returnValue = '';
        }
        return () => {
            onbeforeunload = null
        }
    }, []);

    return (
        <Grid container justify="center" alignItems={'center'}>
            <Grid
                container
                direction="column"
                justify="center"
                className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed} />
                    <UxAssistant
                        assistantText={'Tell us about yourself'}
                        stepNumber={3}
                    />
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer}>
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid
                                    item
                                    xs={5}
                                    style={{ paddingRight: '12px' }}>
                                    <CustomInput
                                        label="Your name"
                                        variant="outlined"
                                        placeholder={'Name'}
                                        fullWidth={true}
                                        value={inputValue.ownerName.value}
                                        error={inputValue.ownerName.error}
                                        margin={'0 0 24px 0'}
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
                                    <CustomInput
                                        label="Company Name"
                                        placeholder={'Company Name'}
                                        fullWidth={true}
                                        value={inputValue.companyName.value}
                                        error={inputValue.companyName.error}
                                        variant="outlined"
                                        margin={'0 0 24px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                            >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'COMPANY_NAME'
                                            )
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        name="password"
                                        placeholder={'Password'}
                                        fullWidth={true}
                                        value={inputValue.password.value}
                                        error={inputValue.password.error}
                                        margin={'0 0 24px 0'}
                                        onChange={(
                                            event: React.ChangeEvent<
                                                | HTMLTextAreaElement
                                                | HTMLInputElement
                                            >
                                        ) =>
                                            handleInput(
                                                event.target.value,
                                                'PASSWORD'
                                            )
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={5}
                                    style={{ paddingLeft: '12px' }}>
                                    <Grid
                                        container
                                        className={classes.phoneContainer}>
                                        <Grid item xs={4}>
                                            <AutocompleteCustomInput
                                                label={'Country'}
                                                margin={'0 0 24px 0'}
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
                                                    event: Record<
                                                        string,
                                                        unknown
                                                    >,
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
                                        <Grid item xs={1} />
                                        <Grid item xs={7}>
                                            <CustomInput
                                                label="Phone Number"
                                                variant="outlined"
                                                placeholder={'Phone number'}
                                                fullWidth={true}
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
                                    <CustomInput
                                        type="text"
                                        label="Company email"
                                        variant="outlined"
                                        placeholder={'email'}
                                        fullWidth={true}
                                        value={inputValue.ownerEmail.value}
                                        error={inputValue.ownerEmail.error}
                                        margin={'0 0 24px 0'}
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
                                    <CustomInput
                                        type="password"
                                        name="password"
                                        label="Repeat Password"
                                        variant="outlined"
                                        placeholder={'Confirm password'}
                                        fullWidth={true}
                                        value={inputValue.confirmPassword.value}
                                        error={inputValue.confirmPassword.error}
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
                                    />
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                        </Box>
                        <Grid item className={classes.errorText}>
                            <Typography variant={'subtitle1'}>
                                {getErrorMessage()}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            className={
                                classes.nextContainer +
                                ' ' +
                                classes.importantInfo
                            }>
                            <CustomButton
                                type={'submit'}
                                text={isPending ? '' : 'Save'}
                                className={
                                    isPending
                                        ? classes.disabledBtn +
                                          ' ' +
                                          classes.buttonBlock
                                        : classes.buttonBlock
                                }
                            />
                            {isPending && (
                                <CircularProgress
                                    size={24}
                                    className={classes.buttonProgress}
                                    color="secondary"
                                />
                            )}
                            <Typography variant={'subtitle1'}>
                                Have an account already?&nbsp;
                                <Link
                                    className={classes.link}
                                    onClick={() => {
                                        history.replace('/login');
                                    }}>
                                    Log in
                                </Link>
                            </Typography>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RegisterFormImportantInfo;
