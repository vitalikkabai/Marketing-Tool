import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as Visibility } from "../../../assets/images/eye.svg";
import { ReactComponent as VisibilityOff } from "../../../assets/images/eyeOff.svg";

interface CustomInputProps {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value?: string;
  color?: string;
  width?: number;
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  PassKey?: string;
  fontSize?: string;
  required?: boolean;
  variant?: string;
  autoFocus?: boolean;
  label?: string;
  margin?: string;
  paddingRight?: number;
  isShowPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const useStyles = makeStyles({
    root: {

      '& .MuiOutlinedInput-root': {
        margin: props.margin,
        width: props.width,
        padding: 0,
        '& .MuiOutlinedInput-input': {
          paddingLeft: 10,
          paddingRight: props.paddingRight,
        },
        '& fieldset': {
          borderRadius: 10,
          borderColor: props.error ? "#F44336" : props.value ? "#4285F4" : props.color,
          borderWidth: props.value ? 1 : 1,
        },
        '& input': {
          borderRadius: 10,
          height: 45,
          padding: 0,
        },
        '& label': {
          color: props.error ? "#F44336" : props.value ? "#4285F4" : props.color,
        },
      },
      '& .MuiInputLabel-outlined': {
        fontFamily: 'liberation-sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '150%',
        top: '-9px',
        color: props.error ? "#F44336" : props.value ? "#4285F4" : props.color,
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -2px) scale(0.75)'
      },
      '& .PrivateNotchedOutline-legendLabelled-11': {
        '& span': {
          paddingRight: 5,
          fontFamily: 'liberation-sans',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '12px',
          lineHeight: '150%',
          color: '#9E9E9E',
        }
      },

      '& .MuiFormHelperText-contained': {
        position: "absolute",
        bottom: "-20px",
        marginLeft: "0",
        '&:after': {
          content: "''",
        },
        "@media (max-width:960px)": {
          position: "absolute",
        }
      },

      '&.MuiOutlinedInput-input': {
        paddingLeft: "35px"
      },
      '& .Mui-error': {
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  });


  const classes = useStyles();

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return <TextField error={props.error}
    key={props.PassKey}
    type={props.name === "password" ? (isShowPassword ? "text" : "password") : props.type}
    helperText={props.helperText}
    fullWidth={props.fullWidth}
    variant={"outlined"}
    label={props.label}
    autoFocus={props.autoFocus}
    required={props.required}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          {props.name === "password" &&
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {isShowPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>}

        </ InputAdornment>
      ),
      style: {
        background: "white",
        fontFamily: 'liberation-sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '150%',
      }
    }}
    // InputLabelProps={{
    // 	style: {
    // 		color: "red",
    // 	}
    // }}
    classes={{
      root: classes.root
    }}
    onChange={props.onChange}
    value={props.value} />
}

export default CustomInput;