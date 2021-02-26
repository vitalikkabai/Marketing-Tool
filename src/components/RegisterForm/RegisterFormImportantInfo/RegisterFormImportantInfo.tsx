import {
    Box,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import classes from '../RegisterForm.module.scss';
import {useHistory} from 'react-router';
import GoBackButton from '../../common/Button/GoBackButton';
import UxAssistant from '../UxAssistant/UxAssistant';
import CustomInput from '../../common/Input/CustomInput';
import CustomButton from '../../common/Button/CustomButton';
import AutocompleteCustomInput from '../../common/AutocompleteCustomInput/AutocompleteCustomInput';
import data from '../../../assets/dataset/country/countries';
import {PropsFromRedux} from './RegisterFormImportantInfoContainer';
// @ts-ignore
import ReactCountryFlag from 'react-country-flag';
import {useFormik} from "formik";
import * as Yup from "yup";

const RegisterFormImportantInfo: React.FunctionComponent<PropsFromRedux> = (
    props
) => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            companyName: props.companyName,
            countryCode: {
                code: props.businessNumber.code,
                label: props.businessNumber.label,
                phone: props.businessNumber.phone,
            },
            phoneNumber: props.employee.phoneNumber,
            ownerName: props.profile.name,
            ownerEmail: props.profile.email,
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            companyName: Yup.string()
                .trim()
                .required("Required"),
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
            password: Yup.string()
                .min(6,"The password must be at least 6 characters")
                .required("Required"),
            confirmPassword: Yup.string().when("password", {
                is: (val:string) => (!!(val && val.length > 0)),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Password mismatched"
                )
            }).required("Required")
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            saveInputData();
            setPending(true);
            props.cleanErrors();
            props.signUp(
                formik.values.ownerEmail,
                formik.values.password,
                formik.values.ownerName
            );
        },
    });

    const [isPending, setPending] = useState(false);

    useEffect(() => {
        const {employee: {roleTags}} = props;
        // Redirect to first step if prev step values is empty
        if (!Object.values(roleTags).some(e => e === true)) history.push('/register');
        if (props.businessNumber.code === '') props.getUserLocation(); //Fetch userLocation if CountyCode is empty
    }, []);


    useEffect(() => { //Validate async errors
        if (props.registerErrorText.code) setPending(false);
        switch (props.registerErrorText.code) {
            case 'UsernameExistsException': {
                formik.setFieldError("ownerEmail", props.registerErrorText.message.replace(/\.$/, ''));
                break;
            }
        }
    }, [props.registerErrorText.code]);

    useEffect(() => {
        formik.setFieldValue("countryCode", props.businessNumber);
    }, [props.businessNumber]);


    const handleBackPressed = () => {
        saveInputData();
        history.goBack();
    };

    const saveInputData = () => {
        props.setBusinessName(
            formik.values.companyName.replace(/ +/g, ' ').trim()
        );
        props.setEmployee({
            ...props.employee,
            countryCode: formik.values.countryCode,
            phoneNumber: formik.values.phoneNumber,
        });
        props.setProfile({
            ...props.profile,
            name: formik.values.ownerName.replace(/ +/g, ' ').trim(),
            email: formik.values.ownerEmail,
        });
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
                    <GoBackButton onClick={handleBackPressed}/>
                    <UxAssistant
                        assistantText={'Tell us about yourself'}
                        stepNumber={3}
                    />
                    <form onSubmit={formik.handleSubmit} className={classes.infoForm}>
                        <Grid className={classes.formContainer}>
                                <Grid
                                    container
                                    item
                                    xs={12} style={{marginBottom: "24px"}}>
                                    <Grid item xs={6} style={{paddingRight:"12px"}}>
                                    <CustomInput
                                        label="Your name"
                                        variant="outlined"
                                        placeholder={'Name'}
                                        fullWidth={true}
                                        name={"ownerName"}
                                        value={formik.values.ownerName}
                                        error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
                                        helperText={formik.touched.ownerName && formik.errors.ownerName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    </Grid>
                                    <Grid item xs={6}
                                          style={{paddingLeft:"12px"}}
                                          className={classes.phoneContainer}>
                                        <Grid item xs={4}>
                                            <AutocompleteCustomInput
                                                label={'Country'}
                                                option={data}
                                                value={
                                                    formik.values.countryCode
                                                }
                                                getOption={(option: {
                                                    code: string;
                                                    phone: string;
                                                    label: string;
                                                }) => {
                                                    if (
                                                        formik.values.countryCode.phone
                                                    )
                                                        return (
                                                            '+' + option.phone
                                                        );
                                                    else return option.phone;
                                                }}
                                                renderOption={(option: {
                                                    code: string,
                                                    label: string,
                                                    phone: string
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
                                                    Boolean(formik.errors.countryCode)
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
                                                        formik.setFieldValue('countryCode', value);
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={1}/>
                                        <Grid item xs={7}>
                                            <CustomInput
                                                label="Phone Number"
                                                variant="outlined"
                                                placeholder={'Phone number'}
                                                fullWidth={true}
                                                name={"phoneNumber"}
                                                value={formik.values.phoneNumber}
                                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </Grid>
                                        <Box className={classes.flagBox}>
                                            {formik.values.countryCode.code && (
                                                <ReactCountryFlag
                                                    countryCode={
                                                        formik.values.countryCode.code
                                                    }
                                                    svg
                                                    style={{
                                                        width: 'auto',
                                                        height: '100%',
                                                        marginLeft: '-4px',
                                                        marginBottom: '10px',
                                                    }}
                                                    title={
                                                        formik.values.countryCode.code
                                                    }
                                                />
                                            )}
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    style={{marginBottom: "24px"}}
                                    >
                                    <Grid item xs={6} style={{paddingRight:"12px"}}>
                                        <CustomInput
                                            label="Company Name"
                                            placeholder={'Company Name'}
                                            fullWidth={true}
                                            name={"companyName"}
                                            value={formik.values.companyName}
                                            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                            helperText={formik.touched.companyName && formik.errors.companyName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{paddingLeft:"12px"}}>
                                        <CustomInput
                                            type="text"
                                            label="Company email"
                                            variant="outlined"
                                            placeholder={'email'}
                                            fullWidth={true}
                                            name={"ownerEmail"}
                                            value={formik.values.ownerEmail}
                                            error={formik.touched.ownerEmail && Boolean(formik.errors.ownerEmail)}
                                            helperText={formik.touched.ownerEmail && formik.errors.ownerEmail}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    xs={12}
                                >
                                    <Grid item xs={6} style={{paddingRight:"12px"}}>
                                        <CustomInput
                                            type="password"
                                            label="Password"
                                            variant="outlined"
                                            name="password"
                                            placeholder={'Password'}
                                            fullWidth={true}
                                            value={formik.values.password}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                            onChange={(e)=>formik.setFieldValue('password',e.target.value.replace(/\s/,""))}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Grid>
                                    <Grid item xs={6} style={{paddingLeft:"12px"}}>
                                        <CustomInput
                                            type="password"
                                            label="Repeat Password"
                                            variant="outlined"
                                            placeholder={'Confirm password'}
                                            fullWidth={true}
                                            name={"confirmPassword"}
                                            value={formik.values.confirmPassword}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                            onChange={(e)=>formik.setFieldValue('confirmPassword',e.target.value.replace(/\s/,""))}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Grid>
                                </Grid>
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
                                text={'Save'}
                                className={classes.buttonBlock}
                                isPending={isPending}
                            />
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
