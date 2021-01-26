/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Profile, S3Object } from "../../models";

export const setProfile = (profileData: Profile) => ({
    type: 'SET_PROFILE_DATA' as const,
    payload: profileData
});

export const setProfileID = (profileID: string) => ({
    type: 'SET_PROFILE_ID' as const,
    payload: profileID
});

// export const saveProfileToDB = () => ({
//     type: 'SAVE_PROFILE_TO_DB' as const
// });

export const initiateNewProfile = () => ({
    type: 'INITIATE_NEW_PROFILE' as const
});

export const clearProfile = () => ({
    type: 'CLEAR_PROFILE' as const
});

export const saveProfileToDBSucces = (profile: Profile) => ({
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

export const fetchProfileByIdSuccess = (profile: Profile) => ({
    type: 'FETCH_PROFILE_BY_ID_SUCCESS' as const,
    payload: profile
})

export const updateProfileSuccess = (profile: Profile) => ({
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