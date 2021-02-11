import { CreateProfileInput } from '../../API';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const setManager = (manager: CreateProfileInput) => ({
    type: 'SET_MANAGER' as const,
    payload: manager,
});

export const fetchManagerById = (id: string) => ({
    type: 'FETCH_MANAGER_BY_ID' as const,
    payload: id,
});

export const fetchManagerByIdFailure = () => ({
    type: 'FETCH_MANAGER_BY_ID_FAILURE' as const,
});
