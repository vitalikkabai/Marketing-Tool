import { ActionsObservable, ofType } from 'redux-observable';
import {mergeMap, switchMap} from 'rxjs/operators';
import {setUserData} from "./AuthActions";
import {Auth} from "aws-amplify";
import { of, from } from 'rxjs';

const api = {
    signIn: (username: string, password: string) => {
        const request =  Auth.signIn({
            username: username,
            password: password,
        }).then((response) => response).catch(err => console.log(err));
        return from(request);
    }
};

export const AuthEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType('SET-USER-DATA'),
    mergeMap(async () => {
        const userData = await Auth.currentUserInfo();
        return setUserData({userName: "Bob", password: "123", email: "sss"});
    })
);