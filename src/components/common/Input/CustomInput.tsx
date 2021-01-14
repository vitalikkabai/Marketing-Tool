
import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import alert from "../../../assets/images/Error_outline.svg";

interface CustomInputProps {
	type?: string;
	onChange?: any;
	onBlur?: any;
	onFocus?: any;
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
	lable?: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {

	const useStyles = makeStyles({
		root: {
			display: "-webkit-box",
			'& .MuiOutlinedInput-root': {
				width: props.width,
				padding: 0,
				'& .MuiOutlinedInput-input': {
					height: 25,
					padding: 10,
					paddingLeft: 10,
				},
				'& fieldset': {
					borderRadius: 10,
					// padding: 0,
					// paddingLeft: 10,
					borderColor: props.color,
					borderWidth: 1,
				},
				'& input': {
					borderRadius: 10,
					height: 25,
				},

			},
			'& .PrivateNotchedOutline-legendLabelled-11': {
				'& span': {
					paddingRight: 0,
					paddingLeft: 5,
				}
			},
			//MuiFormControl-root MuiTextField-root makeStyles-root-669

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
				padding: "0",
				height: "100%",
			},
			'& .Mui-error': {
				'&:after': {
					position: "absolute",
					content: "url(" + alert + ")",
					right: "-30px"
				},
			},
		},
		label: {
			textTransform: 'capitalize',
		},
	});

	const classes = useStyles();

	return <TextField error={props.error}
		key={props.PassKey}
		type={props.type}
		helperText={props.helperText}
		placeholder={props.placeholder}
		fullWidth={props.fullWidth}
		variant={"outlined"}
		label={props.lable}
		inputProps={{
			style: {
				background: "white",
				fontFamily: 'liberation-sans',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: '16px',
				lineHeight: '150%',
			}
		}}
		classes={{
			root: classes.root
		}}
		onChange={props.onChange}
		onBlur={props.onBlur}
		onFocus={props.onFocus}
		value={props.value} />
}

export default CustomInput;