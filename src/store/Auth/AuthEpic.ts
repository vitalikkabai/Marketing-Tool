import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { mergeMap, switchMap, catchError, map } from 'rxjs/operators';
import { Auth } from "aws-amplify";
import {
    getAuthDataFailed,
    getAuthDataSuccess,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpFailed,
    ResetLinkSuccess,
    ResetLinkFailed,
    sendNewPasswordSuccess,
    sendNewPasswordFailed,
    signUpSuccess,
} from "./AuthActions";
import { ActionTypes } from "../storeTypes";
import { from, Observable, of } from 'rxjs';
import { clearProfile, fetchProfileById, initiateNewProfile, setProfile, setProfileID, updatePersonalInfo } from '../Profile/ProfileActions';
import { Profile } from '../../models';
import { clearBusiness } from '../Business/BusinessActions';
import { AppStateType } from '../store';
import { clearEmployee, fetchEmployeeById, initiateNewEmployee } from '../Employee/EmployeeActions';
import { Occupation } from './AuthReducer';

export default [
    (action$: ActionsObservable<any>): Observable<ActionTypes> => action$.pipe(
        ofType("SIGN-IN-REQUEST"),
        mergeMap(action => {
            return from(Auth.signIn({
                username: action.payload.username,
                password: action.payload.password,
            })).pipe(
                mergeMap((response) => {
                    console.log(response)
                    return [signInSuccess({
                        userID: response.attributes.sub,
                        email: response.attributes.email,
                        emailVerified: response.attributes.email_verified,
                        userName: response.attributes.given_name,
                        occupation: response.attributes.occupation
                    }),
                    fetchProfileById(response.attributes.sub)];

                }),
                catchError((err) => [signInFailed(err)]),

            )
        })
        // map((res: any) => {console.log(res); return signInFailed(res)})

    ),
    (action$: ActionsObservable<any>,state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType("SIGN-UP-REQUEST"),
        mergeMap(action => {
            console.log(state$.value.AuthReducer.userAttributes.occupation)
            return from(Auth.signUp({
                username: action.payload.email,
                password: action.payload.password,
                attributes: {
                    email: action.payload.email,
                    given_name: action.payload.username,
                    'custom:occupation': state$.value.AuthReducer.userAttributes.occupation.toString()
                }
            })).pipe(
                mergeMap(res => {
                    console.log(res)
                    return Auth.signIn({
                        username: action.payload.email,
                        password: action.payload.password
                    })
                }),
                mergeMap((response: any) => {
                    return [
                        // setProfileID(response.attributes.sub),
                        signInSuccess({
                            userID: response.attributes.sub,
                            email: response.attributes.email,
                            emailVerified: response.attributes.email_verified,
                            userName: response.attributes.given_name,
                            occupation: Number(response.attributes["custom:occupation"])
                        }),
                        initiateNewEmployee(response.attributes.sub),
                    ]
                }),
                catchError(err => {console.log(err); return of(signUpFailed(err))})

            )
        })
    ),
    (action$: ActionsObservable<ActionTypes>) => action$.pipe(
        ofType("SIGN-OUT-REQUEST"),
        mergeMap(() => {
            return from(Auth.signOut()).pipe(
                mergeMap(res => {
                    return [
                        signOutSuccess(),
                        clearProfile(),
                        clearBusiness(),
                        clearEmployee()
                    ]
                }),
                catchError(err => { console.log(err); return [signOutFailed()] })
            )
        })
    ),
    (action$: ActionsObservable<ActionTypes>) => action$.pipe(
        ofType("AUTH-DATA-REQUEST"),
        mergeMap(() => {
            return from(Auth.currentUserInfo()).pipe(
                mergeMap(res => {
                    console.log(res)
                    if (res) return [getAuthDataSuccess({
                        userID: res.username,
                        email: res.attributes.email,
                        emailVerified: res.attributes.email_verified,
                        userName: res.attributes.given_name,
                        occupation: Number(res.attributes["custom:occupation"])
                    }),
                    fetchEmployeeById(res.username)
                    ];
                    else return [getAuthDataFailed()];
                }),
                catchError(err => {console.log(err); return [getAuthDataFailed()] })
            )
        }),

    ),
    (action$: ActionsObservable<any>) => action$.pipe(
        ofType("SEND-RESET-LINK"),
        switchMap(async (action) => {
            return Auth.forgotPassword(action.payload.email)
                .then(data => {
                    return ResetLinkSuccess({ data })
                })
                .catch(err => {
                    return ResetLinkFailed({ err })
                });
        })
    ),
    (action$: ActionsObservable<any>) => action$.pipe(
        ofType("SEND-NEW-PASSWORD"),
        switchMap(async (action) => {
            return Auth.forgotPasswordSubmit(action.payload.email, action.payload.code, action.payload.newPassword)
                .then(data => {
                    return sendNewPasswordSuccess()
                })
                .catch(err => {
                    return sendNewPasswordFailed()
                });
        })
    ),
    (action$: ActionsObservable<any>): Observable<ActionTypes> => action$.pipe(
        ofType("CHANGE_PASSWORD"),
        mergeMap(action => {
            console.log("Changing")
            return from(Auth.currentAuthenticatedUser())
                .pipe(
                    mergeMap(res => {
                        console.log(res);
                        return from(Auth.changePassword(res, action.payload.oldPassword, action.payload.newPassword))
                    }),
                    map(res => { console.log(res); action.payload.callback(); return sendNewPasswordSuccess() }),
                    catchError(err => of(signInFailed(err))),
                )
        })
    ),
    (action$: ActionsObservable<any>, state$: StateObservable<AppStateType>): Observable<ActionTypes> => action$.pipe(
        ofType("CHANGE_PERSONAL_INFO"),
        mergeMap(action => {
            console.log("Changing")
            if (action.payload.email === state$.value.ProfileReducer.profile.email) {
                return [updatePersonalInfo(action.payload.name, action.payload.email)]
            }

            return from(Auth.currentAuthenticatedUser())
                .pipe(
                    mergeMap(user => {
                        console.log(user);
                        return from(Auth.updateUserAttributes(user, { email: action.payload.email }))
                    }),
                    mergeMap(res => { console.log(res);
                        return [
                            sendNewPasswordSuccess(),
                            updatePersonalInfo(action.payload.name, action.payload.email)
                        ] }),
                    catchError(err => of(signInFailed(err))),
                )
        })

    ),
]