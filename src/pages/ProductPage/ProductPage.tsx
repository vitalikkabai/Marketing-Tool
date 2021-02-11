import React from 'react';
import { PropsFromRedux } from './ProductPageContainer';
import { Box, Grid, Tab, Typography } from '@material-ui/core';
import classes from './ProductPage.module.scss';
import CustomAppBar from '../../components/common/TabPanel/CustomAppBar';
import TabPanel from '../../components/common/TabPanel/TabPanel';
import ProductCat from '../../assets/images/ProductCat.png';
import { ReactComponent as PlusSVG } from '../../assets/images/formPlus.svg';
import { useHistory } from 'react-router';
import StepCounter from './../../components/common/StepCounter/StepCounter';

const ProductPage: React.FunctionComponent<PropsFromRedux> = (props) => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item xs={8} xl={9} className={classes.titleBox}>
                    <Typography variant={'h2'}>Products</Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    xl={3}
                    className={classes.addProductButton}
                    onClick={() => {
                        history.push('/products/add-new-product');
                    }}
                >
                    <PlusSVG />
                    <Typography color={'primary'} variant={'button'}>
                        Add product
                    </Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <Grid item className={classes.contentBox} container xs={12}>
                    <CustomAppBar value={value} setValue={setValue}>
                        <Tab label="Added" color={'primary'} />
                        <Tab label="Edited" color={'primary'} />
                        <Tab label="Sales" color={'primary'} />
                    </CustomAppBar>
                    <TabPanel
                        className={classes.tabPanelBox}
                        index={0}
                        value={value}
                    >
                        <Grid item xs={12} className={classes.taskContainer}>
                            <Box
                                marginTop={'57px'}
                                textAlign={'center'}
                                className={classes.tasksTitle}
                            >
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}
                                >
                                    This page is not ready yet
                                </Typography>
                            </Box>
                            <Box
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <StepCounter
                                    className={classes.stepLine}
                                    completedStep={1}
                                    stepNumber={1}
                                />
                                <img src={ProductCat} alt={'image'} />
                            </Box>
                        </Grid>
                    </TabPanel>

                    <TabPanel
                        className={classes.tabPanelBox}
                        index={1}
                        value={value}
                    >
                        <Grid item xs={12} className={classes.taskContainer}>
                            <Box
                                marginTop={'57px'}
                                textAlign={'center'}
                                className={classes.tasksTitle}
                            >
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}
                                >
                                    This page is not ready yet
                                </Typography>
                            </Box>
                            <Box
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                {/* <StepCounter
                                    className={classes.stepLine}
                                    completedStep={1}
                                    stepNumber={1}
                                /> */}
                                <img src={ProductCat} alt={'image'} />
                            </Box>
                        </Grid>
                    </TabPanel>
                    <TabPanel
                        className={classes.tabPanelBox}
                        index={2}
                        value={value}
                    >
                        <Grid item xs={12} className={classes.taskContainer}>
                            <Box
                                marginTop={'57px'}
                                textAlign={'center'}
                                className={classes.tasksTitle}
                            >
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}
                                >
                                    This page is not ready yet
                                </Typography>
                            </Box>
                            <Box
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                {/* <StepCounter
                                    className={classes.stepLine}
                                    completedStep={1}
                                    stepNumber={1}
                                /> */}
                                <img src={ProductCat} alt={'image'} />
                            </Box>
                        </Grid>
                    </TabPanel>
                </Grid>
            </Box>
        </Grid>
    );
};

export default ProductPage;
