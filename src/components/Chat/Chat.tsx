import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import classes from './Chat.module.scss';
import CustomInput from '../common/Input/CustomInput';
import CustomButton from '../common/Button/CustomButton';
import sendIcon from '../../assets/images/send.svg';
import Message from './Message/Message';
import moment from 'moment';
import { ChatProps } from './ChatContainer';
import { MessageStatus, Stage } from '../../API';
import { getSharedIndex } from '../../utils/backendUtils';
import { v4 as uuid } from 'uuid';

const Chat: FunctionComponent<ChatProps> = ({ ...props }) => {
    // let interlocutor: CreateProfileInput = {
    //     id: '0f580759-6129-423b-a2cd-55409f687b8d',
    //     email: 'def@ault.email',
    //     name: 'Chat Companion',
    //     avatar: {
    //         key:
    //             'images/0f580759-6129-423b-a2cd-55409f687b8d_1612521270019_avatar.png',
    //         bucket: 'mtbucket104149-dev',
    //         region: 'eu-central-1',
    //     },
    // };

    // if (props.thisProfile.id === '0f580759-6129-423b-a2cd-55409f687b8d') {
    //     interlocutor = {
    //         id: 'ea41c236-ae2c-44b7-b5ad-a9db1b48fbe4',
    //         email: 'asdf@asdf.asdfy',
    //         name: 'Default Name',
    //         avatar: {
    //             key:
    //                 'images/ea41c236-ae2c-44b7-b5ad-a9db1b48fbe4_1612520916079_avatar.png',
    //             bucket: 'mtbucket104149-dev',
    //             region: 'eu-central-1',
    //         },
    //     };
    // }

    const interlocutor = props.interlocutor ?? props.thisProfile;
    const thisProfile = props.thisProfile;
    // if (!interlocutor || !thisProfile.id) {
    //     return (
    //         <div>loading participants...</div>
    //     )
    // } else {
    const setMessageName = (senderID: string) => {
        if (senderID === props.thisProfile.id) {
            return props.thisProfile.name;
        }
        return interlocutor.name;
    };

    const setMessageAvatarURL = (senderID: string) => {
        if (senderID === props.thisProfile.id) {
            return props.avatarURL || '';
        }
        return props.interlocutorAvatarURL || '';
    };

    // const [baseTexts, setBaseText] = useState(props.dialogue);
    const Messages = props.messages.map((el, index, array) => {
        return (
            <Message
                key={index}
                message={el.content}
                senderName={setMessageName(el.senderID)}
                senderId={el.senderID}
                userId={props.thisProfile.id}
                time={el.createdAt}
                nextDay={
                    !(
                        index > 0 &&
                        moment(el.createdAt).isSame(moment(array[index - 1].createdAt), 'day')
                    )
                }
                avatarPublicURL={setMessageAvatarURL(el.senderID)}
                status={el.status}
            />
        );
    });

    const [inputValue, setInputValue] = useState('');
    // const [searchInputValue, setSearchInputValue] = useState('');
    const scrollRef = useRef(document.createElement('div'));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!thisProfile.id || !interlocutor.id) throw 'id undefined';
        props.sendMessage({
            id: uuid(),
            senderID: thisProfile.id,
            stage: Stage.UNASSIGNED,
            subjectID: 'default',
            receiverID: interlocutor.id,
            sharedID: getSharedIndex(thisProfile.id, interlocutor.id),
            content: inputValue,
            status: MessageStatus.CREATED,
        });
        // setBaseText((oldArray) => [...oldArray, {
        //     id: String(Math.random() * 1000),
        //     body: inputValue,
        //     addedAt: Date.now(),
        //     senderId: 9342,
        //     senderName: "You",
        //     recipientId: 9763,
        // }]);
        setInputValue('');
    };

    useEffect(() => {
        //Auto scrolling to bottom on messages obj update
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [props.messages]);

    useEffect(() => {
        //Auto scrolling to bottom on messages obj update
    }, [props.thisProfile]);

    return (
        <Box className={classes.mainContainer}>
            <Grid
                container
                justify={'center'}
                alignItems={'center'}
                direction={'column'}
                className={classes.chatContainer}>
                <Grid
                    item
                    className={classes.searchInputGrid}
                    style={{ background: props.backGroundColor }}>
                    <CustomInput
                        fullWidth
                        placeholder={'search...'}
                        onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                        ) => setInputValue(event.target.value)}
                    />
                </Grid>
                <Grid
                    item
                    className={classes.messagesBox}
                    style={{ background: props.backGroundColor }}>
                    {Messages}
                    <div ref={scrollRef} />
                </Grid>
                <Grid item className={classes.chatInputGrid}>
                    <form className={classes.chatInputBox} onSubmit={handleSubmit}>
                        <CustomInput
                            fullWidth
                            placeholder={'Message Here'}
                            value={inputValue}
                            onChange={(
                                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                            ) => setInputValue(event.target.value)}
                        />
                        <CustomButton
                            type={'submit'}
                            text={<img src={sendIcon} alt={'send'} />}
                            width={'40px'}
                            borderRadius={'10px'}
                            disabled={!inputValue}
                        />
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
    // }
};

export default Chat;
