/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UserAttributes } from './AuthReducer';

export const signIn = (username: string, password: string) => ({
    type: 'SIGN-IN-REQUEST' as const,
    payload: { username, password },
});

export const initialSignIn = (username: string, password: string) => ({
    type: 'INITIAL-SIGN-IN-REQUEST' as const,
    payload: { username, password },
});

export const signInSuccess = (userAttributes: UserAttributes) => ({
    type: 'SIGN-IN-SUCCESS' as const,
    payload: userAttributes,
});

export const afterSignOut = () => ({
    type: 'AFTER_LOGOUT' as const,
    payload: {}
})

export type errorType = {
    code: string;
    message: string;
    name: string;
};

export const signInFailed = (signInError: errorType) => ({
    type: 'SIGN-IN-FAILED' as const,
    payload: { signInError },
});

export const signUp = (email: string, password: string, username: string) => ({
    type: 'SIGN-UP-REQUEST' as const,
    payload: { email, password, username },
});

export const signUpSuccess = (userID: string) => ({
    type: 'SIGN-UP-SUCCESS' as const,
    payload: userID,
});

export const signUpFailed = (signUpError: errorType) => ({
    type: 'SIGN-UP-FAILED' as const,
    payload: { signUpError },
});

export const signOut = () => ({
    type: 'SIGN-OUT-REQUEST' as const,
});

export const signOutSuccess = () => ({
    type: 'SIGN-OUT-SUCCESS' as const,
});

export const signOutFailed = () => ({
    type: 'SIGN-OUT-FAILED' as const,
});

export const getAuthData = () => ({
    type: 'AUTH-DATA-REQUEST' as const,
    payload: {},
});

export const getAuthDataSuccess = (userAttributes: UserAttributes) => ({
    type: 'AUTH-DATA-SUCCESS' as const,
    payload: userAttributes,
});

export const getAuthDataFailed = () => ({
    type: 'AUTH-DATA-FAILED' as const,
});

export const getResetLink = (email: string) => ({
    type: 'SEND-RESET-LINK' as const,
    payload: { email },
});

export const ResetLinkSuccess = () => ({
    type: 'RESET-LINK-SUCCESS' as const,
});

export const ResetLinkFailed = (resetPasswordError: errorType) => ({
    type: 'RESET-LINK-FAILED' as const,
    payload: { resetPasswordError },
});

export const sendNewPassword = (
    email: string,
    code: string,
    newPassword: string
) => ({
    type: 'SEND-NEW-PASSWORD' as const,
    payload: { email, code, newPassword },
});

export const sendNewPasswordSuccess = () => ({
    type: 'SEND-NEW-PASSWORD-SUCCESS' as const,
});

export const sendNewPasswordFailed = (resetPasswordError: errorType) => ({
    type: 'SEND-NEW-PASSWORD-FAILED' as const,
    payload: { resetPasswordError },
});

export const cleanSuccess = () => ({
    type: 'CLEAR-SUCCESS' as const,
});

export const cleanErrors = () => ({
    type: 'CLEAN-ERROR-FIELDS' as const,
});

export const changePassword = (
    oldPassword: string,
    newPassword: string,
    callback: () => void
) => ({
    type: 'CHANGE_PASSWORD' as const,
    payload: { oldPassword, newPassword, callback },
});

export const changePasswordSuccess = () => ({
    type: 'CHANGE_PASSWORD_SUCCESS' as const,
});

export type changePasswordErrorType = {
    code: '' | 'UserNotFoundException' | 'NotAuthorizedException';
    message: string;
    name: string;
};
export const changePasswordFail = (error: changePasswordErrorType) => ({
    type: 'CHANGE_PASSWORD_FAILED' as const,
    payload: error,
});

export const changePersonalInfo = (name: string, email: string) => ({
    type: 'CHANGE_PERSONAL_INFO' as const,
    payload: { name, email },
});

export const changePersonalInfoSuccess = () => ({
    type: 'CHANGE_PERSONAL_INFO_SUCCESS' as const,
});

export const changePersonalInfoFailed = (error: errorType) => ({
    type: 'CHANGE_PERSONAL_INFO_FAILED' as const,
    payload: { error },
});

export const setHasWebsite = (hasWebsite: boolean) => ({
    type: 'SET_HAS_WEBSITE' as const,
    payload: hasWebsite,
});

export const setHasExperienceSelling = (hasExperienceSelling: boolean) => ({
    type: 'SET_HAS_EXPERIENCE_SELLING' as const,
    payload: hasExperienceSelling
})
