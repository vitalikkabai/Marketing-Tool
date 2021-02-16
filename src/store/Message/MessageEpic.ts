import { BehaviorSubject, Observable } from 'rxjs';
import { UpdateMessageInput } from './../../API';
import { createMessage, updateMessage } from './../../graphql/mutations';

import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import {
    sendMessageSuccess,
    sendMessageFailure,
    openDialogueSuccess,
    openDialogueFailure,
    getRecentMessage,
    getUpdatedMessage,
    updateMessageAction,
    updateMessageSuccess,
    subscribeOnMessageUpdated,
    setInterlocutorAvatarUrl,
    setInterlocutorAvatarUrlFailure,
    subscribeOnMessageCreatedSuccess,
    unsubscribeOnMessageCreatedSuccess,
    unsubscribeOnMessageCreatedFailure,
} from './MessageActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { from } from 'rxjs';
import { getConversation } from '../../graphql/queries';
import {
    CreateMessageInput,
    GetConversationQueryVariables,
    MessageStatus,
} from '../../API';
import { filterAction, getSharedIndex } from '../../utils/backendUtils';
import { onCreateMessage, onUpdateMessage } from '../../graphql/subscriptions';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$) =>
        action$.pipe(
            filterAction('SEND_MESSAGE'),
            mergeMap((action) => {
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
            filterAction('OPEN_DIALOGUE'),
            mergeMap((action) => {
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
    (action$, state$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('SUBSCRIBE_ON_MESSAGES_CREATED'),
            switchMap(() => {
                return state$.pipe(
                    filter(state => !!state.ProfileReducer.profile.id && !!state.MessageReducer.interlocutor.id),
                    take(1),
                    switchMap( ()=> {
                        const createMessageObservable = (API.graphql(
                            graphqlOperation(onCreateMessage, {
                                receiverID: state$.value.ProfileReducer.profile.id,
                            })
                        ) as unknown) as Observable<any>;
                        // messageCreatedSubject.unsubscribe()
                        const createMessageSubscription = createMessageObservable.subscribe(
                            (res) => {
                                console.log('subscribed message', res);
                                // createdSubscription.unsubscribe()
                                const message: CreateMessageInput =
                                    res.value.data.onCreateMessage;
                                if (
                                    message.senderID ===
                                        state$.value.MessageReducer.interlocutor.id &&
                                    message.status === MessageStatus.SENT
                                ) {
                                    message.status = MessageStatus.RECEIVED;
                                    messageCreatedSubject.next(
                                        // getRecentMessage(message),
                                        updateMessageAction(message)
                                    );
                                    messageCreatedSubject.next(
                                        getRecentMessage(message)
                                    );
                                    messageCreatedSubject.unsubscribe();
                                }
                            }
                        );
                        const messageCreatedSubject = new BehaviorSubject<ActionTypes>(
                            subscribeOnMessageCreatedSuccess(createMessageSubscription)
                        );
                        return messageCreatedSubject.pipe(
                            map((res) => {
                                console.log(res);
                                return res;
                            }),
                            catchError((err) => {
                                console.log(err);
                                return [sendMessageFailure()];
                            })
                        );
                    })
                )
                
            })
        ),

    (action$, state$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('UNSUBSCRIBE_ON_MESSAGES_CREATED'),
            map(() => {
                const subscription = state$.value.MessageReducer.createMessageSubscription;
                if (!subscription) return unsubscribeOnMessageCreatedFailure();
                else {
                    subscription.unsubscribe();
                    return unsubscribeOnMessageCreatedSuccess();
                }
            })
        ),

    (action$, state$) =>
        action$.pipe(
            filterAction('SUBSCRIBE_ON_MESSAGE_UPDATED'),
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

    (action$) =>
        action$.pipe(
            filterAction('UPDATE_MESSAGE'),
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
    (action$, state$) =>
        action$.pipe(
            filterAction('SET_INTERLOCUTOR'),
            mergeMap(() => {
                const avatar = state$.value.MessageReducer.interlocutor.avatar;
                if (!avatar)
                    return [
                        setInterlocutorAvatarUrl(''),
                        // subscribeOnMessageCreated(id),
                        // subscribeOnMessageUpdated(id),
                    ];

                return from(Storage.get(avatar.key)).pipe(
                    mergeMap((res) => {
                        return [
                            setInterlocutorAvatarUrl(res as string),
                            // subscribeOnMessageCreated(id),
                            // subscribeOnMessageUpdated(id),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [setInterlocutorAvatarUrlFailure()];
                    })
                );
            })
        ),
];
