import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import Chat from './Chat';
import { CreateMessageInput, Stage } from '../../API';
import { clearDialogue, setDialogueSubject, sendMessage } from '../../store/Message/MessageActions';
import { FunctionComponent } from 'react';
import { MakeActiveDialogue } from '../../store/Message/MessageReducer';

const ChatContainer: FunctionComponent<ChatProps> = (props) => {

    useEffect(() => {
        // if (props.thisProfile.id && props.interlocutor.id) {
            props.setDialogueSubject(Stage.UNASSIGNED, 'default');
        // }
        return () => {props.clearDialogue()}
    }, [])
    return (
        <Chat
            {...props}
            backGroundColor={props.backGroundColor}
        />
    );
};

const mapStateToProps = (state: AppStateType) => {
    const getActiveDialogue = MakeActiveDialogue()
    return {
        messages: getActiveDialogue(state.MessageReducer).messages,
        thisProfile: state.ProfileReducer.profile,
        avatarURL: state.ProfileReducer.avatarURL,
        interlocutor: state.MessageReducer.interlocutor,
        interlocutorAvatarURL: state.MessageReducer.interlocutorAvatarURL
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (message: CreateMessageInput) =>
            dispatch(sendMessage(message)),
        setDialogueSubject: (stage: Stage, productID: string) =>
            dispatch(setDialogueSubject(stage, productID)),
        clearDialogue: () => dispatch(clearDialogue())
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
    backGroundColor?: string;
};

export type ChatProps = ConnectedProps<typeof connector> & OwnProps;

// export default 
export default connector(ChatContainer);
