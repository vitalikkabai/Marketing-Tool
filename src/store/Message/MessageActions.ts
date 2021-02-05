/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CreateMessageInput, CreateProfileInput } from "../../API";

export const sendNewMessage = (message: CreateMessageInput) => ({
    type: 'SEND_NEW_MESSAGE' as const,
    payload: message
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

