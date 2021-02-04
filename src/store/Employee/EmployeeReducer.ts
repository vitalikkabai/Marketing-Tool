import { CreateEmployeeInput } from '../../API';
import * as actions from './EmployeeActions';

const initialState: CreateEmployeeInput = {
        businessID: "",
        roleTags: {
           sales: false,
           marketing: false,
           logistics: false,
           accounting: false,
           production: false,
           qualityControl: false 
        },
        phoneNumber: "",
        countryCode: {
            code: "",
            label: "",
            phone: ""
        }
};

const initialPresetState: CreateEmployeeInput = {
    businessID: "",
    roleTags: {
       sales: false,
       marketing: false,
       logistics: true,
       accounting: true,
       production: false,
       qualityControl: false 
    },
    phoneNumber: "3434343434",
    countryCode: {
        code: "UA",
        label: "Ukraine",
        phone: "380"
    }
};

export const EmployeeReducer = (state = initialPresetState, action: ActionTypes): CreateEmployeeInput => {
    switch (action.type) {
        case 'SET_EMPLOYEE_DATA':
        case 'FETCH_EMPLOYEE_SUCCESS':
            return {
                ...state, ...action.payload
            }
        case 'SET_ROLE_TAGS':
            return {
                ...state,
                roleTags: action.payload
            };
        case 'CLEAR_EMPLOYEE':
            return {
                ...initialState
            }
        case 'FETCH_EMPLOYEE_BY_ID':
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

export default EmployeeReducer;