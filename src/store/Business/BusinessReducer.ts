import * as actions from './BusinessActions';
import {Business} from "../../models";
import { CreateBusinessInput } from '../../API';

// interface businessReducer {
//     id: string,
//     companyName: string,
//     country: string,
//     city: string,
//     businessNumber: string,
//     haveExperienceSelling: boolean,
//     storeURLs: string[],
//     haveWebsite: boolean,
//     websiteURLs: string[],
//     roleTags: RoleTags
// }
export const initialState: CreateBusinessInput = {
    companyName: "",
    storeURLs: [],
    websiteURLs: [],
};

export const BusinessReducer = (state: CreateBusinessInput = initialState, action: ActionTypes): CreateBusinessInput => {
    switch (action.type) {
        case 'SET_BUSINESS':
        case 'UPDATE_BUSINESS_SUCCESS':
            return {
                ...action.payload,
            }
        case 'SET_BUSINESS_URLS':
            return {
                ...state,
                storeURLs: action.payload.storeURLs,
                websiteURLs: action.payload.websiteURLs
            };
        case 'SET_STEP_TWO':
            return {
                ...action.payload,
                ...state,
            };
        case 'UPDATE_BUSINESS_FAILED':
            return {
                ...state
            }
        case 'SET_BUSINESS_NAME':
            return {
                ...state,
                companyName: action.payload
            }
        case 'CLEAR_BUSINESS':
            return {
                ...initialState
            }
        case 'UPDATE_BUSINESS':
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

export default BusinessReducer;