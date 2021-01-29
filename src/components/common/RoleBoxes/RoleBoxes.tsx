import classes from "./RoleBoxes.module.scss"
import {Box, Grid, Typography} from "@material-ui/core";
import {ReactComponent as SaleRoleIcon} from "../../../assets/images/roles/saleRoleIcon.svg";
import {ReactComponent as MarketingRoleIcon} from "../../../assets/images/roles/marketingRoleIcon.svg";
import {ReactComponent as LogisticsRoleIcon} from "../../../assets/images/roles/logisticRoleIcon.svg";
import {ReactComponent as AccountingRoleIcon} from "../../../assets/images/roles/accountingRoleIcon.svg";
import {ReactComponent as ProductionRoleIcon} from "../../../assets/images/roles/productionRoleIcon.svg";
import {ReactComponent as QcRoleIcon} from "../../../assets/images/roles/qcRoleIcon.svg";
import React from "react";

type PropsType = {
    selectedRole: boolean[];
    setSelectedRole: React.Dispatch<React.SetStateAction<boolean[]>>;
    displayInRow?: boolean
}

const RoleBoxes: React.FC<PropsType> = ({selectedRole, setSelectedRole, displayInRow}) => {

    return (
        <Grid container justify={"center"}>
            <Grid item className={classes.roleGridItem} xs={displayInRow? 6 : 12} style={displayInRow?{paddingBottom: "0"}:{paddingBottom: "24px"}}>
                <Box
                    className={selectedRole[0] ? classes.roleContainer + " " + classes.role1Hover
                        : classes.roleContainer + " " + classes.role1Hover}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 0 ? !elem : elem));
                    }}>
                    <Box
                        className={selectedRole[0] ? classes.roleBox1Active : classes.roleBox}>
                        <SaleRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>Sales</Typography>
                </Box>
                <Box
                    className={selectedRole[1] ? classes.roleContainer + " " + classes.role2Hover
                        : classes.roleContainer + " " + classes.role2Hover}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 1 ? !elem : elem));
                    }}
                    style={{margin: "0 24px"}}>
                    <Box
                        className={selectedRole[1] ? classes.roleBox2Active : classes.roleBox}
                    >
                        <MarketingRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>Marketing</Typography>
                </Box>
                <Box
                    className={selectedRole[2] ? classes.roleContainer + " " + classes.role3Hover
                        : classes.roleContainer + " " + classes.role3Hover}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 2 ? !elem : elem));
                    }}>
                    <Box
                        className={selectedRole[2] ? classes.roleBox3Active : classes.roleBox}>
                        <LogisticsRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>Logistics</Typography>
                </Box>
            </Grid>
            <Grid item className={classes.roleGridItem} xs={displayInRow? 6 : 12}>
                <Box
                    className={selectedRole[3] ? classes.roleContainer + " " + classes.role4Hover
                        : classes.roleContainer + " " + classes.role4Hover}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 3 ? !elem : elem));
                    }}
                    style={displayInRow?{marginLeft: "24px"}:{marginLeft: "0"}}>
                    <Box
                        className={selectedRole[3] ? classes.roleBox4Active : classes.roleBox}>
                        <AccountingRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>Accounting</Typography>
                </Box>
                <Box
                    className={selectedRole[4] ? classes.roleContainer + " " + classes.role5Hover
                        : classes.roleContainer + " " + classes.role5Hover}
                    style={{margin: "0 24px"}}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 4 ? !elem : elem));
                    }}>
                    <Box
                        className={selectedRole[4] ? classes.roleBox5Active : classes.roleBox}>
                        <ProductionRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>Production</Typography>
                </Box>
                <Box
                    className={selectedRole[5] ? classes.roleContainer + " " + classes.role6Hover
                        : classes.roleContainer + " " + classes.role6Hover}
                    onClick={() => {
                        setSelectedRole(roles => roles.map((elem, index) => index === 5 ? !elem : elem));
                    }}>
                    <Box
                        className={selectedRole[5] ? classes.roleBox6Active : classes.roleBox}>
                        <QcRoleIcon/>
                    </Box>
                    <Typography variant={"h6"} align={"center"}
                                className={classes.roleTitle}>QC</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RoleBoxes;