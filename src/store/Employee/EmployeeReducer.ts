import { CreateEmployeeInput } from '../../API';
import * as actions from './EmployeeActions';
import data from '../../assets/dataset/country/countries';

const initialState: CreateEmployeeInput = {
    businessID: '',
    roleTags: {
        sales: false,
        marketing: false,
        logistics: false,
        accounting: false,
        production: false,
        qualityControl: false,
    },
    phoneNumber: '',
    countryCode: {
        code: '',
        label: '',
        phone: '',
    },
};

// const initialPresetState: CreateEmployeeInput = {
//     businessID: '',
//     roleTags: {
//         sales: false,
//         marketing: false,
//         logistics: true,
//         accounting: true,
//         production: false,
//         qualityControl: false,
//     },
//     phoneNumber: '3434343434',
//     countryCode: {
//         code: '',
//         label: '',
//         phone: '',
//     },
// };

export const EmployeeReducer = (
    state = initialState,
    action: ActionTypes
): CreateEmployeeInput => {
    switch (action.type) {
        case 'SET_EMPLOYEE_DATA':
        case 'FETCH_EMPLOYEE_SUCCESS':
            return {
                ...state,
                ...action.payload,
            };
        case 'SET_ROLE_TAGS':
            return {
                ...state,
                roleTags: action.payload,
            };
        case 'GET-USER-LOCATION-SUCCESS': {
            const userCode = data.find((x) => x.code === action.payload);
            if (userCode !== undefined)
                return {
                    ...state,
                    countryCode: {
                        code: userCode.code,
                        label: userCode.label,
                        phone: userCode.phone,
                    },
                };
            else
                return {
                    ...state,
                };
        }
        case 'FETCH_EMPLOYEE_BY_ID':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default EmployeeReducer;
