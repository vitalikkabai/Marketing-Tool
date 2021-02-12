import React from 'react';
import { PropsFromRedux } from './AddProductContainer';
import { Box, Grid, Typography } from '@material-ui/core';
import classes from './AddProduct.module.scss';
import ChatContainer from '../../Chat/ChatContainer';
import CustomButton from '../../common/Button/CustomButton';
import CustomInput from '../../common/Input/CustomInput';
import Dropzone from '../../common/Dropzone/Dropzone';
import StepCounter from '../../common/StepCounter/StepCounter';
import GoBackButton from "../../common/Button/GoBackButton";
import {useHistory} from "react-router";

const AddProduct: React.FunctionComponent<PropsFromRedux> = (props) => {

    const history = useHistory();

    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item className={classes.titleBox}>
                    <Typography variant={'h2'}>Add product</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <GoBackButton onClick={()=>history.push("/products")}/>
                <Grid item className={classes.contentBlockBox} xs={8} xl={9}>
                    <form>
                        <Grid container className={classes.formContent}>
                            <Grid item xs={12} className={classes.formInputs}>
                                <Grid xs={12} item className={classes.dropZone}>
                                    <Dropzone />
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.productInfoInputs}
                                >
                                    <Box
                                        style={{
                                            width: '20%',
                                            marginRight: '24px',
                                        }}
                                    >
                                        <CustomInput
                                            label={'Item №'}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginRight: '24px',
                                        }}
                                    >
                                        <CustomInput
                                            label={'Item name'}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box style={{ width: '20%' }}>
                                        <CustomInput
                                            label={'Release'}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            width: '30%',
                                            marginLeft: '48px',
                                        }}
                                    >
                                        <CustomInput label={'Tag'} fullWidth />
                                    </Box>
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.productUrlInputs}
                                >
                                    <CustomInput label={'URL'} fullWidth />
                                    <Typography
                                        color={'primary'}
                                        className={classes.addUrlText}
                                        variant={'h6'}
                                    >
                                        + Add URL
                                    </Typography>
                                </Grid>
                                <Grid
                                    xs={12}
                                    item
                                    className={classes.additionalInfo}
                                >
                                    <Box style={{ width: '30%' }}>
                                        <CustomInput
                                            label={'Color'}
                                            fullWidth
                                        />
                                        <Typography
                                            color={'primary'}
                                            className={classes.addUrlText}
                                            variant={'h6'}
                                        >
                                            + Add Color
                                        </Typography>
                                    </Box>
                                    <Box
                                        style={{
                                            width: '40%',
                                            margin: '0 48px',
                                        }}
                                    />
                                    <Box style={{ width: '30%' }}>
                                        <CustomInput
                                            label={'Material'}
                                            fullWidth
                                        />
                                        <Typography
                                            color={'primary'}
                                            className={classes.addUrlText}
                                            variant={'h6'}
                                        >
                                            + Add Material
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                className={classes.nextButtonBox}
                            >
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
                    <ChatContainer backGroundColor={'#FFEF98'} />
                </Grid>
            </Box>
        </Grid>
    );
};

export default AddProduct;
