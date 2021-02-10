import { CreateEmployeeInput, CreateProfileInput } from './../../API';
import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation } from 'aws-amplify';
import { from } from 'rxjs';
import { setManager, fetchManagerByIdFailure } from './ManagerActions';
import { getManager } from '../../graphql/queries';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$, state$) => action$.pipe(
        ofType('FETCH_MANAGER_BY_ID'),
        mergeMap((action: any) => {
            return from(API.graphql(graphqlOperation(getManager, { id: action.payload })) as unknown as Promise<any>)
                .pipe(
                    mergeMap(res => {
                        console.log(res)
                        return [
                            setManager(res.data.getManager),
                        ]
                    }),
                    catchError(err => { console.log(err); return [fetchManagerByIdFailure()] })
                )
        })
    )
];

export default epics;