import * as actions from './AuthActions';


export interface UserAttributes {
    userID: string,
    email: string,
    emailVerified: boolean,
    userName: string
}

export type InitialStateType = typeof initialState;

const initialUserAttributes = {
    userID: "",
    email: "",
    emailVerified: false,
    userName: ""
}

const initialState = {
    isAuth: false,
    initialized: false,
    userAttributes: initialUserAttributes,
    loginErrorMessage: {
        code: "",
        message: "",
        name: "",
    },
    registerErrorMessage: {
        code: "",
        message: "",
        name: "",
    }
};

export const AuthReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case "SIGN-IN-SUCCESS":
            return {
                ...state,
                isAuth: true,
                initialized: true,
                userAttributes: action.payload,
            };

        case "SIGN-IN-FAILED":
            return {
                ...state,
                loginErrorMessage: action.payload.signInError,
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
                userAttributes: { ...state.userAttributes, userID: action.payload }
            };

        case "SIGN-UP-FAILED":
            return {
                ...state,
                registerErrorMessage: action.payload.signUpError
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
        case "CLEAN-ERROR-FIELDS":
            return {
                ...state,
                loginErrorMessage: {
                    code: "",
                    message: "",
                    name: "",
                },
            };
        case "CHANGE_PASSWORD_FAILED": {
            return {
                ...state,
            }
        }
        case "CHANGE_PASSWORD":
        case "CHANGE_PASSWORD_SUCCESS":
        case "CHANGE_PERSONAL_INFO":
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