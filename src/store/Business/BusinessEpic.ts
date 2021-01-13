import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { saveBusinessToDB } from './BusinessActions';
import { ActionTypes } from './BusinessReducer';


export const businessEpic = (action$: ActionsObservable<ActionTypes>) => action$.pipe(
    ofType('SAVE_BUSINESS_TO_DB'),
    switchMap(async () => {
        console.log("Saving to db")
        return {type: "SAVED_EPIC_COMPLETE"};

    })
    // mapTo({ type: 'PONG' })
);