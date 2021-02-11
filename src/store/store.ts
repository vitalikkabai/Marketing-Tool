/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmployeeReducer } from './Employee/EmployeeReducer';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import businessEpic from './Business/BusinessEpic';
import EmployeeEpics from './Employee/EmployeeEpic';
import BusinessReducer from './Business/BusinessReducer';
import { catchError } from 'rxjs/operators';
import AuthReducer from './Auth/AuthReducer';
import AuthEpics from './Auth/AuthEpic';
import ManagerEpics from './Manager/ManagerEpic';
import ProfileReducer from './Profile/ProfileReducer';
import ProfileEpics from './Profile/ProfileEpic';
import MessageEpics from './Message/MessageEpic';
import MessageReducer from './Message/MessageReducer';
import ManagerReducer from './Manager/ManagerReducer';
import ProductReducer from './Product/ProductReducer';

const rootEpic = (action$: any, store$: any, dependencies: any) =>
    combineEpics(
        ...businessEpic,
        ...AuthEpics,
        ...ProfileEpics,
        ...EmployeeEpics,
        ...MessageEpics,
        ...ManagerEpics
    )(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
    EmployeeReducer,
    BusinessReducer,
    AuthReducer,
    ProfileReducer,
    MessageReducer,
    ManagerReducer,
    ProductReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).store = store;

export default store;
