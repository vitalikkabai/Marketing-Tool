import { CreateEmployeeInput, CreateProfileInput } from '../../API';

import { ActionsObservable, Epic } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    fetchEmployeeSuccess,
    getUserLocationFailed,
    getUserLocationSuccess,
    saveProfileToDBFailed,
} from './EmployeeActions';
import { ActionTypes } from '../storeTypes';
import { AppStateType } from '../store';
import { createProfile, updateProfile } from '../../graphql/mutations';
import {
    createBusiness,
    createEmployee,
} from '../../graphqlFiltered/mutationsFiltered';
import { API, graphqlOperation } from 'aws-amplify';
import { forkJoin, from } from 'rxjs';
import { getEmployee } from '../../graphqlFiltered/queriesFiltered';
import { setBusiness } from '../Business/BusinessActions';
import {
    saveProfileToDBSucces,
    updateProfileSuccess,
} from '../Profile/ProfileActions';
import { ajax } from 'rxjs/ajax';
import { setManager } from '../Manager/ManagerActions';
import { setInterlocutor } from '../Message/MessageActions';
import { filterAction } from '../../utils/backendUtils';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$, state$) =>
        action$.pipe(
            filterAction('INITIATE_NEW_EMPLOYEE'),
            mergeMap((action) => {
                const businessData = state$.value.BusinessReducer;
                return from(
                    (API.graphql(
                        graphqlOperation(createBusiness, {
                            input: businessData,
                        })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((businessRes) => {
                        const profile: CreateProfileInput = {
                            ...state$.value.ProfileReducer.profile,
                            id: action.payload,
                        };
                        //     ...state$.value.ProfileReducer,
                        //     businessID: res.data.createBusiness.id
                        // });

                        const employee: CreateEmployeeInput = {
                            ...state$.value.EmployeeReducer,
                            businessID: businessRes.data.createBusiness.id,
                            id: action.payload,
                        };
                        // profile.id = state$
                        return forkJoin([
                            from(
                                (API.graphql(
                                    graphqlOperation(createProfile, {
                                        input: profile,
                                    })
                                ) as unknown) as Promise<unknown>
                            ),
                            from(
                                (API.graphql(
                                    graphqlOperation(createEmployee, {
                                        input: employee,
                                    })
                                ) as unknown) as Promise<unknown>
                            ),
                        ]);
                    }),
                    mergeMap((res: any) => {
                        return [
                            saveProfileToDBSucces(res[0].data.createProfile),
                            setBusiness(res[1].data.createEmployee.business),
                            fetchEmployeeSuccess(res[1].data.createEmployee),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [saveProfileToDBFailed()];
                    })
                );
            })
        ),

    (action$) =>
        action$.pipe(
            filterAction('FETCH_EMPLOYEE_BY_ID'),
            mergeMap((action) => {
                return from(
                    (API.graphql(
                        graphqlOperation(getEmployee, { id: action.payload })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        return [
                            fetchEmployeeSuccess(res.data.getEmployee),
                            updateProfileSuccess(res.data.getEmployee.profile),
                            setBusiness(res.data.getEmployee.business),
                            setManager(
                                res.data.getEmployee.business.manager.profile
                            ),
                            setInterlocutor(
                                res.data.getEmployee.business.manager.profile
                            ),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [saveProfileToDBFailed()];
                    })
                );
            })
        ),
    (action$: ActionsObservable<ActionTypes>) =>
        action$.pipe(
            filterAction('GET-USER-LOCATION-REQUEST'),
            mergeMap(() => {
                return from(ajax.getJSON(`https://freegeoip.app/json/`)).pipe(
                    mergeMap((res: any) => {
                        return [getUserLocationSuccess(res)];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [getUserLocationFailed()];
                    })
                );
            })
        ),
    (action$, state$) =>
        action$.pipe(
            filterAction('UPDATE_EMPLOYEE_INFO'),
            mergeMap((action) => {
                console.log(action.type);
                const profile = {
                    id: state$.value.ProfileReducer.profile.id,
                    name: action.payload.name,
                    email: action.payload.email,
                };

                return from(
                    (API.graphql(
                        graphqlOperation(updateProfile, { input: profile })
                    ) as unknown) as Promise<any>
                ).pipe(
                    map((res) => {
                        return updateProfileSuccess(res.data.updateProfile);
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [saveProfileToDBFailed()];
                    })
                );
            })
        ),
];
