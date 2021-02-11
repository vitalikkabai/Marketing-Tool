import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import Chat from './Chat';
import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import { openDialogue, sendMessage } from '../../store/Message/MessageActions';
import { FunctionComponent } from 'react';

const ChatContainer: FunctionComponent<ChatProps> = (props) => {
    return (
        <Chat
            dialogue={props.dialogue}
            thisProfile={props.thisProfile}
            avatarURL={props.avatarURL}
            openDialogue={props.openDialogue}
            sendMessage={props.sendMessage}
            backGroundColor={props.backGroundColor}
        />
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogue: state.MessageReducer.dialogue,
        thisProfile: state.ProfileReducer.profile,
        avatarURL: state.ProfileReducer.avatarURL,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (message: CreateMessageInput) =>
            dispatch(sendMessage(message)),
        openDialogue: (stage: Stage, productID: string) =>
            dispatch(openDialogue(stage, productID)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type OwnProps = {
    backGroundColor?: string;
};

export type ChatProps = ConnectedProps<typeof connector> & OwnProps;

export default connector(ChatContainer);
