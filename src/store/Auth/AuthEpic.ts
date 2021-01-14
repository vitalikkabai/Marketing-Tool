import { ActionsObservable, ofType } from 'redux-observable';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';
import {Auth} from "aws-amplify";
import {
    getAuthDataFailed,
    getAuthDataSuccess,
    signIn,
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutSuccess,
    signUpSuccess,
    signUpFailed
} from "./AuthActions";
import {ActionTypes} from "./AuthReducer";
import { from, of } from 'rxjs';
import { saveBusinessToDB } from '../Business/BusinessActions';

export const signInEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType("SIGN-IN-REQUEST"),
    switchMap(async (action ) => {
       return Auth.signIn({
            username: action.payload.username,
            password: action.payload.password,
        }).then((response) => {
            console.log("signied in");
            console.log(response)
            return signInSuccess(response);
        }).catch(err => {
           alert("Failed to Sign in");
           console.log(err)
           return signInFailed(err)
        });
    })
);

export const signUpEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType("SIGN-UP-REQUEST"),
    mergeMap(action => from(Auth.signUp({
            username: action.payload.username,
            password: action.payload.password,
        })).pipe(
            mergeMap(res => { console.log(res); return[
            signUpSuccess(res.userSub),
            saveBusinessToDB(),
            signIn(action.payload.username, action.payload.password)
            ]}),
            catchError(err => of(signUpFailed(err)))
        )
    )
);

export const signOutEpic = (action$: ActionsObservable<ActionTypes>) => action$.pipe(
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

export const getAuthDataEpic = (action$: ActionsObservable<ActionTypes>) => action$.pipe(
    ofType("AUTH-DATA-REQUEST"),
    switchMap(async () => {
        return Auth.currentUserInfo().then((response) => {
            if(response) return getAuthDataSuccess(response);
            else return getAuthDataFailed();
        })
    })
);
