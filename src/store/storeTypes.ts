import { ActionTypes as AuthActionTypes } from './Auth/AuthReducer';
import { ActionTypes as BusinessActionTypes } from './Business/BusinessReducer';
import { ActionTypes as ProfileActionTypes } from './Profile/ProfileReducer';
import { ActionTypes as EmployeeActionTypes } from './Employee/EmployeeReducer';
import { ActionTypes as MessageActionTypes } from './Message/MessageReducer';

export type ActionTypes = AuthActionTypes |
    BusinessActionTypes |
    ProfileActionTypes |
    EmployeeActionTypes |
    MessageActionTypes