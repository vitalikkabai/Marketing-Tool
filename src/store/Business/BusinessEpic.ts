import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { saveBusinessToDB } from './BusinessActions';
import { ActionTypes } from './BusinessReducer';


export const businessEpic = (action$: ActionsObservable<ActionTypes>) => action$.pipe(
    ofType('SAVE_BUSINESS_TO_DB'),
    switchMap(async () => {
        
        return saveBusinessToDB();

    })
    // mapTo({ type: 'PONG' })
);