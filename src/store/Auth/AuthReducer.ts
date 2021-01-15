import * as actions from './AuthActions';

interface AuthReducerType {
    isAuth: boolean,
    initialized: boolean,
    userID: string
}
export const initialState = {
    isAuth: false,
    initialized: false,
    userID: "",
};

export const AuthReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {

        case "SIGN-IN-SUCCESS":
            return {
                ...state,
                ...action.payload,
            };

        case "SIGN-OUT-SUCCESS":
            return {
                ...state,
                ...action.payload
            };

        case "SIGN-UP-SUCCESS":
            return {
                ...state,
                userID: action.payload
            };

        case "SIGN-UP-FAILED":
            return {
                ...state,
                ...action.payload
            };

        case "AUTH-DATA-SUCCESS":
            return {
                ...state,
                userID: action.payload,
                initialized: true,
                isAuth: true
            };
        case "AUTH-DATA-FAILED":
            return {
                ...state,
                initialized: true
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