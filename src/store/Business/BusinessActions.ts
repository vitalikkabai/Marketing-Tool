/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { RoleTags } from "../../models";

export interface stepOneData {
    haveExperienceSelling: boolean | undefined,
    storeURLs: string[],
    haveWebsite: boolean | undefined,
    websiteURLs: string[]
}
export const setStepOne = (stepOneData: stepOneData) => ( {
    type: 'SET_STEP_ONE' as const,
    payload: stepOneData
});

export interface stepTwoData {
    companyName: string,
    country: string,
    city: string,
    businessNumber: string
}
export const setStepTwo = (stepTwoData: stepTwoData) => ( {
    type: 'SET_STEP_TWO' as const,
    payload: stepTwoData
});

export const setRoleTags = (roleTags: RoleTags) => ( {
    type: 'SET_ROLE_TAGS' as const,
    payload: roleTags
});

export const clearBusiness = () => ({
    type: 'CLEAR_BUSINESS' as const
});

export const saveBusinessToDB = () => ({
    type: 'SAVE_BUSINESS_TO_DB' as const
});

export const saveBusinessToDBSucces = () => ({
    type: 'SAVE_BUSINESS_TO_DB_SUCCESS' as const,
});

export const saveBusinessToDBFailed = (err: string) => ({
    type: 'SAVE_BUSINESS_TO_DB_FAILED' as const,
    payload: err
});
