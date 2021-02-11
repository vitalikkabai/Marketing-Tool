import {
    UpdateMessageInput,
    OnUpdateMessageSubscriptionVariables,
} from './../../API';
import { createMessage, updateMessage } from './../../graphql/mutations';

import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    sendMessageSuccess,
    sendMessageFailure,
    openDialogueSuccess,
    openDialogueFailure,
    getRecentMessage,
    getUpdatedMessage,
    updateMessageAction,
    updateMessageSuccess,
    subscribeOnMessageCreated,
    subscribeOnMessageUpdated,
} from './MessageActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation } from 'aws-amplify';
import { combineLatest, from } from 'rxjs';
import { getConversation, getDialogue } from '../../graphql/queries';
import {
    CreateMessageInput,
    GetConversationQueryVariables,
    GetDialogueQueryVariables,
    MessageStatus,
} from '../../API';
import { getSharedIndex } from '../../utils/backendUtils';
import { onCreateMessage, onUpdateMessage } from '../../graphql/subscriptions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) =>
        action$.pipe(
            ofType('SEND_MESSAGE'),
            mergeMap((action: any) => {
                const message: CreateMessageInput = { ...action.payload };
                message.sharedID = getSharedIndex(
                    message.senderID,
                    message.receiverID
                );
                message.status = MessageStatus.SENT;
                return from(
                    (API.graphql(
                        graphqlOperation(createMessage, { input: message })
                    ) as unknown) as Promise<any>
                ).pipe(
                    map((res) => {
                        return sendMessageSuccess(res.data.createMessage);
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [sendMessageFailure()];
                    })
                );
            })
        ),
    (action$, state$) =>
        action$.pipe(
            ofType('OPEN_DIALOGUE'),
            mergeMap((action: any) => {
                const userID = state$.value.ProfileReducer.profile.id;
                const interlocutorID =
                    state$.value.MessageReducer.interlocutor.id;
                if (!userID || !interlocutorID) {
                    return [openDialogueFailure()];
                }
                const params: GetConversationQueryVariables = {
                    sharedID: getSharedIndex(userID, interlocutorID),
                    subjectIDStageCreatedAt: {
                        beginsWith: {
                            stage: action.payload.stage,
                            subjectID: action.payload.subjectID,
                        },
                    },
                };
                return from(
                    (API.graphql(
                        graphqlOperation(getConversation, params)
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        const messages: CreateMessageInput[] =
                            res.data.getConversation.items;
                        const updateMessageActions: ActionTypes[] = [];
                        messages.forEach((message) => {
                            if (
                                message.receiverID ===
                                    state$.value.ProfileReducer.profile.id &&
                                message.status === MessageStatus.SENT
                            ) {
                                message.status = MessageStatus.RECEIVED;
                                updateMessageActions.push(
                                    updateMessageAction(message)
                                );
                            }
                        });

                        return [
                            subscribeOnMessageCreated(),
                            subscribeOnMessageUpdated(),
                            openDialogueSuccess(res.data.getConversation.items),
                            ...updateMessageActions,
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [openDialogueFailure()];
                    })
                );
            })
        ),
    (action$, state$) =>
        action$.pipe(
            ofType('SUBSCRIBE_ON_MESSAGES_CREATED'),
            mergeMap(() => {
                return from(
                    (API.graphql(
                        graphqlOperation(onCreateMessage, {
                            receiverID: state$.value.ProfileReducer.profile.id
                        })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        console.log("subscribed message",res)
                        const message: CreateMessageInput =
                            res.value.data.onCreateMessage;
                        if (
                            message.receiverID ===
                                state$.value.ProfileReducer.profile.id &&
                            message.status === MessageStatus.SENT
                        ) {
                            message.status = MessageStatus.RECEIVED;
                            return [
                                getRecentMessage(message),
                                updateMessageAction(message),
                            ];
                        }
                        return [getRecentMessage(message)];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [sendMessageFailure()];
                    })
                );
            })
        ),

    (action$, state$) =>
        action$.pipe(
            ofType('SUBSCRIBE_ON_MESSAGE_UPDATED'),
            mergeMap(() => {
                const sharedID = getSharedIndex(
                    state$.value.ProfileReducer.profile.id || '',
                    state$.value.MessageReducer.interlocutor.id || ''
                );
                return from(
                    (API.graphql(
                        graphqlOperation(onUpdateMessage, { sharedID })
                    ) as unknown) as Promise<any>
                ).pipe(
                    map((res) => {
                        console.log('message updated', res);
                        return getUpdatedMessage(
                            res.value.data.onUpdateMessage
                        );
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [sendMessageFailure()];
                    })
                );
            })
        ),

    (action$, state$) =>
        action$.pipe(
            ofType('UPDATE_MESSAGE'),
            mergeMap((action: any) => {
                const message: UpdateMessageInput = { ...action.payload };
                return from(
                    (API.graphql(
                        graphqlOperation(updateMessage, { input: message })
                    ) as unknown) as Promise<any>
                ).pipe(
                    map((res) => {
                        return updateMessageSuccess();
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [sendMessageFailure()];
                    })
                );
            })
        ),
];

export default epics;
