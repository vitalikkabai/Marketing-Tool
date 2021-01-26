import { Profile } from '../../models';
import * as actions from './ProfileActions';


export interface ProfileType {
    profile: Profile,
}
export const getInitialState = () => ({
    profile: new Profile({
        email: "",
        name: "",
        businessID: ""
    })
});


export const ProfileReducer = (state: ProfileType = getInitialState(), action: ActionTypes): ProfileType => {
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
                profile: { ...state.profile, owner: action.payload }
            };
        case 'FETCH_PROFILE_BY_ID_SUCCESS':
        case 'SAVE_PROFILE_TO_DB_SUCCESS':

            return {
                ...state,
                profile: { ...action.payload }
            }
        case 'CLEAR_PROFILE': 
            return {
                ...getInitialState()
            }
        case 'SET_PROFILE_IMAGE':
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