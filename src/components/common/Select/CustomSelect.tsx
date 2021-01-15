
import React from "react";
import {makeStyles, Select} from "@material-ui/core";

interface CustomInputProps {
    onChange?: any;
    value?: any;
    items: any
}

const CustomSelect: React.FC<CustomInputProps> = (props) => {

    const useStyles = makeStyles({
        root: {
            padding: "14px 14px",

            "&.MuiSelect-outlined.MuiSelect-outlined": {
                paddingRight: "75px",
            }
        }
    });

    const classes = useStyles();

    return <Select    classes={{
                          root: classes.root
                      }}
                      onChange={props.onChange}
                      value={props.value}>
        {props.items.map((item: any) => item)}

    </Select>
}

export default CustomSelect;