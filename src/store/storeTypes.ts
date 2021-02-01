import { ActionTypes as AuthActionTypes } from './Auth/AuthReducer';
import { ActionTypes as BusinessActionTypes } from './Business/BusinessReducer';
import { ActionTypes as ProfileActionTypes } from './Profile/ProfileReducer';
import { ActionTypes as EmployeeActionTypes } from './Employee/EmployeeReducer';

export type ActionTypes = AuthActionTypes | BusinessActionTypes | ProfileActionTypes | EmployeeActionTypes