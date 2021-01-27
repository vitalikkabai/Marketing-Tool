import * as actions from './BusinessActions';
import {Business} from "../../models";

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
export const getInitialState = ():Business => new Business({
    companyName: "",
    country: "",
    city: "",
    businessNumber: "",
    haveExperienceSelling: true,
    storeURLs: [],
    haveWebsite: true,
    websiteURLs: [],
    roleTags: {
        Sales: false,
        Marketing: false,
        Logistics: false,
        Accounting: false,
        Production: false,
        QC: false
    }
});

export const BusinessReducer = (state: Business = getInitialState(), action: ActionTypes): Business => {
    switch (action.type) {
        case 'SET_STEP_ONE':
            return {
                ...state,
                ...action.payload
            };
        case 'SET_STEP_TWO':
            return {
                ...state,
                ...action.payload
            };
        case 'SAVE_BUSINESS_TO_DB_SUCCESS':
            return {
                ...state
            }
        case 'SAVE_BUSINESS_TO_DB_FAILED':
            return {
                ...state
            }
        case 'SET_ROLE_TAGS':
            return {
                ...state, roleTags: action.payload
            }
        case 'CLEAR_BUSINESS':
            return {
                ...getInitialState()
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