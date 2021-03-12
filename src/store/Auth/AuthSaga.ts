import {put, takeEvery, call} from "redux-saga/effects";
import {Auth} from "aws-amplify";
import {getAuthDataFailed, getAuthDataSuccess, signInFailed, signInSuccess} from "./AuthActions";
import {fetchEmployeeById} from "../Employee/EmployeeActions";
import {fetchManagerById} from "../Manager/ManagerActions";
import {ActionTypes} from '../storeTypes';

function* authUserWorker(action: any): unknown {
    try {
        const response = yield call([Auth, 'signIn'], {
            username: action.payload.username,
            password: action.payload.password,
        })
        console.log(response)
        const occupation = Number(
            response.attributes['custom:occupation']
        );

        yield put(signInSuccess({
            userID: response.attributes.sub,
            occupation,
        }));
        switch (occupation) {
            case 0:
                yield put(fetchEmployeeById(
                    response.attributes.sub
                ));
                break;
            case 1:
                yield put(fetchManagerById(
                    response.attributes.sub
                ));
                break;
            default:
                yield put(getAuthDataFailed());
        }
    } catch (err) {
        yield put(signInFailed(err))
    }
    return 0;
}

function* authDataWorker(): unknown {
    try {
        const response = yield call([Auth, 'currentUserInfo'])
        console.log(response)
        if (response) {
            const occupation = Number(
                response.attributes['custom:occupation']
            );
            switch (occupation) {
                case 0:
                    yield put(fetchEmployeeById(
                        response.username
                    ));
                    break;
                case 1:
                    yield put(fetchManagerById(
                        response.username
                    ));
                    break;
                default:
                    yield put(getAuthDataFailed());
            }
            yield put(getAuthDataSuccess({
                userID: response.username,
                occupation,
            }))
        }

    } catch (err) {
        yield getAuthDataFailed()
    }
    return 0;
}

export function* authWatcher() {
    yield takeEvery('SIGN-IN-REQUEST', authUserWorker)
    yield takeEvery('AUTH-DATA-REQUEST', authDataWorker)
}