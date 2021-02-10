import { CreateProfileInput } from '../../API';
import * as actions from './ManagerActions';

type ManagerReducer = {
    manager: CreateProfileInput
}

const initialState: ManagerReducer = {
    manager: {
        name: "",
        email: ""
    }
};

export const ManagerReducer = (state = initialState, action: ActionTypes): ManagerReducer => {
    switch (action.type) {
        case 'SET_MANAGER': 
        return {
            ...state,
            manager: action.payload
        };
        case 'FETCH_MANAGER_BY_ID_FAILURE':
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

export default ManagerReducer;