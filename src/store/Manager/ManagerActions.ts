import { CreateProfileInput } from "../../API";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const setManager = (manager: CreateProfileInput) => ({
    type: 'SET_MANAGER' as const,
    payload: manager
});