import { CreateEmployeeInput, CreateProfileInput } from './../../API';
import { createEmployee } from './../../graphql/mutations';

import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchProfileByIdSuccess, saveProfileToDBFailed, saveProfileToDBSucces, setEmployee, updateProfileSuccess } from './EmployeeActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { createBusiness, createProfile, updateProfile } from '../../graphql/mutations';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { forkJoin, from } from 'rxjs';
import { getProfile } from '../../graphql/queries';
import { setBusiness } from '../Business/BusinessActions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) => action$.pipe(
        ofType('INITIATE_NEW_EMPLOYEE'),
        mergeMap((action: any) => {
            const businessData = state$.value.BusinessReducer;
            return from(API.graphql(graphqlOperation(createBusiness, { input: businessData })) as unknown as Promise<any>).pipe(
                mergeMap((businessRes) => {
                    const profile: CreateProfileInput = {
                        ...state$.value.ProfileReducer,
                        id: action.payload
                    };
                    //     ...state$.value.ProfileReducer,
                    //     businessID: res.data.createBusiness.id
                    // });

                    const employee: CreateEmployeeInput = {...state$.value.EmployeeReducer,
                        businessID: businessRes.data.createBusiness.id, id: action.payload};
                    console.log("business res ", businessRes)
                    // profile.id = state$
                    return forkJoin([from(API.graphql(graphqlOperation(createProfile, { input: profile })) as unknown as Promise<any>),
                        from(API.graphql(graphqlOperation(createEmployee, { input: employee })) as unknown as Promise<any>)
                    ])
                }),
                mergeMap((res: any) => {
                    console.log(res)
                    return [saveProfileToDBSucces(res.data.createProfile),
                        setBusiness(res.data.createProfile.business),
                    ]                }),
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
            if (state$.value.ProfileReducer.avatar) {
                Storage.remove(state$.value.ProfileReducer.avatar.key)
            }
            return from(Storage.put(action.payload.s3.key, action.payload.bufferImg, {
                contentType: 'image/png',
                contentEncoding: 'base64'
            })).pipe(
                mergeMap(res => {
                    const profileAvatar = {
                        id: state$.value.ProfileReducer.id,
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
            const profile = {
                id: state$.value.ProfileReducer.id,
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

    )
];

export default epics;