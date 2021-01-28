/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { UpdateBusinessInput } from "../../API";
import { Business, RoleTags } from "../../models";

export interface stepOneData {
    storeURLs: string[],
    websiteURLs: string[]
}
export const setBusinessUrls = (storeURLs: string[], websiteURLs: string[]) => ( {
    type: 'SET_BUSINESS_URLS' as const,
    payload: {storeURLs, websiteURLs}
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

export const setBusinessName = (businessName: string) => ({
    type: 'SET_BUSINESS_NAME' as const,
    payload: businessName
})

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