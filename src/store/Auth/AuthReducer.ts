import * as actions from './AuthActions';


export interface UserAttributes{
    userID: string,
    email: string,
    emailVerified: boolean,
    userName: string
}
interface AuthReducerType {
    isAuth: boolean,
    initialized: boolean,
    userAttributes: UserAttributes
}

const initialUserAttributes = {
    userID: "",
    email: "",
    emailVerified: false,
    userName: ""
}
const initialState = {
    isAuth: false,
    initialized: false,
    userAttributes: initialUserAttributes

};

export const AuthReducer = (state: AuthReducerType = initialState, action: ActionTypes): AuthReducerType => {
    switch (action.type) {

        case "SIGN-IN-SUCCESS":
            return {
                ...state,
                isAuth: true,
                initialized: true,
                userAttributes: action.payload,
                
            };

        case "SIGN-OUT-SUCCESS":
            return {
                ...state,
                isAuth: false,
                userAttributes: initialUserAttributes
            };

        case "SIGN-UP-SUCCESS":
            return {
                ...state,
                isAuth: true,
                userAttributes: {...state.userAttributes, userID: action.payload}
            };

        case "SIGN-UP-FAILED":
            return {
                ...state,
                ...action.payload
            };

        case "AUTH-DATA-SUCCESS":
            return {
                ...state,
                userAttributes: action.payload,
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