import { CreateProfileInput } from '../../API';
import * as actions from './ProfileActions';

const initialState: CreateProfileInput = {
        email: "",
        name: ""
};

export const ProfileReducer = (state = initialState, action: ActionTypes): CreateProfileInput => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                ...action.payload
            };

        // case 'SET_ROLE_TAGS':
        //     return {
        //         ...state,
        //         roleTags: action.payload
        //     };

        case 'SET_PROFILE_ID':
        case 'FETCH_PROFILE_BY_ID':
            return {
                ...state,
                // profile: { ...state.profile, owner: action.payload }
                id: action.payload
            };
        case 'FETCH_PROFILE_BY_ID_SUCCESS':
        case 'SAVE_PROFILE_TO_DB_SUCCESS':
        case 'UPDATE_PROFILE_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        case 'INITIATE_NEW_PROFILE':
            console.log("initiating", action.payload)
            return {
                ...state,
                id: action.payload
            };
        case 'CLEAR_PROFILE': 
            return {
                ...initialState
            }
        case 'SET_PROFILE_IMAGE':
        case 'SAVE_PROFILE_TO_DB_FAILED':
        case 'UPDATE_PERSONAL_INFO':
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