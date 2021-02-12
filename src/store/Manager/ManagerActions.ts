import { CreateManagerInput } from '../../API';
import { DetailedBusiness } from './ManagerReducer';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const setManager = (manager: CreateManagerInput) => ({
    type: 'SET_MANAGER' as const,
    payload: manager,
});

export const setBusinesses = (businesses: DetailedBusiness[]) => ({
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
