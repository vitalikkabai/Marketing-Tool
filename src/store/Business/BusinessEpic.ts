import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { catchError, map } from 'rxjs/operators';
import { saveBusinessToDBFailed, saveBusinessToDBSucces } from './BusinessActions';
import { ActionTypes } from './BusinessReducer';
import { Business } from '../../models';
import { AppStateType } from '../store';
import { createBusiness } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export const businessEpic = (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>) => action$.pipe(
    ofType('SAVE_BUSINESS_TO_DB'),
    map(() => {
        const businessData = state$.value.BusinessReducer;
        const ownerUID = state$.value.AuthReducer.userID;
        const businessObject = new Business({ ...businessData, ownerUID: ownerUID });
        return API.graphql(graphqlOperation(createBusiness, { input: businessObject }));

    }),
    map(res => { console.log(res); return saveBusinessToDBSucces() }),
    catchError(err => { console.log(err); return [saveBusinessToDBFailed(err)] })
);