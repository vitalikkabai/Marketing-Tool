import { ActionsObservable, Epic, ofType, StateObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { updateBusinessInDBFailed, updateBusinessInDBSucces } from './BusinessActions';
import { ActionTypes } from './BusinessReducer';
import { ActionTypes as ProfileActionTypes } from '../Profile/ProfileReducer';
import { Business } from '../../models';
import { AppStateType } from '../store';
import { createBusiness, updateBusiness } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { setProfile } from '../Profile/ProfileActions';

export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$, state$) => action$.pipe(
    ofType('UPDATE_BUSINESS'),
    mergeMap((action: any) => {
        // const businessUpdates = {id: action.payload.id,};
        // const businessObject = new Business({ ...businessData });
        return from(API.graphql(graphqlOperation(updateBusiness, { input: action.payload })) as unknown as Promise<any>).pipe(
            mergeMap(res => {console.log(res); return [
                updateBusinessInDBSucces(res.data.updateBusiness),
                // setProfile({...state$.value.ProfileReducer, business: res.data.updateBusiness})
            ] }),
            catchError(err => { console.log(err); return [updateBusinessInDBFailed(err)] })
        )

    })
)
]