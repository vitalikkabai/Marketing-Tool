
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { saveProfileToDBFailed, saveProfileToDBSucces } from './ProfileActions';
import { ActionTypes } from './ProfileReducer';
import { Business, Profile } from '../../models';
import { AppStateType } from '../store';
import { createBusiness, createProfile } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { Action } from 'rxjs/internal/scheduler/Action';
import { from, Observable } from 'rxjs';

export default [
    (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType('SAVE_PROFILE_TO_DB'),
        map(() => {
            console.log("saving profile")
            const businessData = state$.value.BusinessReducer;
            const ownerUID = state$.value.AuthReducer.userAttributes.userID;
            // const businessObject = new Business({ ...businessData });
            // const profile = new Profile({...state$.value.ProfileReducer.profile,
            //     business: businessObject})

            // return API.graphql(graphqlOperation(createProfile, { input: profile }));

        }),
        map(res => { console.log(res); return saveProfileToDBSucces() }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    ),

    (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType('INITIATE_NEW_PROFILE'),
        mergeMap(() => {
            const businessData = state$.value.BusinessReducer;
            const businessObject = new Business({ ...businessData });
            return from(API.graphql(graphqlOperation(createBusiness, { input: businessObject })) as unknown as Promise<any>).pipe(
                map(res => {
                    console.log(res.data.createBusiness.id)
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    //  const business = res["[[PromiseResult]]"].data.createBusiness;
                    const profile = new Profile({...state$.value.ProfileReducer.profile, id: "",
                     businessID: res.data.createBusiness.id
                    });
                    
                    return API.graphql(graphqlOperation(createProfile, { input: profile }));
                }),
            )
        }),
        
        map(res => { console.log(res); return saveProfileToDBSucces() }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    )
]