import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { catchError, map } from 'rxjs/operators';
import { saveBusinessToDBFailed, saveBusinessToDBSucces } from './BusinessActions';
import { ActionTypes } from './BusinessReducer';
import { Business } from '../../models';
import { AppStateType } from '../store';
import { createBusiness } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { Observable } from 'rxjs';

export const businessEpic = (action$: ActionsObservable<ActionTypes>, state$: StateObservable<AppStateType>):Observable<ActionTypes> => action$.pipe(
    ofType('SAVE_BUSINESS_TO_DB'),
    map(() => {
        const businessData = state$.value.BusinessReducer;
        const businessObject = new Business({ ...businessData });
        return API.graphql(graphqlOperation(createBusiness, { input: businessObject }));

    }),
    map(res => { return saveBusinessToDBSucces() }),
    catchError(err => { console.log(err); return [saveBusinessToDBFailed(err)] })
);