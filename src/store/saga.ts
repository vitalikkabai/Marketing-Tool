import {all } from 'redux-saga/effects';
import {authWatcher} from "./Auth/AuthSaga";

export function* rootWatcher() {
    yield all([authWatcher()])
}

