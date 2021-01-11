interface userDataType {
    email: string,
    userName: string,
    password: string
}

export const setUserData = (signUpData: userDataType) => ( {
    type: 'SET-USER-DATA' as const,
    payload: signUpData
});

interface signInDataType {
    username: string,
    password: string
}

export const signIn = (signInData: signInDataType) => ({
    type: "SIGN-IN-REQUEST",
    payload: signInData
});