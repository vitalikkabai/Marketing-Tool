/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CreateMessageInput, CreateProfileInput, Stage } from "../../API";

export const openDialogue = (stage: Stage, subjectID: string, interlocutor: CreateProfileInput) => ({
    type: 'OPEN_DIALOGUE' as const,
    payload: {stage, subjectID, interlocutor}
});

export const openDialogueSuccess = (dialogue: CreateMessageInput[]) => ({
    type: 'OPEN_DIALOGUE_SUCCESS' as const,
    payload: dialogue
});

export const openDialogueFailure = () => ({
    type: 'OPEN_DIALOGUE_FAILURE' as const
});

export const sendMessage = (message: CreateMessageInput) => ({
    type: 'SEND_MESSAGE' as const,
    payload: message
});

export const sendMessageSuccess = (message: CreateMessageInput) => ({
    type: 'SEND_MESSAGE_SUCCESS' as const,
    payload: message
});

export const sendMessageFailure = () => ({
    type: 'SEND_MESSAGE_FAILURE' as const,
});

export const fetchLastMessages = () => ({
    type: 'FETCH_LAST_MESSAGES' as const,
});

export const fetchLastMessagesSuccess = (messages: CreateMessageInput[]) => ({
    type: 'FETCH_LAST_MESSAGES_SUCCESS' as const,
    payload: messages
});

export const fetchLastMessagesFailure = () => ({
    type: 'FETCH_LAST_MESSAGES_FAILURE' as const,
});

export const setInterlocutor = (interlocutor: CreateProfileInput) => ({
    type: 'SET_INTERLOCUTOR' as const,
    payload: interlocutor
});

export const subscribeOnNewMessages = (receiverID: string) => ({
    type: 'SUBSCRIBE_ON_MESSAGES' as const,
    payload: receiverID
});

export const getRecentMessage = (message: CreateMessageInput) => ({
    type: 'GET_RECENT_MESSAGE' as const,
    payload: message
});

