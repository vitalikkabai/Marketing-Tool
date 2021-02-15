import React, {useState} from 'react';
import {PropsFromRedux} from './AddProductContainer';
import {Box, Grid, Typography} from '@material-ui/core';
import classes from './AddProduct.module.scss';
import ChatContainer from '../../Chat/ChatContainer';
import CustomButton from '../../common/Button/CustomButton';
import CustomInput from '../../common/Input/CustomInput';
import Dropzone from '../../common/Dropzone/Dropzone';
import StepCounter from '../../common/StepCounter/StepCounter';
import GoBackButton from '../../common/Button/GoBackButton';
import {useHistory} from 'react-router';
import WebLink from "../../common/webLink/webLink";

const AddProduct: React.FunctionComponent<PropsFromRedux> = (props) => {
    const history = useHistory();
    const [urlInput, setUrlInput] = useState('');
    const [URLs, setURLs] = useState<string[]>([]);
    const [urlErrorText, setUrlErrorText] = useState('');

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
                    <form>
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
                                            fullWidth
                                        />
                                    </Box>
                                    <Box style={{width: '20%'}}>
                                        <CustomInput
                                            label={'Release'}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginLeft: '48px',
                                        }}>
                                        <CustomInput label={'Tag'} fullWidth/>
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
                                        />
                                    </Box>
                                    <Box style={{width: '20%'}}>
                                        <CustomInput
                                            label={'Kgs'}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginLeft: '48px',
                                        }}>
                                        <CustomInput label={'Lbs'} fullWidth/>
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
                                <Grid xs={12}>
                                    <div className={classes.horizontalLine}/>
                                </Grid>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone title={"Upload certifications"}/>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                className={classes.nextButtonBox}>
                                <CustomButton
                                    type={'submit'}
                                    text={'Next'}
                                    borderRadius={'10px'}
                                />
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
