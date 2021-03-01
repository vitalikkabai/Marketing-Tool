import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import classes from './AvatarSection.module.scss';
import { useHistory } from 'react-router';
import { CreateProfileInput } from '../../../API';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { useTheme } from '@material-ui/core';

const AvatarSection: React.FunctionComponent<{
    setDialogueSubject: Dispatch<SetStateAction<boolean>>;
    profile: CreateProfileInput;
    avatarURL: string;
    signOut: () => void;
    userAttributes: { userID: string, occupation: number };
}> = (props) => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const theme = useTheme();

    // const handleClose = (event: React.MouseEvent<EventTarget>) => {
    //     if (
    //         anchorRef.current &&
    //         anchorRef.current.contains(event.target as HTMLElement)
    //     ) {
    //         return;
    //     }
    //
    //     setOpen(false);
    // };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const writeInitials = (): string => {
        if (props.profile.avatar) return '';
        const nameWords = props.profile.name.split(' ');
        let initials: string;
        if (nameWords.length > 1) {
            initials = nameWords[0]
                .charAt(0)
                .concat(nameWords[1].charAt(0))
                .toUpperCase();
        } else {
            initials = nameWords[0].charAt(0).toUpperCase();
        }
        return initials;
    };

    return (
        <Box className={classes.avatarSectionContainer}>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: 10 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener
                                onClickAway={() => setOpen(false)}
                            >
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    className={classes.menu}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            history.push('/business-profile');
                                            setOpen(false);
                                        }}
                                    >
                                        Business Profile
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            history.push('/personal-profile');
                                            setOpen(false);
                                        }}
                                    >
                                        Personal Profile
                                    </MenuItem>
                                    <MenuItem onClick={() => setOpen(false)}>
                                        Staff Accounts
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => props.setDialogueSubject(true)}
                                        style={{ color: '#9E9E9E' }}
                                    >
                                        Log Out
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            <Box className={classes.avatarBox} onClick={handleToggle}>
                <Typography
                    variant={'subtitle2'}
                    color={'primary'}
                    className={classes.greetingText}
                >
                    Hi, {props.profile.name}
                </Typography>
                <div ref={anchorRef}>
                    {props.profile.avatar ? (
                        <Avatar alt="avatar" src={props.avatarURL} />
                    ) : (
                        <Avatar
                            style={{
                                backgroundColor: theme.palette.primary.main,
                            }}
                        >
                            <Typography
                                variant={'subtitle2'}
                                className={classes.imageText}
                            >
                                {writeInitials()}
                            </Typography>
                        </Avatar>
                    )}
                </div>
            </Box>
        </Box>
    );
};

export default AvatarSection;
