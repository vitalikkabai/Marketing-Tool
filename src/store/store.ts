import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { businessEpic } from "./Business/BusinessEpic";
import BusinessReducer from './Business/BusinessReducer';
import { catchError } from 'rxjs/operators';
import AuthReducer from "./Auth/AuthReducer";
import {getAuthDataEpic, signInEpic, signOutEpic, signUpEpic} from "./Auth/AuthEpic";


const rootEpic = (action$: any, store$: any, dependencies: any) =>
    combineEpics(businessEpic, signInEpic, signOutEpic, getAuthDataEpic, signUpEpic)(action$,store$,dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
    BusinessReducer,
    AuthReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

(window as any).store = store;

export default store;