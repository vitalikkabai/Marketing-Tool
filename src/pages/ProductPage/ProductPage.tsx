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
import ProductItem from "../../components/Product/ProductItem/ProductItem";


const ProductPage: React.FunctionComponent<PropsFromRedux> = (props) => {
    const itemsData = [
        {id: 1, itemName:"Hammer", itemNumber: 228, stage: 2},
        {id: 2, itemName:"Cup", itemNumber: 341, stage: 3},
        {id: 3, itemName:"Computer", itemNumber: 134, stage: 5},
        {id: 4, itemName:"Pants", itemNumber: 765, stage: 2},
        {id: 5, itemName:"Bomb", itemNumber: 612, stage: 2},
        {id: 6, itemName:"Fork", itemNumber: 415, stage: 4},
        {id: 7, itemName:"Keyboard", itemNumber: 123, stage: 2},
        {id: 6, itemName:"Knife", itemNumber: 666, stage: 6},
    ]

    const Products = itemsData.map((el) => (
        <Grid key={el.id} item lg={6} xl={4} className={classes.productItem}>
            <ProductItem itemName={el.itemName} itemNumber={el.itemNumber} stepNumber={el.stage}/>
        </Grid>
    ));

    const [value, setValue] = React.useState(0);
    const history = useHistory();
    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid item className={classes.titleBox}>
                    <Typography variant={'h2'}>Products</Typography>
                </Grid>
                <Grid
                    item
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
                        <Grid item container xs={12} className={classes.productItems}>
                            {Products}
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
                                <StepCounter
                                    className={classes.stepLine}
                                    completedStep={1}
                                    stepNumber={1}
                                />
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
