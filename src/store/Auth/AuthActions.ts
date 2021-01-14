/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const signIn = (username: string, password: string) => ({
    type: "SIGN-IN-REQUEST" as const,
    payload: {username, password}
});

export const signInSuccess = (signInData: string) => ({
    type: "SIGN-IN-SUCCESS" as const,
    payload: {signInData, isAuth: true}
});

export const signInFailed = (signInError: string) => ({
    type: "SIGN-IN-FAILED" as const,
    payload: {signInError}
});

export const signUp = (username: string, password: string) => ({
    type: "SIGN-UP-REQUEST" as const,
    payload: {username, password}
});

export const signUpSuccess = (userID: string) => ({
    type: "SIGN-UP-SUCCESS" as const,
    payload: userID
});

export const signUpFailed = (signInError: string) => ({
    type: "SIGN-UP-FAILED" as const,
    payload: {signInError}
});

export const signOut = () => ({
    type: "SIGN-OUT-REQUEST" as const
});

export const signOutSuccess = () => ({
    type: "SIGN-OUT-SUCCESS" as const,
    payload: {isAuth: false}
});

export const signOutFailed = () => ({
    type: "SIGN-OUT-FAILED" as const
});

export const getAuthData = () => ({
    type: "AUTH-DATA-REQUEST" as const,
    payload: {}
});

export const getAuthDataSuccess = (userData: string) => ({
    type: "AUTH-DATA-SUCCESS" as const,
    payload: {userData, isAuth: true}
});

export const getAuthDataFailed = () => ({
    type: "AUTH-DATA-FAILED" as const
});