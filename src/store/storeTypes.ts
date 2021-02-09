import { ActionTypes as AuthActionTypes } from './Auth/AuthReducer';
import { ActionTypes as BusinessActionTypes } from './Business/BusinessReducer';
import { ActionTypes as ProfileActionTypes } from './Profile/ProfileReducer';
import { ActionTypes as EmployeeActionTypes } from './Employee/EmployeeReducer';
import { ActionTypes as MessageActionTypes } from './Message/MessageReducer';
import { ActionTypes as ManagerActionTypes } from './Manager/ManagerReducer';


export type ActionTypes = AuthActionTypes |
    BusinessActionTypes |
    ProfileActionTypes |
    EmployeeActionTypes |
    MessageActionTypes |
    ManagerActionTypes