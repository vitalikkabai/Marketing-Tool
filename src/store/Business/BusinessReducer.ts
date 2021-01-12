import {  Business } from "../../models/index";
import * as actions from './BusinessActions';

export const initialState: Business = {
    id: "",
    companyName: "",
    country: "",
    city: "",
    businessNumber: "",
    haveExperienceSelling: false,
    storeURL: [],
    haveWebsite: false,
    websiteURL: [],
    ownerName: "",
    ownerEmailAddress: "",
    businessType: "MANUFACTURER",
};

export const BusinessReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_STEP_ONE':
            return {
                ...state,
                haveWebsite: action.payload.haveWebsite,
                websiteURL: action.payload.websiteURL,
                haveExperienceSelling: action.payload.haveExperienceSelling,
                storeURL: action.payload.storeURL
            };
            case 'SET_STEP_TWO':
            return {
                ...state
            }
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U} 
? U
: never

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default BusinessReducer;