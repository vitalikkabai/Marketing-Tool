import {  Business } from "../../models/index";
import * as actions from './BusinessActions';

export const initialState: Business = {
    id: "",
    companyName: "",
    country: "",
    city: "",
    businessNumber: "",
    haveExperienceSelling: false,
    storeURL: "",
    haveWebsite: false,
    websiteURL: "",
    ownerName: "",
    ownerEmailAddress: "",
    businessType: "MANUFACTURER",
};

export const BusinessReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_STEP_ONE':
        case 'SET_STEP_TWO':
        case 'SET_STEP_THREE':

            return {
                ...state,
                ... action.payload
            };

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