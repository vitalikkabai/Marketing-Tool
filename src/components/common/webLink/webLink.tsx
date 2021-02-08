import React from "react";
import CustomInput from "../Input/CustomInput";
import {Box, Chip} from "@material-ui/core";
import classes from "./webLink.module.scss";
import plusIcon from "../../../assets/images/formPlus.svg";
import {isValidUrl} from "../../../utils/validators/validators";

type PropsType = {
    linkInput: string;
    setLinkInput: React.Dispatch<React.SetStateAction<string>>
    linkURLs: string[]
    setLinkURLs:   React.Dispatch<React.SetStateAction<string[]>>
    linkErrorText: string
    setLinkErrorText: React.Dispatch<React.SetStateAction<string>>
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>
}


const WebLink: React.FunctionComponent<PropsType> = (props) => {

    return (
        <Box className={classes.linkBox}>
            <CustomInput
                type="text"
                fullWidth={true}
                name="Website URL address"
                placeholder="Website URL address"
                label="Website URL address"
                value={props.linkInput}
                error={!!props.linkErrorText}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                    props.setLinkErrorText("");
                    if(props.setEdited) props.setEdited(false);
                    props.setLinkInput(event.target.value);
                }
                }
                paddingRight={35}
                autoFocus={true}
            />
            {
                props.linkURLs.map((URL, index) => (
                    <Chip key={index} className={classes.chip} label={URL} onDelete={() => {
                        props.setLinkURLs(props.linkURLs.filter(((item, i) => i !== index)))
                    }} color="primary" variant="outlined"/>
                ))
            }
            <img className={classes.plusIcon} src={plusIcon} alt={"plus"}
                 onClick={() => {
                     if (isValidUrl(props.linkInput)) {
                         props.setLinkURLs(oldArray => [...oldArray, props.linkInput]);
                         props.setLinkInput("");
                     } else {
                         props.setLinkErrorText("Please enter valid URL")
                     }
            }}/>
        </Box>
    );
}

export default WebLink;