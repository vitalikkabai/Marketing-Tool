import { CreateBusinessInput, CreateManagerInput } from '../../API';
import * as actions from './ManagerActions';

type ManagerReducerType = {
    manager: CreateManagerInput;
    businesses: CreateBusinessInput[];
};

const initialState: ManagerReducerType = {
    manager: {},
    businesses: [],
};

export const ManagerReducer = (
    state: ManagerReducerType = initialState,
    action: ActionTypes
): ManagerReducerType => {
    switch (action.type) {
        case 'SET_MANAGER':
            return {
                ...state,
                manager: action.payload,
            };
        case 'SET_BUSINESSES':
            return {
                ...state,
                businesses: action.payload,
            };
        case 'FETCH_MANAGER_BY_ID_FAILURE':
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ManagerReducer;
