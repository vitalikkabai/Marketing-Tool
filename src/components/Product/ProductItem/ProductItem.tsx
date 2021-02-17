import React from "react"
import {Box, Typography} from "@material-ui/core";
import classes from "./ProductItem.module.scss";
import StepBadge from "../../common/Badge/StepBadge/StepBadge";
import {ReactComponent as ProductIcon} from "../../../assets/images/cookie.svg";

type PropsType = {
    itemName: string
    itemNumber: number
    stepNumber: number
    className?: string;
};

const ProductItem: React.FC<PropsType> = (props) => {

    return (
        <Box className={classes.productItemBox}>
            <Box className={classes.imageSection}>
                <Box className={classes.imagePlace}>
                    <ProductIcon/>
                </Box>
            </Box>
            <Box className={classes.informationSection}>
                <Box className={classes.itemNameBox}>
                    <Typography variant={"subtitle1"} className={classes.itemAttribute}>Item name:</Typography>
                    <Typography variant={"subtitle1"}>{props.itemName}</Typography>
                </Box>
                <Box className={classes.itemNameBox} style={{marginTop: "8px"}}>
                    <Typography variant={"subtitle1"} className={classes.itemAttribute}>
                        Item number:</Typography>
                    <Typography variant={"subtitle1"}>{props.itemNumber}</Typography>
                </Box>
                <Box className={classes.itemNameBox} style={{marginTop: "8px"}}>
                    <Typography variant={"subtitle1"}
                                className={classes.itemAttribute}>Added:</Typography>
                    <Typography variant={"subtitle1"}>07/08/21</Typography>
                </Box>
                <Box className={classes.nextStepBox} style={{marginTop: "32px"}}>
                    <Typography variant={"h6"}
                                className={classes.itemAttribute}>Next step:</Typography>
                    <Box className={classes.badge}>
                        <StepBadge stepNumber={props.stepNumber}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductItem;