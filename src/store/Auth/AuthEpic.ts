import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import {Auth} from "aws-amplify";
import {
    getAuthDataFailed,
    getAuthDataSuccess,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess
} from "./AuthActions";

export const signInEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType("SIGN-IN-REQUEST"),
    switchMap(async (action ) => {
       return Auth.signIn({
            username: action.payload.username,
            password: action.payload.password,
        }).then((response) => {
            return signInSuccess(response);
        }).catch(err => {
           alert("Failed to Sign in");
           return signInFailed(err)
        });
    })
);

export const signOutEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType("SIGN-OUT-REQUEST"),
    switchMap(async () => {
        return Auth.signOut().then(() => {
            return signOutSuccess();
        }).catch(() => {
            alert("Failed to Sign Out");
            return signOutFailed()
        });
    })
);

export const getAuthDataEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType("AUTH-DATA-REQUEST"),
    switchMap(async () => {
        return Auth.currentUserInfo().then((response) => {
            if(response) return getAuthDataSuccess(response);
            else return getAuthDataFailed();
        })
    })
);