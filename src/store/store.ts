import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { businessEpic } from "./Business/BusinessEpic";
import BusinessReducer from './Business/BusinessReducer';
import { catchError } from 'rxjs/operators';
import AuthReducer from "./Auth/AuthReducer";
import { getAuthDataEpic, sendResetLinkEpic, signInEpic, signOutEpic, signUpEpic, sendNewPasswordEpic } from "./Auth/AuthEpic";
import ProfileReducer from "./Profile/ProfileReducer";
import ProfileEpics from "./Profile/ProfileEpic";

const rootEpic = (action$: any, store$: any, dependencies: any) =>
    combineEpics(businessEpic, signInEpic, signOutEpic, getAuthDataEpic, signUpEpic, sendResetLinkEpic, sendNewPasswordEpic, ...ProfileEpics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
    BusinessReducer,
    AuthReducer,
    ProfileReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

(window as any).store = store;

export default store;