import * as actions from './AuthActions';

export enum Occupation {
    EMPLOYEE = 0,
    MANAGER = 1,
    FREELANCERS = 2,
    ADMINS = 3,
}
export interface UserAttributes {
    userID: string;
    occupation: Occupation;
}

export type InitialStateType = typeof initialState;

const initialUserAttributes: UserAttributes = {
    userID: '',
    occupation: Occupation.EMPLOYEE,
};

const initialState = {
    isAuth: false,
    isPending: false,
    initialized: false,
    isSendResetLinkSuccess: false,
    isResetPasswordSuccess: false,
    resetEmailAddress: "",
    userAttributes: initialUserAttributes,
    hasWebsite: true,
    hasExperienceSelling: true,
    loginErrorMessage: {
        code: '',
        message: '',
        name: '',
    },
    registerErrorMessage: {
        code: '',
        message: '',
        name: '',
    },
    sendResetLinkError: {
        code: '',
        message: '',
        name: '',
    },
    changeInfoErrorMessage: {
        code: '',
        message: '',
        name: '',
    },
};

export const AuthReducer = (
    state = initialState,
    action: ActionTypes
): InitialStateType => {
    switch (action.type) {
        case 'SIGN-IN-SUCCESS':
            return {
                ...state,
                isAuth: true,
                initialized: true,
                userAttributes: action.payload,
            };

        case 'SIGN-IN-FAILED':
            return {
                ...state,
                loginErrorMessage: action.payload.signInError,
            };

        case 'SIGN-OUT-SUCCESS':
            return {
                ...state,
                isAuth: false,
                userAttributes: initialUserAttributes,
            };

        case 'SIGN-UP-SUCCESS':
            return {
                ...state,
                isAuth: true,
                userAttributes: {
                    ...state.userAttributes,
                    userID: action.payload,
                },
            };

        case 'SIGN-UP-FAILED':
            return {
                ...state,
                registerErrorMessage: action.payload.signUpError,
            };

        case 'AUTH-DATA-SUCCESS':
            return {
                ...state,
                userAttributes: action.payload,
                initialized: true,
                isAuth: true,
            };

        case 'AUTH-DATA-FAILED':
        case 'AFTER_LOGOUT':
            return {
                ...state,
                initialized: true,
            };

        case 'SEND-RESET-LINK': {
            return {
                ...state,
                resetEmailAddress: action.payload.email,
                isPending: true
            };
        }

        case 'RESET-LINK-SUCCESS': {
            return {
                ...state,
                isSendResetLinkSuccess: true,
                isPending: false
            };
        }
        case 'RESET-LINK-FAILED': {
            return {
                ...state,
                sendResetLinkError: action.payload.resetPasswordError,
                isPending: false
            };
        }
        case 'SEND-NEW-PASSWORD': {
            return {
                ...state,
                isPending: true
            }
        }
        case 'SEND-NEW-PASSWORD-SUCCESS': {
            return {
                ...state,
                isResetPasswordSuccess: true,
                isPending: false
            };
        }
        case 'SEND-NEW-PASSWORD-FAILED': {
            return {
                ...state,
                sendResetLinkError: action.payload.resetPasswordError,
                isPending: false
            };
        }
        case 'CLEAR-SUCCESS': {
            return {
                ...state,
                isSendResetLinkSuccess: false,
                isResetPasswordSuccess: false,
            };
        }
        case 'SET_HAS_WEBSITE': {
            return {
                ...state,
                hasWebsite: action.payload
            }
        }
        case 'SET_HAS_EXPERIENCE_SELLING': {
            return {
                ...state,
                hasExperienceSelling: action.payload
            }
        }
        case 'CHANGE_PERSONAL_INFO_FAILED': {
            return {
                ...state,
                changeInfoErrorMessage: action.payload.error
            }
        }
        case 'CHANGE_PASSWORD': {
            return {
                ...state,
                isPending: true
            }
        }

        case 'CHANGE_PASSWORD_FAILED':
        case 'CHANGE_PASSWORD_SUCCESS':
        case 'CHANGE_PERSONAL_INFO':
        case 'CLEAN-ERROR-FIELDS':
            return {
                ...state,
                loginErrorMessage: {
                    code: '',
                    message: '',
                    name: '',
                },
                registerErrorMessage: {
                    code: '',
                    message: '',
                    name: '',
                },
                sendResetLinkError: {
                    code: '',
                    message: '',
                    name: '',
                },
            };
        default:
            return {
                ...state,
            };
    }
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default AuthReducer;
