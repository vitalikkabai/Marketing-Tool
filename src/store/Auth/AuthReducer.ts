import * as actions from './AuthActions';

export const initialState = {

};

export const AuthReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {

        case 'SIGN-IN-REQUEST':
            return {
                ...state,
                ...action.payload
            };

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

export default AuthReducer;