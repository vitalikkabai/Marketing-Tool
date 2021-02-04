import { CreateProfileInput, UpdateProfileInput } from './../../API';

import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchProfileByIdSuccess, saveProfileToDBFailed, saveProfileToDBSucces, setAvatarUrl, setAvatarUrlFailed, updateProfileSuccess } from './ProfileActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { createBusiness, createProfile, updateProfile } from '../../graphql/mutations';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { from } from 'rxjs';
import { getProfile } from '../../graphql/queries';
import { setBusiness } from '../Business/BusinessActions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) => action$.pipe(
        ofType('INITIATE_NEW_PROFILE'),
        mergeMap(() => {
            const businessData = state$.value.BusinessReducer;
            return from(API.graphql(graphqlOperation(createBusiness, { input: businessData })) as unknown as Promise<any>).pipe(
                mergeMap(res => {
                    const profile = state$.value.ProfileReducer;
                    //     ...state$.value.ProfileReducer,
                    //     businessID: res.data.createBusiness.id
                    // });
                    // profile.businessID = res.data.createBusiness.id;
                    console.log("before setting profile ")
                    // profile.id = state$
                    return from(API.graphql(graphqlOperation(createProfile, { input: profile })) as unknown as Promise<any>);
                }),
                mergeMap(res => {
                    return [saveProfileToDBSucces(res.data.createProfile), setBusiness(res.data.createProfile.business)]
                }),
                catchError(err => { console.log(err); return [saveProfileToDBFailed()] })
            )
        }),
    ),

    (action$, state$) => action$.pipe(
        ofType('FETCH_PROFILE_BY_ID'),
        mergeMap((action: any) => {
            return from(API.graphql(graphqlOperation(getProfile, { id: action.payload })) as unknown as Promise<any>)
                .pipe(
                    mergeMap(res => {
                        console.log(res)
                        return [fetchProfileByIdSuccess(res.data.getProfile),setBusiness(res.data.getProfile.business)]
                    }),
                    catchError(err => { console.log(err); return [saveProfileToDBFailed()] })
                )
        })
    ),

    (action$, state$) => action$.pipe(
        ofType('SET_PROFILE_IMAGE'),
        mergeMap((action: any) => {
            action.payload.bufferImg
            if (state$.value.ProfileReducer.profile.avatar) {
                Storage.remove(state$.value.ProfileReducer.profile.avatar.key)
            }
            return from(Storage.put(action.payload.s3.key, action.payload.bufferImg, {
                contentType: 'image/png',
                contentEncoding: 'base64'
            })).pipe(
                mergeMap(res => {
                    const profileAvatar = {
                        id: state$.value.ProfileReducer.profile.id,
                        avatar: action.payload.s3,
                    };
                    return from(API.graphql(graphqlOperation(updateProfile, { input: profileAvatar })) as unknown as Promise<any>);
                }),
                map(res => {
                    return updateProfileSuccess(res.data.updateProfile)
                }),
                catchError(err => { console.log(err); return [saveProfileToDBFailed()] })
            )
        })
    ),

    (action$, state$) => action$.pipe(
        ofType('UPDATE_PERSONAL_INFO'),
        mergeMap((action: any) => {
            const id = state$.value.ProfileReducer.profile.id;
            if (!id) throw("No profile ID")
            const profile: UpdateProfileInput = {
                id,
                name: action.payload.name,
                email: action.payload.email
            }

            return (from(API.graphql(graphqlOperation(updateProfile, { input: profile })) as unknown as Promise<any>).pipe(
                map(res => {
                    return updateProfileSuccess(res.data.updateProfile)
                }),
                catchError(err => { console.log(err); return [saveProfileToDBFailed()] })
            ))
        }),

    ),

    (action$, state$) => action$.pipe(
        ofType('FETCH_PROFILE_BY_ID_SUCCESS',
            'SAVE_PROFILE_TO_DB_SUCCESS',
            'UPDATE_PROFILE_SUCCESS'),
        mergeMap(() => {
            const avatar = state$.value.ProfileReducer.profile.avatar;
            if (!avatar) return [setAvatarUrl("")]

            return (from(Storage.get(avatar.key)).pipe(
                map(res => {
                    return setAvatarUrl(res as string)
                }),
                catchError(err => { console.log(err); return [setAvatarUrlFailed()] })
            ))
        }),

    )
];

export default epics;