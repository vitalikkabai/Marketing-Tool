import { createMessage } from './../../graphql/mutations';

import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchLastMessages, fetchLastMessagesSuccess, fetchLastMessagesFailure, sendMessageSuccess, sendMessageFailure, openDialogueSuccess, openDialogueFailure, getRecentMessage } from './MessageActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation } from 'aws-amplify';
import { combineLatest, from } from 'rxjs';
import { getConversation, getDialogue } from '../../graphql/queries';
import { CreateMessageInput, GetConversationQueryVariables, GetDialogueQueryVariables } from '../../API';
import { getSharedIndex } from '../../utils/backendUtils';
import { onCreateMessage } from '../../graphql/subscriptions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) => action$.pipe(
        ofType('SEND_MESSAGE'),
        mergeMap((action: any) => {
            const message: CreateMessageInput = action.payload;
            console.log(message)
            message.sharedID = getSharedIndex(message.senderID, message.receiverID)
            console.log(message)
            return (from(API.graphql(graphqlOperation(createMessage, { input: message })) as unknown as Promise<any>).pipe(
                map(res => {
                    console.log(res)
                    return sendMessageSuccess(res.data.createMessage)
                }),
                catchError(err => { console.log(err); return [sendMessageFailure()] })
            ))
        }),
    ),
    (action$, state$) => action$.pipe(
        ofType('OPEN_DIALOGUE'),
        mergeMap((action: any) => {
            
            console.log("opening...", action,state$.value.ProfileReducer.profile.id)
            // if(!state$.value.ProfileReducer.profile.id) {

            // }
            const params: GetConversationQueryVariables = {
                sharedID: getSharedIndex(state$.value.ProfileReducer.profile.id || "",action.payload.interlocutor.id),
                subjectIDStageCreatedAt: {beginsWith: {stage: action.payload.stage, subjectID: action.payload.subjectID}}
            }
            console.log(params)
            return (from(API.graphql(graphqlOperation(getConversation, params)) as unknown as Promise<any>).pipe(
                map(res => {
                    console.log(res)
                    return openDialogueSuccess(res.data.getDialogue.items)
                }),
                catchError(err => { console.log(err); return [openDialogueFailure()] })
            ))
        }),
    ),
    (action$, state$) => action$.pipe(
        ofType('SUBSCRIBE_ON_MESSAGES'),
        mergeMap((action: any) => {
            // const message: CreateMessageInput = action.payload;
            console.log(action)
            // message.sharedID = getSharedIndex(message.senderID, message.receiverID)
            console.log("Subscribing ")
            return (from(API.graphql(graphqlOperation(onCreateMessage)) as unknown as Promise<any>).pipe(
                map(res => {
                    console.log(res)
                    return getRecentMessage(res.value.data.onCreateMessage)
                }),
                catchError(err => { console.log(err); return [sendMessageFailure()] })
            ))
        }),
    )
];

export default epics;