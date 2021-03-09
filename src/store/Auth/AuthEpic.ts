import { ActionsObservable, Epic } from 'redux-observable';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
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
    afterSignOut, changePersonalInfoFailed,
} from './AuthActions';
import { ActionTypes } from '../storeTypes';
import { from, of } from 'rxjs';
import { updatePersonalInfo } from '../Profile/ProfileActions';
import { AppStateType } from '../store';
import {
    fetchEmployeeById,
    initiateNewEmployee,
} from '../Employee/EmployeeActions';
import { fetchManagerById } from '../Manager/ManagerActions';
import { filterAction } from '../../utils/backendUtils';
import { subscribeOnMessageCreated, unsubscribeOnMessageCreated } from '../Message/MessageActions';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$) =>
        action$.pipe(
            filterAction('SIGN-IN-REQUEST'),
            mergeMap((action) => {
                return from(
                    Auth.signIn({
                        username: action.payload.username,
                        password: action.payload.password,
                    })
                ).pipe(
                    mergeMap((response) => {
                        console.log(response);
                        const occupation = Number(
                            response.attributes['custom:occupation']
                        );
                        let action: ActionTypes;
                        switch (occupation) {
                            case 0:
                                action = fetchEmployeeById(
                                    response.attributes.sub
                                );
                                break;
                            case 1:
                                action = fetchManagerById(
                                    response.attributes.sub
                                );
                                break;
                            default:
                                action = getAuthDataFailed();
                        }
                        return [
                            signInSuccess({
                                userID: response.attributes.sub,
                                occupation,
                            }),
                            subscribeOnMessageCreated(),
                            action,
                        ];
                    }),
                    catchError((err) => [signInFailed(err)])
                );
            })
        ),
    (action$, state$) =>
        action$.pipe(
            filterAction('SIGN-UP-REQUEST'),
            mergeMap((action) => {
                return from(
                    Auth.signUp({
                        username: action.payload.email,
                        password: action.payload.password,
                        attributes: {
                            email: action.payload.email,
                            given_name: action.payload.username,
                            'custom:occupation': state$.value.AuthReducer.userAttributes.occupation.toString(),
                        },
                    })
                ).pipe(
                    mergeMap(() => {
                        return Auth.signIn({
                            username: action.payload.email,
                            password: action.payload.password,
                        });
                    }),
                    mergeMap((response) => {
                        return [
                            // setProfileID(response.attributes.sub),
                            signInSuccess({
                                userID: response.attributes.sub,
                                occupation: Number(
                                    response.attributes['custom:occupation']
                                ),
                            }),
                            initiateNewEmployee(response.attributes.sub),
                            subscribeOnMessageCreated(),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return of(signUpFailed(err));
                    })
                );
            })
        ),
    (action$) =>
        action$.pipe(
            filterAction('SIGN-OUT-REQUEST'),
            mergeMap(() => {
                return from(Auth.signOut()).pipe(
                    mergeMap(() => {
                        return [
                            unsubscribeOnMessageCreated(),
                            signOutSuccess(),
                            afterSignOut()
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [signOutFailed()];
                    })
                );
            })
        ),

    (action$: ActionsObservable<ActionTypes>) =>
        action$.pipe(
            filterAction('AUTH-DATA-REQUEST'),
            mergeMap(() => {
                return from(Auth.currentUserInfo()).pipe(
                    mergeMap((res) => {
                        if (res) {
                            const occupation = Number(
                                res.attributes['custom:occupation']
                            );
                            let action: ActionTypes;
                            switch (occupation) {
                                case 0:
                                    action = fetchEmployeeById(res.username);
                                    break;
                                case 1:
                                    action = fetchManagerById(res.username);
                                    break;
                                default:
                                    action = getAuthDataFailed();
                            }
                            return [
                                getAuthDataSuccess({
                                    userID: res.username,
                                    occupation,
                                }),
                                subscribeOnMessageCreated(),
                                action,
                            ];
                        } else return [getAuthDataFailed()];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [getAuthDataFailed()];
                    })
                );
            })
        ),

    (action$) =>
        action$.pipe(
            filterAction('SEND-RESET-LINK'),
            mergeMap((action) => {
                return from(Auth.forgotPassword(action.payload.email)).pipe(
                    mergeMap(() => {
                        return [ResetLinkSuccess()];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [ResetLinkFailed(err)];
                    })
                );
            })
        ),

    (action$) =>
        action$.pipe(
            filterAction('SEND-NEW-PASSWORD'),
            mergeMap((action) => {
                return from(
                    Auth.forgotPasswordSubmit(
                        action.payload.email,
                        action.payload.code,
                        action.payload.newPassword
                    )
                ).pipe(
                    mergeMap(() => {
                        return [sendNewPasswordSuccess()];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [sendNewPasswordFailed(err)];
                    })
                );
            })
        ),
    (action$) =>
        action$.pipe(
            filterAction('CHANGE_PASSWORD'),
            mergeMap((action) => {
                return from(Auth.currentAuthenticatedUser()).pipe(
                    mergeMap((res) => {
                        return from(
                            Auth.changePassword(
                                res,
                                action.payload.oldPassword,
                                action.payload.newPassword
                            )
                        );
                    }),
                    map((res) => {
                        console.log(res);
                        action.payload.callback();
                        return sendNewPasswordSuccess();
                    }),
                    catchError((err) => {console.log(err); return of(sendNewPasswordFailed(err))})
                );
            })
        ),
    (action$, state$) =>
        action$.pipe(
            filterAction('CHANGE_PERSONAL_INFO'),
            mergeMap((action) => {
                if (
                    action.payload.email ===
                    state$.value.ProfileReducer.profile.email
                ) {
                    return [
                        updatePersonalInfo(
                            action.payload.name,
                            action.payload.email
                        ),
                    ];
                }
                return from(Auth.currentAuthenticatedUser()).pipe(
                    mergeMap((user) => {
                        return from(
                            Auth.updateUserAttributes(user, {
                                email: action.payload.email,
                            })
                        );
                    }),
                    mergeMap(() => {
                        return [
                            sendNewPasswordSuccess(),
                            updatePersonalInfo(
                                action.payload.name,
                                action.payload.email
                            ),
                        ];
                    }),
                    catchError((err) =>{console.log(err); return of(changePersonalInfoFailed(err))})
                );
            }), catchError((err) => {console.log(err); return of(changePersonalInfoFailed(err))})
        ),
];
