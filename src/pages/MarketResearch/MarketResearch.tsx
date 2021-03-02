import React from "react"
import {Box, Grid, Tab, Typography} from "@material-ui/core";
import classes from "./MarketResearch.module.scss";
import CustomAppBar from "../../components/common/TabPanel/CustomAppBar";
import TabPanel from "../../components/common/TabPanel/TabPanel";
import StepCounter from "../../components/common/StepCounter/StepCounter";
import BoredCat from "../../assets/images/Bored.svg";


const MarketResearch: React.FC<void> = () => {
    const [value, setValue] = React.useState(0);
    return (
     <Grid container className={classes.dashboard}>
         <Box className={classes.todoTitleBox}>
             <Grid item className={classes.titleBox}>
                 <Typography variant={'h2'}>Market Research</Typography>
             </Grid>
         </Box>
         <Box className={classes.contentContainer}>
             <Grid item className={classes.contentBox} container xs={12}>
                 <CustomAppBar value={value} setValue={setValue}>
                     <Tab label="Company" color={'primary'}/>
                     <Tab label="Product" color={'primary'}/>
                     <Tab label="Product" color={'primary'}/>
                 </CustomAppBar>

                 <TabPanel
                     className={classes.tabPanelBox}
                     index={1}
                     value={1}
                 >
                     <Grid item xs={12} className={classes.taskContainer}>
                         <Box
                             marginTop={'57px'}
                             textAlign={'center'}
                             className={classes.tasksTitle}
                         >
                             <Typography
                                 variant={'h2'}
                                 // style={{textTransform: 'uppercase'}}
                             >
                                 Previous steps not completed
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
                                 stepNumber={2}
                             />
                             <img src={BoredCat} alt={'image'}/>
                         </Box>
                     </Grid>
                 </TabPanel>
             </Grid>
         </Box>
     </Grid>
    )
}

export default MarketResearch;