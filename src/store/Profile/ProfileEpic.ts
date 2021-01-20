import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { catchError, map } from 'rxjs/operators';
import { saveProfileToDBFailed, saveProfileToDBSucces } from './ProfileActions';
import { ActionTypes } from './ProfileReducer';
import { Profile } from '../../models';
import { AppStateType } from '../store';
import { createBusiness, createProfile } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';

export default [
    (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType('SAVE_PROFILE_TO_DB'),
        map(() => {
            console.log("saving profile")
            const profile = state$.value.ProfileReducer.profile
            return API.graphql(graphqlOperation(createProfile, { input: profile }));

        }),
        map(res => { console.log(res); return saveProfileToDBSucces() }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    )
]