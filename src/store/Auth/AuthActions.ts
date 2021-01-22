/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UserAttributes } from "./AuthReducer";

export const signIn = (username: string, password: string) => ({
    type: "SIGN-IN-REQUEST" as const,
    payload: { username, password }
});

export const initialSignIn = (username: string, password: string) => ({
    type: "INITIAL-SIGN-IN-REQUEST" as const,
    payload: { username, password }
});

export const signInSuccess = (userAttributes: UserAttributes) => ({
    type: "SIGN-IN-SUCCESS" as const,
    payload: userAttributes
});

type signInErrorType = {
    code: "" | "UserNotFoundException" | "NotAuthorizedException"
    message: string
    name: string
}

export const signInFailed = (signInError: signInErrorType) => ({
    type: "SIGN-IN-FAILED" as const,
    payload: { signInError }
});

export const signUp = (email: string, password: string, username: string) => ({
    type: "SIGN-UP-REQUEST" as const,
    payload: { email, password, username }
});

export const signUpSuccess = (userID: string) => ({
    type: "SIGN-UP-SUCCESS" as const,
    payload: userID
});

export const signUpFailed = (signInError: string) => ({
    type: "SIGN-UP-FAILED" as const,
    payload: { signInError }
});

export const signOut = () => ({
    type: "SIGN-OUT-REQUEST" as const
});

export const signOutSuccess = () => ({
    type: "SIGN-OUT-SUCCESS" as const
});

export const signOutFailed = () => ({
    type: "SIGN-OUT-FAILED" as const
});

export const getAuthData = () => ({
    type: "AUTH-DATA-REQUEST" as const,
    payload: {}
});

export const getAuthDataSuccess = (userAttributes: UserAttributes) => ({
    type: "AUTH-DATA-SUCCESS" as const,
    payload: userAttributes
});

export const getAuthDataFailed = () => ({
    type: "AUTH-DATA-FAILED" as const
});

export const getResetLink = (email: string) => ({
    type: "SEND-RESET-LINK" as const,
    payload: { email }
});

export const ResetLinkSuccess = (data: any) => ({
    type: "RESET-LINK-SUCCESS" as const,
});

export const ResetLinkFailed = (err: any) => ({
    type: "RESET-LINK-FAILED" as const,
});

export const sendNewPassword = (email: string, code: string, newPassword: string) => ({
    type: "SEND-NEW-PASSWORD" as const,
    payload: { email, code, newPassword }
});

export const sendNewPasswordSuccess = () => ({
    type: "RESET-LINK-SUCCESS" as const,
});

export const sendNewPasswordFailed = () => ({
    type: "RESET-LINK-FAILED" as const,
});

export const cleanErrors = () => ({
    type: "CLEAN-ERROR-FIELDS" as const,
});


