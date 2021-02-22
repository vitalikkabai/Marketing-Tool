import React, {useState} from 'react';
import {PropsFromRedux} from './AddProductContainer';
import {Box, CircularProgress, FormControl, Grid, MenuItem, Typography} from '@material-ui/core';
import classes from './AddProduct.module.scss';
import ChatContainer from '../../Chat/ChatContainer';
import CustomButton from '../../common/Button/CustomButton';
import CustomInput from '../../common/Input/CustomInput';
import Dropzone from '../../common/Dropzone/Dropzone';
import GoBackButton from '../../common/Button/GoBackButton';
import {useHistory} from 'react-router';
import WebLink from "../../common/webLink/webLink";
import CustomSelect from "../../common/Select/CustomSelect";
import CustomLabel from "../../common/CustomLabel/CustomLabel";
import moment from "moment";
import {Stage} from "../../../API";
import CustomDatePicker from "../../common/CustomDatePicker/CustomDatePicker";
import {isNameNotValid, isNotEmpty, isNotPositive} from "../../../utils/validators/validators";
import { ReactComponent as HotPepper } from '../../../assets/images/HotPepper.svg';

const AddProduct: React.FunctionComponent<PropsFromRedux> = (props) => {
    const history = useHistory();
    const [urlInput, setUrlInput] = useState('');
    const [URLs, setURLs] = useState<string[]>([]);
    const [urlErrorText, setUrlErrorText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [errors, setErrors] = useState([]);
    const [inputValue, setInputValue] = useState({
        //For input values
        itemNumber: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'ITEM_NUMBER',
        },
        itemName: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'ITEM_NAME',
        },
        tag: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'TAG',
        },
        cm: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'CM',
        },
        inch: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'INCH',
        },
        kgs: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'KGS',
        },
        lbs: {
            value: "",
            touched: false,
            error: false,
            errorText: '',
            name: 'LBS',
        }
    });


    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.itemNumber.name: {
                    currInputValue.itemNumber.value = inputData;
                    currInputValue.itemNumber.touched = true;
                    currInputValue.itemNumber.error = false;
                    currInputValue.itemNumber.errorText = '';
                    break;
                }
                case prevInput.itemName.name: {
                    currInputValue.itemName.value = inputData;
                    currInputValue.itemName.touched = true;
                    currInputValue.itemName.error = false;
                    currInputValue.itemName.errorText = '';
                    break;
                }
                case prevInput.cm.name: {
                    currInputValue.cm.value = inputData;
                    currInputValue.cm.touched = true;
                    currInputValue.cm.error = false;
                    currInputValue.cm.errorText = '';
                    currInputValue.inch.value = String((Number(inputData) * 0.39370).toFixed(3));
                    break;
                }
                case prevInput.inch.name: {
                    currInputValue.inch.value = inputData;
                    currInputValue.inch.touched = true;
                    currInputValue.inch.error = false;
                    currInputValue.inch.errorText = ''
                    currInputValue.cm.value = String((Number(inputData) / 0.39370).toFixed(3));
                    break;
                }
                case prevInput.kgs.name: {
                    currInputValue.kgs.value = inputData;
                    currInputValue.kgs.touched = true;
                    currInputValue.kgs.error = false;
                    currInputValue.kgs.errorText = '';
                    currInputValue.lbs.value = String((Number(inputData) / 0.45359237).toFixed(3));
                    break;
                }
                case prevInput.lbs.name: {
                    currInputValue.lbs.value = inputData;
                    currInputValue.lbs.touched = true;
                    currInputValue.lbs.error = false;
                    currInputValue.lbs.errorText = ''
                    currInputValue.kgs.value = String((Number(inputData) * 0.45359237).toFixed(3));
                    break;
                }
                default:
                    break;
            }
            return currInputValue;
        });
    };

    const isFormValid = (): boolean => {
        const emptyMessage = 'The input fields cannot be empty';
        Object.entries(inputValue).forEach((el) => {
            if (isNotEmpty(el[1].value)) {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    itemName: {
                        ...prevStyle.itemName,
                        error: true,
                        errorText: emptyMessage,
                    },
                }));
            }
        })
        console.log(Object.entries(inputValue));
        return true;
    }

    const saveInputData = () => {
        const currentTime = moment().format();
        props.setProductInfo({
            itemNumber: [{value: Number(inputValue.itemNumber.value), createdAt: currentTime}],
            itemName: [{value: inputValue.itemName.value, createdAt: currentTime}],
            release: moment(selectedDate).format(),
            websiteURLs: [{record: URLs, createdAt: currentTime}],
            stage: Stage.PRODUCTS,
            businessID: props.businessID ? props.businessID : "",
            dimentionsCm: [{value: inputValue.cm.value, createdAt: currentTime}],
            weightKg: [{value: Number(inputValue.kgs.value), createdAt: currentTime}],
            tag: [{value: inputValue.tag.value, createdAt: currentTime}],
            photos: [{
                key: "",
                createdAt: currentTime,
                deleted: false,
            }],
            videos: [{
                key: "",
                createdAt: currentTime,
                deleted: false,
            }],
            certifications: [{
                key: "",
                createdAt: currentTime,
                deleted: false,
            }],
            marketingMaterials: [{
                key: "",
                createdAt: currentTime,
                deleted: false,
            }]
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        isFormValid();
        //saveInputData();
        //props.createProduct(() => history.push("/products"));
    }

    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item className={classes.titleBox}>
                    <Typography variant={'h2'}>Add product</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <GoBackButton onClick={() => {
                    saveInputData();
                    history.push('/products');
                }}/>
                <Grid item className={classes.contentBlockBox} xs={8} xl={9}>
                    <Box className={classes.whiteBox}/>
                    <form className={classes.addProductForm} onSubmit={handleSubmit}>
                        <Grid container className={classes.formContent}>
                            <Grid item xs={12} className={classes.formInputs}>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.productInfoInputs}>
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            label={'Item №'}
                                            type={"number"}
                                            value={inputValue.itemNumber.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'ITEM_NUMBER'
                                                )
                                            }
                                            fullWidth
                                            validators={[isNotEmpty, isNotPositive]}
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            label={'Item name'}
                                            value={inputValue.itemName.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'ITEM_NAME'
                                                )
                                            }
                                            fullWidth
                                            validators={[isNotEmpty, isNameNotValid]}
                                        />
                                    </Box>
                                    <Box style={{width: '20%'}}>
                                        <CustomDatePicker
                                            value={selectedDate}
                                            label={"Release"}
                                            onChange={
                                                (date: any) => setSelectedDate(date)
                                            }
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
                                            fullWidth
                                        >
                                            <CustomLabel value={"Tag"} inputValue={inputValue.tag.value}/>
                                            <CustomSelect
                                                label={'Tag'}
                                                value={inputValue.tag.value}
                                                onChange={(e: any) => {
                                                    setInputValue((prevStyle) => ({
                                                        ...prevStyle,
                                                        tag: {
                                                            ...prevStyle.tag,
                                                            value: e.target.value
                                                        },
                                                    }));
                                                }}
                                                items={[
                                                    <MenuItem
                                                        key={'menu_1'}
                                                        value={"New"}
                                                        style={{
                                                            backgroundColor: "#D8E7FF",
                                                            color: "#4285F4"
                                                        }}
                                                    >
                                                        <Typography
                                                            variant={"subtitle1"}
                                                        >
                                                            New
                                                        </Typography>
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_2'}
                                                        value={"Best Seller"}
                                                        style={{
                                                            backgroundColor: "#D2F5D3",
                                                            color: "#43A047"
                                                        }}
                                                    >
                                                        <Typography
                                                            variant={"subtitle1"}
                                                        >
                                                            Best Seller
                                                        </Typography>
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_3'}
                                                        value={"Hot"}
                                                        style={{
                                                            backgroundColor: "#FFC2BD",
                                                            color: "#EA4335"
                                                        }}
                                                    >
                                                        <Typography
                                                            variant={"subtitle1"}
                                                        >
                                                            Hot&ensp;<HotPepper /><HotPepper /><HotPepper />
                                                        </Typography>
                                                    </MenuItem>
                                                ]}/>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.additionalInfo}>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            label={'Dimensions, cm'}
                                            fullWidth
                                            type={"number"}
                                            value={inputValue.cm.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'CM'
                                                )
                                            }
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}>
                                        <CustomInput
                                            label={'Dimensions, inch'}
                                            fullWidth
                                            type={"number"}
                                            value={inputValue.inch.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'INCH'
                                                )
                                            }
                                        />
                                    </Box>
                                    <Box style={{width: '20%'}}>
                                        <CustomInput
                                            label={'Kgs'}
                                            fullWidth
                                            type={"number"}
                                            value={inputValue.kgs.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'KGS'
                                                )
                                            }
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginLeft: '48px',
                                        }}>
                                        <CustomInput
                                            label={'Lbs'}
                                            fullWidth
                                            type={"number"}
                                            value={inputValue.lbs.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) =>
                                                handleInput(
                                                    event.target.value,
                                                    'LBS'
                                                )
                                            }/>
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.productUrlInputs}>
                                    <WebLink linkInput={urlInput}
                                             linkURLs={URLs}
                                             linkErrorText={urlErrorText}
                                             setLinkInput={setUrlInput}
                                             setLinkURLs={setURLs}
                                             setLinkErrorText={setUrlErrorText}
                                             label={"URL"}/>
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone title={"Upload product photos & videos"}/>
                                </Grid>
                                <Grid xs={12} item>
                                    <div className={classes.horizontalLine}/>
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone title={"Upload certifications"}/>
                                </Grid>
                                <Grid xs={12} item>
                                    <div className={classes.horizontalLine}/>
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone title={"Upload marketing materials"}/>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                className={classes.nextButtonContainer}>
                                <Box className={classes.nextButtonBox}>
                                    <CustomButton
                                        type={'submit'}
                                        text={props.isPending ? '' : 'Save'}
                                        borderRadius={'10px'}
                                        className={
                                            props.isPending ? classes.disabledBtn : ''
                                        }
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
                    <ChatContainer backGroundColor={'#FFEF98'}/>
                </Grid>
            </Box>
        </Grid>
    );
};

export default AddProduct;
