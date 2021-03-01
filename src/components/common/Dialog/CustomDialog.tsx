import React from 'react';
import {Box, Dialog, DialogContent, Typography} from '@material-ui/core';
import logOutIcon from "../../../assets/images/logOutConfirmIcon.svg";
import CustomButton from "../Button/CustomButton";
import classes from "./CustomDialog.module.scss";

type CustomDialogProps = {
    text: string,
    iconType: "logout",
    isOpen: boolean,
    closeDialog: () => void,
    confirmButtonClick: () => void
};

const imageSrc = (iconType: string) => {
    switch (iconType) {
        case "logout":
            return logOutIcon;
        default:
            return "";
    }
}

const CustomDialog: React.FC<any> = (props: CustomDialogProps) => {
    return (
        <Dialog
            open={props.isOpen}
            onClose={() => props.closeDialog()}
            BackdropProps={{
                classes: {
                    root: classes.backDrop,
                },
            }}>
            <DialogContent className={classes.logOutDialog}>
                <Typography variant="h3" align="center">
                    { props.text }
                </Typography>
                <Box className={classes.logOutImageBox}>
                    <img
                        src={imageSrc(props.iconType)}
                        alt="image"
                    />
                </Box>

                <Box className={classes.buttonBox}>
                    <CustomButton
                        color
                        type="button"
                        onClick={() => {
                            props.closeDialog()
                        }}
                        text="NO"
                    />
                    <CustomButton
                        color
                        type="button"
                        onClick={() => {
                            props.confirmButtonClick();
                        }}
                        text="YES"
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;
