
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { fetchProfileByIdSuccess, saveProfileToDBFailed, saveProfileToDBSucces } from './ProfileActions';
import { ActionTypes } from './ProfileReducer';
import { Business, Profile } from '../../models';
import { AppStateType } from '../store';
import { createBusiness, createProfile, updateProfile } from '../../graphql/mutations';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { profileByOwnerWithBusiness } from '../../graphql/custom';

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
                    const profile = new Profile({...state$.value.ProfileReducer.profile,
                     businessID: res.data.createBusiness.id
                    });
                    
                    return API.graphql(graphqlOperation(createProfile, { input: profile }));
                }),
            )
        }),
        
        map(res => { console.log(res);
            return saveProfileToDBSucces() }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    ),

    (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType('FETCH_PROFILE_BY_ID'),
        mergeMap((action : any) => {
            console.log("action payload", action.payload)
            return from(API.graphql(graphqlOperation(profileByOwnerWithBusiness, { owner: action.payload })) as unknown as Promise<any>)
        }),
        
        map(res => { console.log(res);
            return fetchProfileByIdSuccess(res.data.profileByOwner.items[0]) }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    ),

    (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        filter(action => action.type === 'SET_PROFILE_IMAGE'),
        mergeMap((action: any) => {
            console.log("action payload")
            action.payload.bufferImg
            if (state$.value.ProfileReducer.profile.avatar) {
                Storage.remove(state$.value.ProfileReducer.profile.avatar.key)
            }
            return from(Storage.put(action.payload.s3.key, action.payload.bufferImg, {
                contentType: 'image/png',
                contentEncoding: 'base64'
            })).pipe(
                mergeMap(res => {
                    console.log(res);
                    const profileAvatar = {
                        id: state$.value.ProfileReducer.profile.id,
                        avatar: action.payload.s3,
                        _version: state$.value.ProfileReducer.profile._version,
                    };
                    console.log(profileAvatar)
                    return from(API.graphql(graphqlOperation(updateProfile, { input: profileAvatar })) as unknown as Promise<any>);
                }),
            )
        }),
        map(res => { console.log(res);
            return fetchProfileByIdSuccess(res.data.updateProfile) }),
        catchError(err => { console.log(err); return [saveProfileToDBFailed(err)] })
    )
]