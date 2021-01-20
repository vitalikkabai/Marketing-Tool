/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ProfileType } from "./ProfileReducer";

export const setProfile = (profileData: ProfileType) => ({
    type: 'SET_PROFILE_DATA' as const,
    payload: profileData
});

export const saveProfileToDB = () => ({
    type: 'SAVE_PROFILE_TO_DB' as const
});

export const saveProfileToDBSucces = () => ({
    type: 'SAVE_PROFILE_TO_DB_SUCCESS' as const,
});

export const saveProfileToDBFailed = (err: string) => ({
    type: 'SAVE_PROFILE_TO_DB_FAILED' as const,
    payload: err
});