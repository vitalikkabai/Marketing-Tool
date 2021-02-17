import React from 'react';
import classes from './Message.module.scss';
import { Box, makeStyles, Typography, useTheme } from '@material-ui/core';
import moment from 'moment';
import { MessageStatus } from '../../../API';
import Avatar from '@material-ui/core/Avatar';
import { ReactComponent as CheckMark } from '../../../assets/images/checkMark.svg';

interface PropTypes {
    senderId?: string | null;
    userId?: string | null;
    senderName: string;
    message?: string;
    time?: string | null;
    nextDay?: boolean;
    avatarPublicURL: string;
    status: MessageStatus;
}

const Message: React.FC<PropTypes> = (props) => {
    const writeInitials = (): string => {
        const nameWords = props.senderName.split(' ');
        let initials = '';
        if (nameWords.length > 1) {
            initials = nameWords[0].charAt(0).concat(nameWords[1].charAt(0)).toUpperCase();
        } else {
            initials = nameWords[0].charAt(0).toUpperCase();
        }
        return initials;
    };

    const theme = useTheme();
    const useStyles = makeStyles({
        sentCheck: {
            '& path': {
                fill: '#9E9E9E',
            },
        },
        receivedCheck: {
            '& path': {
                fill: theme.palette.primary.main,
            },
        },
    });

    const styles = useStyles();

    return (
        <Box className={classes.bubbleWrapper}>
            {props.nextDay && (
                <Typography align={'center'} className={classes.nextDayText}>
                    {moment(props.time).format('DD.MM.YYYY')}
                </Typography>
            )}
            <div
                className={
                    props.senderId !== props.userId
                        ? classes.senderContainer
                        : classes.recipientContainer
                }>
                {props.avatarPublicURL ? (
                    <Avatar alt="avatar" src={props.avatarPublicURL} />
                ) : (
                    <Avatar style={{ backgroundColor: theme.palette.primary.main }}>
                        <Typography variant={'subtitle2'} className={classes.imageText}>
                            {writeInitials()}
                        </Typography>
                    </Avatar>
                )}
                <div className={classes.bubble}>
                    {/*<div className={classes.messageInfoBox}>
                        <Typography className={classes.senderName}>{props.senderName}</Typography>
                    </div>*/}
                    <div>
                        <Typography variant={'subtitle1'} className={classes.message}>
                            {props.message}
                        </Typography>
                    </div>
                    <div className={classes.messageTime}>
                        <Typography variant={'caption'}>
                            {moment(props.time).format('HH:mm')}
                        </Typography>
                        {props.senderId === props.userId && (
                            <CheckMark
                                className={
                                    classes.checkSVG +
                                    ' ' +
                                    (props.status === 'RECEIVED'
                                        ? styles.receivedCheck
                                        : styles.sentCheck)
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </Box>
    );
};

/**/

/*<h3>{props.senderName}</h3> <img src={props.senderId !== props.userId ? props.recipient.photos.small : avatar}
                                            alt='Avatar'/>*/

export default Message;
