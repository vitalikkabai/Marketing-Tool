import { CreateEmployeeInput } from '../../API';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CreateProfileInput } from '../../API';
import { RoleTags } from '../../models';

export const setEmployee = (employee: CreateEmployeeInput) => ({
    type: 'SET_EMPLOYEE_DATA' as const,
    payload: employee,
});

export const setProfileID = (profileID: string) => ({
    type: 'SET_PROFILE_ID' as const,
    payload: profileID,
});

// export const saveProfileToDB = () => ({
//     type: 'SAVE_PROFILE_TO_DB' as const
// });

export const setRoleTags = (roleTags: RoleTags) => ({
    type: 'SET_ROLE_TAGS' as const,
    payload: roleTags,
});

export const initiateNewEmployee = (id: string) => ({
    type: 'INITIATE_NEW_EMPLOYEE' as const,
    payload: id,
});

export const saveProfileToDBFailed = () => ({
    type: 'SAVE_PROFILE_TO_DB_FAILED' as const,
});

export const fetchEmployeeById = (id: string) => ({
    type: 'FETCH_EMPLOYEE_BY_ID' as const,
    payload: id,
});

export const fetchEmployeeSuccess = (employee: CreateEmployeeInput) => ({
    type: 'FETCH_EMPLOYEE_SUCCESS' as const,
    payload: employee,
});

export const updateEmployeeSuccess = (profile: CreateProfileInput) => ({
    type: 'UPDATE_PROFILE_SUCCESS' as const,
    payload: profile,
});

export const updateEmployeeInfo = (name: string, email: string) => ({
    type: 'UPDATE_EMPLOYEE_INFO' as const,
    payload: { name, email },
});

export const getUserLocation = () => ({
    type: 'GET-USER-LOCATION-REQUEST' as const,
    payload: {},
});

export const getUserLocationSuccess = (result: any) => ({
    type: 'GET-USER-LOCATION-SUCCESS' as const,
    payload: result.country_code,
});

export const getUserLocationFailed = () => ({
    type: 'GET-USER-LOCATION-FAILED' as const,
});
