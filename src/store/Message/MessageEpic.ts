import { CreateEmployeeInput, CreateProfileInput } from './../../API';
import { createEmployee, createMessage } from './../../graphql/mutations';

import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchLastMessages, fetchLastMessagesSuccess, fetchLastMessagesFailure } from './MessageActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { updateProfile } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { from } from 'rxjs';
import { saveProfileToDBFailed, updateProfileSuccess } from '../Profile/ProfileActions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) => action$.pipe(
        ofType('SEND_NEW_MESSAGE'),
        mergeMap((action: any) => {
            const message = action.payload;

            return (from(API.graphql(graphqlOperation(createMessage, { input: message })) as unknown as Promise<any>).pipe(
                map(res => {
                    return updateProfileSuccess(res.data.updateProfile)
                }),
                catchError(err => { console.log(err); return [saveProfileToDBFailed()] })
            ))
        }),

    )
];

export default epics;