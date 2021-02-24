import React, { useState } from 'react';
import { PropsFromRedux } from './AddProductContainer';
import {
    Box,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    Typography,
} from '@material-ui/core';
import classes from './AddProduct.module.scss';
import ChatContainer from '../../Chat/ChatContainer';
import CustomButton from '../../common/Button/CustomButton';
import CustomInput from '../../common/Input/CustomInput';
import GoBackButton from '../../common/Button/GoBackButton';
import { useHistory } from 'react-router';
import WebLink from '../../common/webLink/webLink';
import CustomSelect from '../../common/Select/CustomSelect';
import CustomLabel from '../../common/Label/CustomLabel';
import moment from 'moment';
import { Stage } from '../../../API';
import CustomDatePicker from '../../common/DatePicker/CustomDatePicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as HotPepper } from '../../../assets/images/HotPepper.svg';
import Dropzone from '../../common/Dropzone/Dropzone';

const AddProduct: React.FunctionComponent<PropsFromRedux> = (props) => {
    const history = useHistory();
    const [URLs, setURLs] = useState<string[]>([]);
    const [urlErrorText, setUrlErrorText] = useState('');

    const validate = (values: any) => {
        const errors = {} as Record<string, unknown>;
        if (
            values.dimensionsCm.split('x').some(isNaN) ||
            values.dimensionsCm.split('x').length !== 3
        ) {
            errors.dimensionsCm = 'Please enter valid dimensions';
        }
        if (
            values.dimensionsInch.split('x').some(isNaN) ||
            values.dimensionsInch.split('x').length !== 3
        ) {
            errors.dimensionsInch = 'Please enter valid dimensions';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            itemNumber: '',
            itemName: '',
            release: null,
            tag: '',
            dimensionsCm: '',
            dimensionsInch: '',
            kgs: '',
            lbs: '',
            url: '',
        },
        validate,
        validationSchema: Yup.object({
            itemNumber: Yup.number()
                .positive("The field value can't be negative")
                .required('Required'),
            itemName: Yup.string()
                .max(35, 'Must be 35 characters or less')
                .trim()
                .required('Required'),
            release: Yup.string().required('Required').nullable(),
            tag: Yup.string().required('Required'),
            dimensionsCm: Yup.string().required('Required'),
            dimensionsInch: Yup.string().required('Required'),
            kgs: Yup.number().positive("The field value can't be negative").required('Required'),
            lbs: Yup.number().positive("The field value can't be negative").required('Required'),
            url: Yup.string().url('Please enter valid URL'),
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            saveInputData();
            props.createProduct(() => history.push('/products'));
        },
    });

    const saveInputData = () => {
        const currentTime = moment().format();
        props.setProductInfo({
            itemNumber: [{ value: Number(formik.values.itemNumber), createdAt: currentTime }],
            itemName: [{ value: formik.values.itemName, createdAt: currentTime }],
            release: moment(formik.values.release).format(),
            websiteURLs: [{ record: URLs, createdAt: currentTime }],
            stage: Stage.PRODUCTS,
            businessID: props.businessID ? props.businessID : '',
            dimentionsCm: [{ value: formik.values.dimensionsCm, createdAt: currentTime }],
            weightKg: [{ value: Number(formik.values.kgs), createdAt: currentTime }],
            tag: [{ value: formik.values.tag, createdAt: currentTime }],
            photos: [
                {
                    key: '',
                    createdAt: currentTime,
                    deleted: false,
                },
            ],
            videos: [
                {
                    key: '',
                    createdAt: currentTime,
                    deleted: false,
                },
            ],
            certifications: [
                {
                    key: '',
                    createdAt: currentTime,
                    deleted: false,
                },
            ],
            marketingMaterials: [
                {
                    key: '',
                    createdAt: currentTime,
                    deleted: false,
                },
            ],
        });
    };

    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item className={classes.titleBox}>
                    <Typography variant={'h2'}>Add product</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <GoBackButton
                    onClick={() => {
                        saveInputData();
                        history.push('/products');
                    }}
                />
                <Grid item className={classes.contentBlockBox} xs={8} xl={9}>
                    <Box className={classes.whiteBox} />
                    <form className={classes.addProductForm} onSubmit={formik.handleSubmit}>
                        <Grid container className={classes.formContent}>
                            <Grid item xs={12} className={classes.formInputs}>
                                <Grid xs={12} item className={classes.productInfoInputs}>
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            name={'itemNumber'}
                                            label={'Item №'}
                                            type={'number'}
                                            error={
                                                formik.touched.itemNumber &&
                                                Boolean(formik.errors.itemNumber)
                                            }
                                            helperText={
                                                formik.touched.itemNumber &&
                                                formik.errors.itemNumber
                                            }
                                            value={formik.values.itemNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            name={'itemName'}
                                            label={'Item name'}
                                            error={
                                                formik.touched.itemName &&
                                                Boolean(formik.errors.itemName)
                                            }
                                            helperText={
                                                formik.touched.itemName && formik.errors.itemName
                                            }
                                            value={formik.values.itemName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box style={{ width: '20%' }}>
                                        <CustomDatePicker
                                            name={'release'}
                                            value={formik.values.release}
                                            error={
                                                formik.touched.release &&
                                                Boolean(formik.errors.release)
                                            }
                                            helperText={
                                                formik.touched.release && formik.errors.release
                                            }
                                            label={'Release'}
                                            onChange={(e) => {
                                                formik.setFieldValue('release', e);
                                            }}
                                            onFocus={() => formik.setFieldError('release', '')}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginLeft: '48px',
                                        }}>
                                        <FormControl
                                            variant="outlined"
                                            className={classes.formControl}
                                            fullWidth>
                                            <CustomLabel
                                                value={'Tag'}
                                                error={
                                                    formik.touched.tag && Boolean(formik.errors.tag)
                                                }
                                                inputValue={formik.values.tag}
                                            />
                                            <CustomSelect
                                                name={'tag'}
                                                label={'Tag'}
                                                error={
                                                    formik.touched.tag && Boolean(formik.errors.tag)
                                                }
                                                value={formik.values.tag}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.touched.tag && formik.errors.tag}
                                                items={[
                                                    <MenuItem
                                                        key={'menu_1'}
                                                        value={'New'}
                                                        style={{
                                                            backgroundColor: '#D8E7FF',
                                                            color: '#4285F4',
                                                        }}>
                                                        <Typography variant={'subtitle1'}>
                                                            New
                                                        </Typography>
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_2'}
                                                        value={'Best Seller'}
                                                        style={{
                                                            backgroundColor: '#D2F5D3',
                                                            color: '#43A047',
                                                        }}>
                                                        <Typography variant={'subtitle1'}>
                                                            Best Seller
                                                        </Typography>
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_3'}
                                                        value={'Hot'}
                                                        style={{
                                                            backgroundColor: '#FFC2BD',
                                                            color: '#EA4335',
                                                        }}>
                                                        <Typography variant={'subtitle1'}>
                                                            Hot&ensp;
                                                            <HotPepper />
                                                            <HotPepper />
                                                            <HotPepper />
                                                        </Typography>
                                                    </MenuItem>,
                                                ]}
                                            />
                                            <FormHelperText
                                                error={
                                                    formik.touched.tag && Boolean(formik.errors.tag)
                                                }>
                                                {formik.touched.tag && formik.errors.tag}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid xs={12} item className={classes.additionalInfo}>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            name={'dimensionsCm'}
                                            label={'Dimensions, cm'}
                                            placeholder={'30x30x60'}
                                            fullWidth
                                            type={'text'}
                                            error={
                                                (formik.touched.dimensionsCm ||
                                                    formik.touched.dimensionsInch) &&
                                                Boolean(formik.errors.dimensionsCm)
                                            }
                                            helperText={
                                                (formik.touched.dimensionsCm ||
                                                    formik.touched.dimensionsInch) &&
                                                formik.errors.dimensionsCm
                                            }
                                            value={formik.values.dimensionsCm}
                                            onChange={(e) => {
                                                if (/^[0-9.x]*$/.test(e.target.value)) {
                                                    formik.setFieldValue(
                                                        'dimensionsCm',
                                                        e.target.value
                                                    );
                                                    formik.setFieldValue(
                                                        'dimensionsInch',
                                                        e.target.value
                                                            .split('x')
                                                            .map((e) =>
                                                                Number(Number(e) * 0.3937).toFixed(
                                                                    3
                                                                )
                                                            )
                                                            .join('x')
                                                    );
                                                }
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            name={'dimensionsInch'}
                                            label={'Dimensions, inch'}
                                            fullWidth
                                            type={'text'}
                                            error={
                                                (formik.touched.dimensionsCm ||
                                                    formik.touched.dimensionsInch) &&
                                                Boolean(formik.errors.dimensionsInch)
                                            }
                                            helperText={
                                                (formik.touched.dimensionsCm ||
                                                    formik.touched.dimensionsInch) &&
                                                formik.errors.dimensionsInch
                                            }
                                            value={formik.values.dimensionsInch}
                                            onChange={(e) => {
                                                if (/^[0-9.x]*$/.test(e.target.value)) {
                                                    formik.setFieldValue(
                                                        'dimensionsInch',
                                                        e.target.value
                                                    );
                                                    formik.setFieldValue(
                                                        'dimensionsCm',
                                                        e.target.value
                                                            .split('x')
                                                            .map((e) =>
                                                                Number(Number(e) / 0.3937).toFixed(
                                                                    3
                                                                )
                                                            )
                                                            .join('x')
                                                        //String((Number(e.target.value) / 0.39370).toFixed(3))
                                                    );
                                                }
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                    <Box style={{ width: '20%' }}>
                                        <CustomInput
                                            name={'kgs'}
                                            label={'Kgs'}
                                            fullWidth
                                            type={'number'}
                                            error={
                                                (formik.touched.kgs || formik.touched.lbs) &&
                                                Boolean(formik.errors.kgs)
                                            }
                                            helperText={
                                                (formik.touched.kgs || formik.touched.lbs) &&
                                                formik.errors.kgs
                                            }
                                            value={formik.values.kgs}
                                            onChange={(e) => {
                                                formik.setFieldValue('kgs', e.target.value);
                                                formik.setFieldValue(
                                                    'lbs',
                                                    String(
                                                        (
                                                            Number(e.target.value) / 0.45359237
                                                        ).toFixed(3)
                                                    )
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginLeft: '48px',
                                        }}>
                                        <CustomInput
                                            name={'lbs'}
                                            label={'Lbs'}
                                            fullWidth
                                            type={'number'}
                                            error={
                                                (formik.touched.kgs || formik.touched.lbs) &&
                                                Boolean(formik.errors.lbs)
                                            }
                                            helperText={
                                                (formik.touched.kgs || formik.touched.lbs) &&
                                                formik.errors.lbs
                                            }
                                            value={formik.values.lbs}
                                            onChange={(e) => {
                                                formik.setFieldValue('lbs', e.target.value);
                                                formik.setFieldValue(
                                                    'kgs',
                                                    String(
                                                        (
                                                            Number(e.target.value) * 0.45359237
                                                        ).toFixed(3)
                                                    )
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Box>
                                </Grid>
                                <Grid xs={12} item className={classes.productUrlInputs}>
                                    <WebLink
                                        linkInput={urlInput}
                                        linkURLs={URLs}
                                        linkErrorText={urlErrorText}
                                        setLinkInput={setUrlInput}
                                        setLinkURLs={setURLs}
                                        setLinkErrorText={setUrlErrorText}
                                        label={'URL'}
                                    />
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone
                                        position={'vertical'}
                                        title={'Upload product photos & videos'}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <div className={classes.horizontalLine} />
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone
                                        position={'horizontal'}
                                        title={'Upload certifications'}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <div className={classes.horizontalLine} />
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone
                                        position={'mixed'}
                                        title={'Upload marketing materials'}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className={classes.nextButtonContainer}>
                                <Box className={classes.nextButtonBox}>
                                    <CustomButton
                                        type={'submit'}
                                        text={props.isPending ? '' : 'Save'}
                                        borderRadius={'10px'}
                                        className={props.isPending ? classes.disabledBtn : ''}
                                    />
                                    {props.isPending && (
                                        <CircularProgress
                                            size={24}
                                            className={classes.buttonProgress}
                                            color="secondary"
                                        />
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid xs={4} xl={3} item>
                    <ChatContainer backGroundColor={'#FFEF98'} />
                </Grid>
            </Box>
        </Grid>
    );
};

export default AddProduct;
