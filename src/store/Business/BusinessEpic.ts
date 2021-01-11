import { ActionsObservable, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { setCompanyName } from './BusinessActions'

export const businessEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType('FETCH_TEMPLATE_START'),
    switchMap(async () => {
        
        return setCompanyName('epic')

    })
    // mapTo({ type: 'PONG' })
);