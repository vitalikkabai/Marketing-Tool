import { Profile } from '../../models';
import * as actions from './ProfileActions';

export interface ProfileType {
    profile: Profile,
    avatarSrc: string
}
export const initialState = {
    profile: new Profile({
        ownerUID: "",
        email: "",
        name: ""
    }),
    avatarSrc: ""
}


export const ProfileReducer = (state: ProfileType = initialState, action: ActionTypes): ProfileType => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                ...action.payload
            };
        case 'SAVE_PROFILE_TO_DB_SUCCESS':
            return {
                ...state
            }
        case 'SAVE_PROFILE_TO_DB_FAILED':
            return {
                ...state
            }
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