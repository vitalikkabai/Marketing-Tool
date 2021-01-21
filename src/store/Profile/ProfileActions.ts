/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Profile } from "../../models";

export const setProfile = (profileData: Profile) => ({
    type: 'SET_PROFILE_DATA' as const,
    payload: profileData
});

export const setProfileID = (profileID: string) => ({
    type: 'SET_PROFILE_ID' as const,
    payload: profileID
});

export const saveProfileToDB = () => ({
    type: 'SAVE_PROFILE_TO_DB' as const
});

export const initiateNewProfile = () => ({
    type: 'INITIATE_NEW_PROFILE' as const
});

export const saveProfileToDBSucces = () => ({
    type: 'SAVE_PROFILE_TO_DB_SUCCESS' as const,
});

export const saveProfileToDBFailed = (err: string) => ({
    type: 'SAVE_PROFILE_TO_DB_FAILED' as const,
    payload: err
});