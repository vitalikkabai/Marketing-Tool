import React from 'react';
import {Box, Dialog, DialogContent, Typography} from '@material-ui/core';
import {ReactComponent as TrashIcon} from "../../../assets/images/trash.svg";
import CustomButton from "../Button/CustomButton";
import classes from "./CustomDialog.module.scss";
import LogOutConfirmIcon from "../LogOutConfirmIcon/LogOutConfirmIcon";
import { useTheme } from '@material-ui/core/styles';

type CustomDialogProps = {
    text: string,
    iconType: "logout" | "delete",
    isOpen: boolean,
    closeDialog: () => void,
    confirmButtonClick: () => void
};

const imageSrc = (iconType: string, color: string) => {
    switch (iconType) {
        case "logout":
            return <LogOutConfirmIcon color={color} />;
        case "delete":
            return <TrashIcon fill={color} />;
        default:
            return "";
    }
}

const CustomDialog: React.FC<any> = (props: CustomDialogProps) => {
    const theme = useTheme();
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
                    { imageSrc(props.iconType, theme.palette.primary.main) }
                </Box>

                <Box className={classes.buttonBox}>
                    <CustomButton
                        type="button"
                        onClick={() => {
                            props.closeDialog()
                        }}
                        text="NO"
                    />
                    <CustomButton
                        type="button"
                        onClick={() => {
                            props.confirmButtonClick();
                            props.closeDialog();
                        }}
                        inverted={props.iconType === "delete" || props.iconType === "logout"}
                        text="YES"
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CustomDialog;
