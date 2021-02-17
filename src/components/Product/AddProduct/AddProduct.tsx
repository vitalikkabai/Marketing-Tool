import React, {useEffect, useState} from 'react';
import {PropsFromRedux} from './AddProductContainer';
import {Box, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Typography} from '@material-ui/core';
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

const AddProduct: React.FunctionComponent<PropsFromRedux> = (props) => {
    const history = useHistory();
    const [urlInput, setUrlInput] = useState('');
    const [URLs, setURLs] = useState<string[]>([]);
    const [urlErrorText, setUrlErrorText] = useState('');
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
        release: {
            value: moment(new Date()).format("YYYY-MM-DD"),
            touched: false,
            error: false,
            errorText: '',
            name: 'RELEASE',
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
                case prevInput.release.name: {
                    currInputValue.release.value = inputData;
                    currInputValue.release.touched = true;
                    currInputValue.release.error = false;
                    currInputValue.release.errorText = '';
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

    const saveInputData = () => {
        const currentTime = moment().format();
        props.setProductInfo({
            itemNumber: [{value: Number(inputValue.itemNumber.value), createdAt: currentTime}],
            itemName: [{value: inputValue.itemName.value, createdAt: currentTime}],
            release: moment(inputValue.release.value).format(),
            websiteURLs: [{record: URLs, createdAt: currentTime}],
            stage: Stage.PRODUCTS,
            businessID: props.businessID ? props.businessID : "",
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
        saveInputData();
        props.createProduct(()=>history.push("/products"));
    }

    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item className={classes.titleBox}>
                    <Typography variant={'h2'}>Add product</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <GoBackButton onClick={() => history.push('/products')}/>
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
                                        />
                                    </Box>
                                    <Box style={{width: '20%'}}>
                                        <CustomInput
                                            label={'Release'}
                                            fullWidth
                                            type={"date"}
                                            value={inputValue.release.value}
                                            onChange={(
                                                event: React.ChangeEvent<| HTMLTextAreaElement
                                                    | HTMLInputElement>
                                            ) => {
                                                console.log(moment(event.target.value).format("L"))
                                                handleInput(
                                                    event.target.value,
                                                    'RELEASE'
                                                )
                                            }
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
                                                        value={"0"}
                                                    >
                                                        New
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_2'}
                                                        value={"1"}
                                                    >
                                                        Best Seller
                                                    </MenuItem>,
                                                    <MenuItem
                                                        key={'menu_3'}
                                                        value={"2"}
                                                    >
                                                        Hot
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
                                            label={'LxWxH, cm'}
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
                                            label={'LxWxH, inch'}
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
