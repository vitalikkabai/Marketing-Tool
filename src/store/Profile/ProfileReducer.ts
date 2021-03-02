import { CreateProfileInput } from '../../API';
import * as actions from './ProfileActions';

type ProfileReducerType = {
    profile: CreateProfileInput;
    avatarURL: string;
    isPending: boolean
};
const initialState: ProfileReducerType = {
    profile: {
        name: '',
        email: '',
    },
    avatarURL: '',
    isPending: false,
};

// const initialPresetState: ProfileReducerType = {
//     profile: {
//         email: 'def@ault.email',
//         name: 'Default name',
//     },
//     avatarURL: '',
// };

export const ProfileReducer = (
    state: ProfileReducerType = initialState,
    action: ActionTypes
): ProfileReducerType => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                profile: { ...action.payload },
            };

        case 'UPDATE_PERSONAL_INFO':
            return {
                ...state,
                isPending: true
            };

        case 'SET_PROFILE_ID':
        case 'FETCH_PROFILE_BY_ID':
        case 'INITIATE_NEW_PROFILE':
            return {
                ...state,
                profile: { ...state.profile, id: action.payload },
            };
        case 'FETCH_PROFILE_BY_ID_SUCCESS':
        case 'SAVE_PROFILE_TO_DB_SUCCESS':
        case 'UPDATE_PROFILE_SUCCESS':
            return {
                ...state,
                profile: { ...action.payload },
                isPending: false
            };
        case 'SAVE_PROFILE_TO_DB_FAILED':
            return {
                ...state,
                isPending: false
            };
        case 'SET_PROFILE_AVATAR_URL':
            return {
                ...state,
                avatarURL: action.payload,
            };
        case 'SET_PROFILE_IMAGE':
        case 'SET_PROFILE_AVATAR_URL_FAILED':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ProfileReducer;
