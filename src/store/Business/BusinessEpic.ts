import { Epic } from 'redux-observable';
import { catchError, mergeMap } from 'rxjs/operators';
import {
    updateBusinessInDBFailed,
    updateBusinessInDBSucces,
} from './BusinessActions';
import { ActionTypes } from './BusinessReducer';
import { AppStateType } from '../store';
import { updateBusiness } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { from } from 'rxjs';
import { filterAction } from '../../utils/backendUtils';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$) =>
        action$.pipe(
            filterAction('UPDATE_BUSINESS'),
            mergeMap((action) => {
                return from(
                    (API.graphql(
                        graphqlOperation(updateBusiness, {
                            input: action.payload,
                        })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        console.log("result of request: ", res);
                        return [
                            updateBusinessInDBSucces(res.data.updateBusiness),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [updateBusinessInDBFailed(err)];
                    })
                );
            })
        ),
];
