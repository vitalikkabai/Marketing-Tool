import React from 'react';
import CustomInput from '../Input/CustomInput';
import { Box, Chip } from '@material-ui/core';
import classes from './webLink.module.scss';
import plusIcon from '../../../assets/images/formPlus.svg';
import { isValidUrl } from '../../../utils/validators/validators';

type PropsType = {
    linkInput: string;
    setLinkInput: React.Dispatch<React.SetStateAction<string>>;
    linkURLs: string[];
    setLinkURLs: React.Dispatch<React.SetStateAction<string[]>>;
    linkErrorText?: string;
    setLinkErrorText?: React.Dispatch<React.SetStateAction<string>>;
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>;
    label: string;
    autoFocus?: boolean;
    name?: string
    error?: boolean
    onBlur?: {(e: React.FocusEvent<unknown>): void, <T=unknown>(fieldOrEvent: T): T extends string ? ((e: unknown) => void) : void}
};

const WebLink: React.FunctionComponent<PropsType> = (props) => {
    return (
        <Box className={classes.linkBox}>
            <CustomInput
                name={props.name}
                type="text"
                fullWidth={true}
                placeholder={props.label}
                label={props.label}
                value={props.linkInput}
                error={!!props.linkErrorText}
                helperText={props.linkErrorText}
                onChange={(
                    event: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                    >
                ) => {
                    props.setLinkErrorText && props.setLinkErrorText('');
                    if (props.setEdited) props.setEdited(false);
                    props.setLinkInput(event.target.value);
                }}
                onBlur={props.onBlur}
                paddingRight={35}
                autoFocus={props.autoFocus}
            />
            {props.linkURLs.map((URL, index) => (
                <Chip
                    key={index}
                    className={classes.chip}
                    label={URL}
                    onDelete={() => {
                        props.setLinkURLs(
                            props.linkURLs.filter((item, i) => i !== index)
                        );
                    }}
                    color="secondary"
                    variant="outlined"
                />
            ))}
            <img
                className={classes.plusIcon}
                src={plusIcon}
                alt={'plus'}
                onClick={() => {
                    if (isValidUrl(props.linkInput)) {
                        props.setLinkURLs([
                            ...props.linkURLs,
                            props.linkInput,
                        ]);
                        props.setLinkInput('');
                    } else {
                        props.setLinkErrorText && props.setLinkErrorText('Please enter valid URL');
                    }
                }}
            />
        </Box>
    );
};

export default WebLink;
