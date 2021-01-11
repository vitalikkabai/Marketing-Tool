import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { businessEpic } from "./Business/BusinessEpic";
import BusinessReducer from './Business/BusinessReducer';
import { catchError } from 'rxjs/operators';

const rootEpic = (action$: any, store$: any, dependencies: any) =>
    combineEpics(businessEpic)(action$,store$,dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );


const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
    BusinessReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

(window as any).store = store;

export default store;