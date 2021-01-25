import { Profile } from '../../models';
import * as actions from './ProfileActions';

export interface ProfileType {
    profile: Profile,
    avatarSrc?: string
}
export const initialState = {
    profile: new Profile({
        email: "",
        name: "",
        businessID: ""
    }),
    avatarSrc: ""
}


export const ProfileReducer = (state: ProfileType = initialState, action: ActionTypes): ProfileType => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                profile: action.payload
            };
        case 'SET_PROFILE_ID':
        case 'FETCH_PROFILE_BY_ID':
            return {
                ...state,
                profile: {...state.profile, owner: action.payload}
            };
        case 'FETCH_PROFILE_BY_ID_SUCCESS':
            return {
                ...state,
                profile: {...action.payload}
            }
        case 'SET_PROFILE_IMAGE':
            return {
                ...state,
                profile: {...state.profile, avatar: action.payload.s3}
            };
        case 'SAVE_PROFILE_TO_DB':
        case 'SAVE_PROFILE_TO_DB_SUCCESS':
        case 'SAVE_PROFILE_TO_DB_FAILED':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ProfileReducer;