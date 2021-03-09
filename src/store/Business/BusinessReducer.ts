import * as actions from './BusinessActions';
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
    companyName: '',
    storeURLs: [],
    websiteURLs: [],
    managerID: 'fddbb0b9-ad57-453f-be7b-7eca392a2408',
};

export const initialPresetState: CreateBusinessInput = {
    companyName: 'Default Company',
    storeURLs: [
        'https://www.figma.com/file/qTbbMNPhweyUIF2goCPl7T/Marketing-Tool?node-id=3%3A1767',
    ],
    websiteURLs: [
        'https://www.figma.com/file/qTbbMNPhweyUIF2goCPl7T/Marketing-Tool?node-id=3%3A1767',
    ],
    managerID: 'fddbb0b9-ad57-453f-be7b-7eca392a2408',
};

export const BusinessReducer = (
    state: CreateBusinessInput = initialState,
    action: ActionTypes
): CreateBusinessInput => {
    switch (action.type) {
        case 'SET_BUSINESS':
        case 'UPDATE_BUSINESS_SUCCESS':{
            return Object.assign({}, state, action.payload);
        }
        case 'SET_BUSINESS_URLS':
            return {
                ...state,
                storeURLs: action.payload.storeURLs,
                websiteURLs: action.payload.websiteURLs,
            };
        case 'SET_STEP_TWO':
            return {
                ...action.payload,
                ...state,
            };
        case 'UPDATE_BUSINESS_FAILED':
            return {
                ...state,
            };
        case 'SET_BUSINESS_NAME':
            return {
                ...state,
                companyName: action.payload,
            };
        case 'UPDATE_BUSINESS':
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default BusinessReducer;
