import { BehaviorSubject, Observable } from 'rxjs';
import {
    UpdateMessageInput,
    OnUpdateDialogueMessageSubscriptionVariables,
} from './../../API';
import { createMessage, updateMessage } from './../../graphql/mutations';

import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import {
    sendMessageSuccess,
    sendMessageFailure,
    loadDialogueSuccess,
    loadDialogueFailure,
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
    subscribeOnMessageUpdatedSuccess,
    subscribeOnMessageUpdatedFailure,
    unsubscribeOnMessageUpdatedFailure,
    unsubscribeOnMessageUpdatedSuccess,
    unsubscribeOnMessageUpdated,
    loadDialogue,
} from './MessageActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { from } from 'rxjs';
import { getConversation } from '../../graphql/queries';
import { CreateMessageInput, GetConversationQueryVariables, MessageStatus } from '../../API';
import { filterAction, getSharedIndex } from '../../utils/backendUtils';
import { onCreateMessage, onUpdateDialogueMessage } from '../../graphql/subscriptions';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('SEND_MESSAGE'),
            mergeMap((action) => {
                const message: CreateMessageInput = { ...action.payload };
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
    (action$) =>
        action$.pipe(
            // ofType('CHANGE_PASSWORD' || 'CHANGE_PASSWORD_FAILED' || 'sfd'),
            filterAction('CLEAR_DIALOGUE'),
            map(() => unsubscribeOnMessageUpdated())
        ),

    (action$) =>
        action$.pipe(
            filterAction('SET_DIALOGUE_SUBJECT', 'SET_INTERLOCUTOR'),
            switchMap(() => [unsubscribeOnMessageUpdated() ,loadDialogue()])
        ),

    (action$, state$) =>
        action$.pipe(
            filterAction('LOAD_DIALOGUE'),
            switchMap(() => {
                return state$.pipe(
                    filter(
                        (state) =>
                            !!state.MessageReducer.interlocutor && !!state.ProfileReducer.profile.id
                    ),
                    take(1),
                    switchMap((state) => {
                        if (
                            !state.MessageReducer.interlocutor ||
                            !state.MessageReducer.interlocutor.id ||
                            !state.ProfileReducer.profile.id
                        )
                            throw 'no interlocutor';
                        const userID = state.ProfileReducer.profile.id;
                        const interlocutorID = state.MessageReducer.interlocutor.id;
                        const params: GetConversationQueryVariables = {
                            sharedID: getSharedIndex(userID, interlocutorID),
                            subjectIDStageCreatedAt: {
                                beginsWith: {
                                    stage: state.MessageReducer.stage,
                                    subjectID: state.MessageReducer.subjectID,
                                },
                            },
                            limit: 7
                        };
                        console.log('quering for convo', params, userID, interlocutorID);
                        return from(
                            (API.graphql(
                                graphqlOperation(getConversation, params)
                            ) as unknown) as Promise<any>
                        ).pipe(
                            mergeMap((res) => {
                                console.log('got convo', res);
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
                                        updateMessageActions.push(updateMessageAction(message));
                                    }
                                });

                                return [
                                    subscribeOnMessageUpdated(),
                                    loadDialogueSuccess(res.data.getConversation.items),
                                    ...updateMessageActions,
                                ];
                            }),
                            catchError((err) => {
                                console.log(err);
                                return [loadDialogueFailure()];
                            })
                        );
                    })
                );
            })
        ),
    (action$, state$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('SUBSCRIBE_ON_MESSAGES_CREATED'),
            switchMap(() => {
                return state$.pipe(
                    filter((state) => !!state.ProfileReducer.profile.id),
                    take(1),
                    switchMap(() => {
                        const createMessageObservable = (API.graphql(
                            graphqlOperation(onCreateMessage, {
                                receiverID: state$.value.ProfileReducer.profile.id,
                            })
                        ) as unknown) as Observable<any>;
                        // messageCreatedSubject.unsubscribe()
                        const createMessageSubscription = createMessageObservable.subscribe(
                            (res) => {

                                // createdSubscription.unsubscribe()
                                const message: CreateMessageInput = res.value.data.onCreateMessage;
                                if (
                                    message.senderID ===
                                        state$.value.MessageReducer.interlocutor?.id &&
                                    message.status === MessageStatus.SENT
                                ) {
                                    message.status = MessageStatus.RECEIVED;
                                    messageCreatedSubject.next(
                                        // getRecentMessage(message),
                                        updateMessageAction(message)
                                    );
                                    messageCreatedSubject.next(getRecentMessage(message));
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
                );
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

    (action$, state$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('SUBSCRIBE_ON_MESSAGE_UPDATED'),
            switchMap(() => {
                if (!state$.value.MessageReducer.interlocutor) throw 'no interlocutor';
                console.log('onMess updaged',state$.value.ProfileReducer.profile.id,state$.value.MessageReducer.interlocutor.id)
                const params: OnUpdateDialogueMessageSubscriptionVariables = {
                    senderID: state$.value.ProfileReducer.profile.id,
                    receiverID: state$.value.MessageReducer.interlocutor.id,
                };
                const onUpdateMessageObservable = (API.graphql(
                    graphqlOperation(onUpdateDialogueMessage, params)
                ) as unknown) as Observable<any>;
                const onUpdateMessageSubscription = onUpdateMessageObservable.subscribe((mes) => {
                    console.log('message updated by subscription', mes);
                    messageUpdatedSubject.next(getUpdatedMessage(mes.value.data.onUpdateDialogueMessage));
                });
                const messageUpdatedSubject = new BehaviorSubject<ActionTypes>(
                    subscribeOnMessageUpdatedSuccess(onUpdateMessageSubscription)
                );
                return messageUpdatedSubject.pipe(
                    map((res) => {
                        console.log(res);
                        return res;
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [subscribeOnMessageUpdatedFailure()];
                    })
                );
                // ).pipe(
                //     map((res) => {
                //         console.log('message updated', res);
                //         return getUpdatedMessage(
                //             res.value.data.onUpdateMessage
                //         );
                //     }),
                //     catchError((err) => {
                //         console.log(err);
                //         return [sendMessageFailure()];
                //     })
                // );
            })
        ),

    (action$, state$): Observable<ActionTypes> =>
        action$.pipe(
            filterAction('UNSUBSCRIBE_ON_MESSAGES_UPDATED'),
            map(() => {
                const subscription = state$.value.MessageReducer.updateMessageSubscription;
                if (!subscription) return unsubscribeOnMessageUpdatedFailure();
                else {
                    subscription.unsubscribe();
                    return unsubscribeOnMessageUpdatedSuccess();
                }
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
                if (!state$.value.MessageReducer.interlocutor) throw 'no interlocutor';

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
