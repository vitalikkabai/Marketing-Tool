import React from 'react'
import classes from './Message.module.scss'
import {Box, Typography} from "@material-ui/core";
import avatar from "../../../assets/images/avatar.png"
import avatar2 from "../../../assets/images/Teammate3.svg"
import moment from "moment";
import { MessageStatus } from '../../../API';

interface PropTypes {
    senderId?: string | null
    userId?: string | null
    senderName?: string
    message?: string
    time?: string | null
    nextDay?: boolean
    avatarPublicURL: string
    status: MessageStatus
}

const Message: React.FC<PropTypes> = (props) => {
    return (
        <Box className={classes.bubbleWrapper}>
            {props.nextDay &&
            <Typography align={"center"} className={classes.nextDayText}>
                {moment(props.time).format("DD.MM.YYYY")}
            </Typography>}
            <div className={props.senderId !== props.userId ? classes.recipientContainer : classes.senderContainer}>
                <img src={props.avatarPublicURL}
                     alt='Avatar'/>
                <div className={classes.bubble}>
                    <div className={classes.messageInfoBox}>
                        <Typography className={classes.senderName}>{props.senderName}</Typography>
                    </div>
                    <div>
                        <Typography variant={"subtitle1"} className={classes.message}>{props.message}</Typography>
                        <Typography variant={"caption"} className={classes.message}>{props.status}</Typography>

                    </div>
                    <div className={classes.messageTime}>
                        <Typography variant={"caption"}>{moment(props.time).format("HH:mm")}</Typography>
                    </div>
                </div>
            </div>
        </Box>
    )
}

/*<h3>{props.senderName}</h3> <img src={props.senderId !== props.userId ? props.recipient.photos.small : avatar}
                                            alt='Avatar'/>*/

export default Message