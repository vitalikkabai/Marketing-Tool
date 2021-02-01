import { CreateEmployeeInput } from './../../API';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CreateProfileInput } from "../../API";
import { Profile, RoleTags, S3Object } from "../../models";

export const setEmployee = (employee: CreateEmployeeInput) => ({
    type: 'SET_EMPLOYEE_DATA' as const,
    payload: employee
});

export const setProfileID = (profileID: string) => ({
    type: 'SET_PROFILE_ID' as const,
    payload: profileID
});

// export const saveProfileToDB = () => ({
//     type: 'SAVE_PROFILE_TO_DB' as const
// });

export const setRoleTags = (roleTags: RoleTags) => ( {
    type: 'SET_ROLE_TAGS' as const,
    payload: roleTags
});

export const initiateNewEmployee = (id: string) => ({
    type: 'INITIATE_NEW_EMPLOYEE' as const,
    payload: id
});

export const clearProfile = () => ({
    type: 'CLEAR_PROFILE' as const
});

export const saveProfileToDBSucces = (profile: CreateProfileInput) => ({
    type: 'SAVE_PROFILE_TO_DB_SUCCESS' as const,
    payload: profile
});

export const saveProfileToDBFailed = () => ({
    type: 'SAVE_PROFILE_TO_DB_FAILED' as const,
});

export const fetchProfileById = (id: string) => ({
    type: 'FETCH_PROFILE_BY_ID' as const,
    payload: id
});

export const fetchProfileByIdSuccess = (profile: CreateProfileInput) => ({
    type: 'FETCH_PROFILE_BY_ID_SUCCESS' as const,
    payload: profile
})

export const updateProfileSuccess = (profile: CreateProfileInput) => ({
    type: 'UPDATE_PROFILE_SUCCESS' as const,
    payload: profile
})

export const saveProfileImage = (s3: S3Object, bufferImg: Buffer) => ({
    type: 'SET_PROFILE_IMAGE' as const,
    payload: {s3, bufferImg}
})

export const updatePersonalInfo = (name: string, email: string) => ({
    type: 'UPDATE_PERSONAL_INFO' as const,
    payload: {name, email}
})