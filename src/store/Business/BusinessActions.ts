/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { UpdateBusinessInput } from "../../API";
import { Business, RoleTags } from "../../models";

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
    countryCode: string,
    phoneNumber: string
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

export const updateBusinessInDB = (businessInput: UpdateBusinessInput) => ({
    type: 'UPDATE_BUSINESS' as const,
    payload: businessInput
});

export const updateBusinessInDBSucces = (business: Business) => ({
    type: 'UPDATE_BUSINESS_SUCCESS' as const,
    payload: business
});

export const updateBusinessInDBFailed = (err: string) => ({
    type: 'UPDATE_BUSINESS_FAILED' as const,
    payload: err
});

export const setBusiness = (business: Business) => ( {
    type: 'SET_BUSINESS' as const,
    payload: business
});