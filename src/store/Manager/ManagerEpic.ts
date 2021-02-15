import { Epic } from 'redux-observable';
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
import { setInterlocutor } from '../Message/MessageActions';
import { DetailedBusiness } from './ManagerReducer';
import { filterAction } from '../../utils/backendUtils';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$) =>
        action$.pipe(
            filterAction('FETCH_MANAGER_BY_ID'),
            mergeMap((action: any) => {
                return from(
                    (API.graphql(
                        graphqlOperation(getManager, { id: action.payload })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        console.log(res);
                        const detailedBusinesses: DetailedBusiness[] = res.data.getManager.businesses.items.map(
                            (biz: any) => ({
                                business: biz,
                                employeeProfiles: biz.employees.items.map(
                                    (emp: any) => emp.profile
                                ),
                            })
                        );
                        return [
                            setManager(res.data.getManager),
                            setProfile(res.data.getManager.profile),
                            setBusinesses(detailedBusinesses),
                            setBusiness(
                                res.data.getManager.businesses.items[0]
                            ),
                            setInterlocutor(
                                res.data.getManager.businesses.items[0]
                                    .employees.items[0].profile
                            ),
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
