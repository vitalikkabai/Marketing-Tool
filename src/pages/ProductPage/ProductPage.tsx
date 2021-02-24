import React, {useEffect} from 'react';
import {PropsFromRedux} from './ProductPageContainer';
import {Box, Grid, Tab, Typography} from '@material-ui/core';
import classes from './ProductPage.module.scss';
import CustomAppBar from '../../components/common/TabPanel/CustomAppBar';
import TabPanel from '../../components/common/TabPanel/TabPanel';
import ProductCat from '../../assets/images/ProductCat.png';
import {ReactComponent as PlusSVG} from '../../assets/images/formPlus.svg';
import {useHistory} from 'react-router';
import StepCounter from './../../components/common/StepCounter/StepCounter';
import ProductItem from "../../components/Product/ProductItem/ProductItem";
import CustomTooltip from "../../components/common/Tooltip/CustomTooltip";


const ProductPage: React.FunctionComponent<PropsFromRedux> = (props) => {

    const Products = [...props.productList].sort((a, b) => String(a.createdAt) < String(b.createdAt) ? 1 : -1).map((el) => {
            return (
                <Grid key={el.id} item lg={6} xl={4} className={classes.productItem}>
                    <ProductItem itemName={el.itemName[0].value} itemNumber={el.itemNumber[0].value} stepNumber={el.stage}
                    addedAt={el.createdAt}/>
                </Grid>
            );
        }
    );

    useEffect(() => {
        props.getProductList();
    }, [])

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
                    <PlusSVG/>
                    <Typography color={'primary'} variant={'button'}>
                        Add product
                    </Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <Grid item className={classes.contentBox} container xs={12}>
                    <CustomAppBar value={value} setValue={setValue}>
                        <Tab label="Added" color={'primary'}/>
                        <CustomTooltip title="This will be available when you reach the 3 step">
                            <Tab label="Edited" color={'primary'}/>
                        </CustomTooltip>
                        <CustomTooltip title="This will be available when you reach the 7 step">
                            <Tab label="Sales" color={'primary'}/>
                        </CustomTooltip>
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
                                    variant={'h2'}
                                    style={{textTransform: 'uppercase'}}
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
                                <img src={ProductCat} alt={'image'}/>
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
                                    variant={'h2'}
                                    style={{textTransform: 'uppercase'}}
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
                                <img src={ProductCat} alt={'image'}/>
                            </Box>
                        </Grid>
                    </TabPanel>
                </Grid>
            </Box>
        </Grid>
    );
};

export default ProductPage;
