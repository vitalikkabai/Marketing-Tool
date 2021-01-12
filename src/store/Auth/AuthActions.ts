interface userDataType {
    email: string,
    userName: string,
    password: string
}

export const setUserData = (signUpData: userDataType) => ( {
    type: 'SET-USER-DATA' as const,
    payload: signUpData
});

export const signIn = (username: string, password: string) => ({
    type: "SIGN-IN-REQUEST",
    payload: {username, password}
});