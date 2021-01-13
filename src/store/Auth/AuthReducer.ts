import * as actions from './AuthActions';

export const initialState = {
    isAuth: false,
    autoauthComplete: false
};

export const AuthReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {

        case "SIGN-IN-SUCCESS":
            return {
                ...state,
                ...action.payload
            };

        case "SIGN-OUT-SUCCESS":
            return {
                ...state,
                ...action.payload
            };

        case "SIGN-OUT-FAILED":
            return {
                ...state,
                ...action.payload
            };

        case "AUTH-DATA-SUCCESS":
            return {
                ...state,
                ...action.payload,
                autoauthComplete: true
            };
        case "AUTH-DATA-FAILED":
            return {
                ...state,
                autoauthComplete: true
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