import { CreateBusinessInput, CreateManagerInput } from '../../API';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const setManager = (manager: CreateManagerInput) => ({
    type: 'SET_MANAGER' as const,
    payload: manager,
});

export const setBusinesses = (businesses: CreateBusinessInput[]) => ({
    type: 'SET_BUSINESSES' as const,
    payload: businesses,
});

export const fetchManagerById = (id: string) => ({
    type: 'FETCH_MANAGER_BY_ID' as const,
    payload: id,
});

export const fetchManagerByIdFailure = () => ({
    type: 'FETCH_MANAGER_BY_ID_FAILURE' as const,
});
