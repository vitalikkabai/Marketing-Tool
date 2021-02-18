/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Subscription } from 'rxjs';
import { CreateMessageInput, CreateProfileInput, Stage } from '../../API';
import { Dialogue } from './MessageReducer';

export const setDialogueSubject = (stage: Stage, subjectID: string) => ({
    type: 'SET_DIALOGUE_SUBJECT' as const,
    payload: { stage, subjectID },
});

export const clearDialogue = () => ({
    type: 'CLEAR_DIALOGUE' as const,
});

export const loadDialogue = () => ({
    type: 'LOAD_DIALOGUE' as const,
});


export const loadDialogueSuccess = (dialogue: Dialogue) => ({
    type: 'LOAD_DIALOGUE_SUCCESS' as const,
    payload: dialogue,
});

export const loadDialogueFailure = () => ({
    type: 'LOAD_DIALOGUE_FAILURE' as const,
});

export const sendMessage = (message: CreateMessageInput) => ({
    type: 'SEND_MESSAGE' as const,
    payload: message,
});

export const sendMessageSuccess = (message: CreateMessageInput) => ({
    type: 'SEND_MESSAGE_SUCCESS' as const,
    payload: message,
});

export const sendMessageFailure = () => ({
    type: 'SEND_MESSAGE_FAILURE' as const,
});

export const fetchLastMessages = () => ({
    type: 'FETCH_LAST_MESSAGES' as const,
});

export const fetchLastMessagesSuccess = (messages: CreateMessageInput[]) => ({
    type: 'FETCH_LAST_MESSAGES_SUCCESS' as const,
    payload: messages,
});

export const fetchLastMessagesFailure = () => ({
    type: 'FETCH_LAST_MESSAGES_FAILURE' as const,
});

export const setInterlocutor = (interlocutor: CreateProfileInput) => ({
    type: 'SET_INTERLOCUTOR' as const,
    payload: interlocutor,
});

export const setSharedID = (sharedID: string) => ({
    type: 'SET_SHARED_ID' as const,
    payload: sharedID,
});

export const createDialogue = (dialogue: Dialogue) => ({
    type: 'CREATE_DIALOGUE' as const,
    payload: dialogue,
});

export const subscribeOnMessageCreated = () => ({
    type: 'SUBSCRIBE_ON_MESSAGES_CREATED' as const,
});

export const subscribeOnMessageCreatedSuccess = (subscription: Subscription) => ({
    type: 'SUBSCRIBE_ON_MESSAGES_CREATED_SUCCESS' as const,
    payload: subscription,
});

export const unsubscribeOnMessageCreated = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_CREATED' as const,
});

export const unsubscribeOnMessageCreatedSuccess = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_CREATED_SUCCESS' as const,
});

export const unsubscribeOnMessageCreatedFailure = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_CREATED_FAILURE' as const,
});

export const subscribeOnMessageUpdated = () => ({
    type: 'SUBSCRIBE_ON_MESSAGE_UPDATED' as const,
});

export const subscribeOnMessageUpdatedSuccess = (subscription: Subscription) => ({
    type: 'SUBSCRIBE_ON_MESSAGE_UPDATED_SUCCESS' as const,
    payload: subscription,
});

export const unsubscribeOnMessageUpdated = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_UPDATED' as const,
});

export const unsubscribeOnMessageUpdatedSuccess = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_UPDATED_SUCCESS' as const,
});

export const unsubscribeOnMessageUpdatedFailure = () => ({
    type: 'UNSUBSCRIBE_ON_MESSAGES_UPDATED_FAILURE' as const,
});

export const subscribeOnMessageUpdatedFailure = () => ({
    type: 'SUBSCRIBE_ON_MESSAGES_UPDATED_FAILURE' as const,
});

// export const subscribeOnUpdatedMessages = (receiverID: string) => ({
//     type: 'SUBSCRIBE_ON_MESSAGES_UPDATED' as const,
//     payload: receiverID
// });

export const getUpdatedMessage = (message: CreateMessageInput) => ({
    type: 'GET_UPDATED_MESSAGE' as const,
    payload: message,
});

export const updateMessageAction = (message: CreateMessageInput) => ({
    type: 'UPDATE_MESSAGE' as const,
    payload: message,
});

export const updateMessageSuccess = () => ({
    type: 'UPDATE_MESSAGE_SUCCESS' as const,
});

export const getRecentMessage = (message: CreateMessageInput) => ({
    type: 'GET_RECENT_MESSAGE' as const,
    payload: message,
});

export const setInterlocutorAvatarUrl = (avatarUrl: string) => ({
    type: 'SET_INTERLOCUTOR_AVATAR_URL' as const,
    payload: avatarUrl,
});

export const setInterlocutorAvatarUrlFailure = () => ({
    type: 'SET_INTERLOCUTOR_AVATAR_URL_FAILURE' as const,
});
