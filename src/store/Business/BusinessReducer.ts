// import {  Business } from "../../models/index";
import * as actions from './BusinessActions';

export const initialState: any = {
    loading: false,
    templates: [],
    inputValues: [],
    invitationMethod: 'CUSTOM',
    celebrationType: 'Custom',
    celebration: {
        celebrationName: '',
        celebrationDate: '',
        celebrationTime: '',
        celebrationAddress: '',
        virtualCelebrationLink: '',
        giftRegistryLink: '',
    },
    templateVariables: [
        {variableName: 'familyName', variableValue: 'FamilyName'},
        {variableName: 'brideName', variableValue: 'BrideName'},
        {variableName: 'groomName', variableValue: 'GroomName'}
    ]
};

export const BusinessReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_COMPANY_NAME':
            return {
                ...state,
                templates: action.payload,
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