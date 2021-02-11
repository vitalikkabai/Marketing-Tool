import { Epic, ofType } from 'redux-observable';
import { catchError, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { API, graphqlOperation } from 'aws-amplify';
import { from } from 'rxjs';
import {
    setManager,
    fetchManagerByIdFailure,
    setBusinesses,
} from './ManagerActions';
import { getManager } from '../../graphqlFiltered/queriesFiltered';
import { setProfile } from '../Profile/ProfileActions';
import { setBusiness } from '../Business/BusinessActions';

const epics: Epic<ActionTypes, ActionTypes, AppStateType>[] = [
    (action$) =>
        action$.pipe(
            ofType('FETCH_MANAGER_BY_ID'),
            mergeMap((action: any) => {
                return from(
                    (API.graphql(
                        graphqlOperation(getManager, { id: action.payload })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        console.log(res);
                        return [
                            setManager(res.data.getManager),
                            setProfile(res.data.getManager.profile),
                            setBusinesses(res.data.getManager.businesses.items),
                            setBusiness(res.data.getManager.businesses.items[0]),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [fetchManagerByIdFailure()];
                    })
                );
            })
        ),
];

export default epics;
