import React from "react"
import {Box, Typography} from "@material-ui/core";
import classes from "./ProductItem.module.scss";
import StepBadge from "../../common/Badge/StepBadge/StepBadge";
import {ReactComponent as ProductIcon} from "../../../assets/images/cookie.svg";
import {Stage} from "../../../API";
import moment from "moment";

type PropsType = {
    itemName: string
    itemNumber: number
    stepNumber: Stage
    addedAt: string | null | undefined
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
                    <Typography variant={"subtitle1"} noWrap className={classes.itemValue}>{props.itemName}</Typography>
                </Box>
                <Box className={classes.itemNameBox} style={{marginTop: "8px"}}>
                    <Typography variant={"subtitle1"} className={classes.itemAttribute}>
                        Item number:</Typography>
                    <Typography variant={"subtitle1"} className={classes.itemValue}>{props.itemNumber}</Typography>
                </Box>
                <Box className={classes.itemNameBox} style={{marginTop: "8px"}}>
                    <Typography variant={"subtitle1"}
                                className={classes.itemAttribute}>Added:</Typography>
                    <Typography variant={"subtitle1"} className={classes.itemValue}>
                        {moment(props.addedAt).format("DD/MM/YYYY")}
                    </Typography>
                </Box>
                <Box className={classes.nextStepBox} style={{marginTop: "32px"}}>
                    <Typography variant={"h6"}
                                className={classes.itemAttribute}>Next step:</Typography>
                    <Box className={classes.badge}>
                        <StepBadge stepNumber={2}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductItem;