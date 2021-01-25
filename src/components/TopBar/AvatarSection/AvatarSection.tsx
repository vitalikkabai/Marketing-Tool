import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { Profile } from "../../../models";
import { signOut } from "../../../store/Auth/AuthActions";
import { AppStateType } from "../../../store/store";
import { getS3ObjectSrc } from "../../../utils/profile/profile";
import classes from "./AvatarSection.module.scss";
import {useHistory} from "react-router";


const AvatarSection: React.FunctionComponent<{ profile: Profile, signOut: () => void }> = (props) => {

    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);

    // const handleClose = (event: React.MouseEvent<EventTarget>) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
    //         return;
    //     }

    //     setOpen(false);
    // };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const writeInitials = ():string => {
        if (props.profile.avatar) return "";
        const nameWords = props.profile.name.split(" ");
        let initials = ""
        if (nameWords.length > 1) {
            initials = (nameWords[0].charAt(0)).concat(nameWords[1].charAt(0)).toUpperCase()
        } else {
            initials = nameWords[0].charAt(0).toUpperCase();
        }
        return initials;
    }
    return (
        <>
        <div ref={anchorRef}           onClick={handleToggle}>
            {
                props.profile.avatar
                ? <Avatar alt="avatar" src={getS3ObjectSrc(props.profile.avatar)}/>
                : <Avatar className={classes.InitialsAvatar}>{writeInitials()}</Avatar>

            }

        </div>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                    <MenuItem onClick={() => setOpen(false)}>Business Profile</MenuItem>
                                    <MenuItem onClick={() => {
                                      history.push("personal-profile");
                                      setOpen(false)
                                  }}>Personal Profile</MenuItem>
                                    <MenuItem onClick={() => setOpen(false)}>Staff Accounts</MenuItem>
                                    <MenuItem onClick={()=>props.signOut()}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            <Typography>Hi, {props.profile.name}</Typography>
        </>
    );
}


export default AvatarSection;