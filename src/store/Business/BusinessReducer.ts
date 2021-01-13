import * as actions from './BusinessActions';

interface businessReducer {
    id: string,
    companyName: string,
    country: string,
    city: string,
    businessNumber: string,
    haveExperienceSelling: boolean,
    storeURLs: string[],
    haveWebsite: boolean,
    websiteURLs: string[],
    ownerName: string,
    ownerEmailAddress: string,
}
export const initialState = {
    id: "",
    companyName: "",
    country: "",
    city: "",
    businessNumber: "",
    haveExperienceSelling: false,
    storeURLs: [""],
    haveWebsite: false,
    websiteURLs: [""],
    ownerName: "",
    ownerEmailAddress: ""
};

export const BusinessReducer = (state:businessReducer = initialState, action: ActionTypes):businessReducer => {
    switch (action.type) {
        case 'SET_STEP_ONE':
            return {
                ...state,
                haveWebsite: action.payload.haveWebsite,
                websiteURLs: action.payload.websiteURLs,
                haveExperienceSelling: action.payload.haveExperienceSelling,
                storeURLs: action.payload.storeURLs
            };
        case 'SET_STEP_TWO':
            return {
                ...state,
                companyName: action.payload.companyName
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