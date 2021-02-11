import { Box, Grid } from '@material-ui/core';
import React from 'react';
import ManagersSideBarMenu from '../../components/ManagersSideBarMenu/ManagersSideBarMenu';
import TopBarContainer from '../../components/TopBar/TopBarContainer';
import classes from './MarketingToolPageContainer.module.scss';

const ManagerPageBase: React.FunctionComponent = () => {
    return (
        <Box className={classes.wrapper}>
            <ManagersSideBarMenu />
            <Box className={classes.marketingContainer}>
                <TopBarContainer />
                <Grid container className={classes.contentContainer}>
                    <Grid xs={12} xl={12} item className={classes.content}>
                        {/* <Switch>
							<Route path={'/'} exact component={UserDashboard} />
							<Route path={'/personal-profile'} exact component={PersonalProfileContainer} />
							<Route path={'/business-profile'} component={BusinessProfileContainer} />
							<Route path={'/products'} exact component={ProductPageContainer}/>
							<Route path={'/products/add-new-product'} exact component={AddProductContainer}/>
							<Route path={'/market-research'} exact component={H1} />
							<Route path={'/brand-creation'} exact component={H1} />
							<Route path={'/sales-channels'} exact component={H1} />
							<Route path={'/customer-support'} exact component={H1} />
							<Route path={'/brand-awareness'} exact component={H1} />
							<Route path={'/sales-statistics'} exact component={H1} />
							<Route path={'/improvements'} exact component={H1} />
						</Switch> */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ManagerPageBase;
