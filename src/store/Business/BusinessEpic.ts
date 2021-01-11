import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { setStepThree } from './BusinessActions';


export const businessEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType('SET_STEP_ONE'),
    switchMap(async () => {
        
        return setStepThree({ownerName:"foo",ownerEmailAddress:"foo"})

    })
    // mapTo({ type: 'PONG' })
);