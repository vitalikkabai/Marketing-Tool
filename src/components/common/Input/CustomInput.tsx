
import React from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
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
	label?: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {

	const useStyles = makeStyles({
		root: {
			display: "-webkit-box",
			'& .MuiOutlinedInput-root': {
				width: props.width,
				padding: 0,
				'& .MuiOutlinedInput-input': {
					paddingLeft: 10,
				},

				'& fieldset': {
					borderRadius: 10,
					borderColor: props.color,
					borderWidth: 1,
				},
				'& input': {
					borderRadius: 10,
					height: 45,
					padding: 0,
				},
			},
			'& .MuiInputLabel-outlined': {
				fontFamily: 'liberation-sans',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: '16px',
				lineHeight: '150%',
				top: '-7px',
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
		fullWidth={props.fullWidth}
		variant={"outlined"}
		label={props.label}
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
		// InputLabelProps={{
		// 	style: {
		// 		color: "red",
		// 	}
		// }}
		classes={{
			root: classes.root
		}}
		onChange={props.onChange}
		onBlur={props.onBlur}
		onFocus={props.onFocus}
		value={props.value} />
}

export default CustomInput;