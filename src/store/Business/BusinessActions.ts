
interface stepOne {
    haveExperienceSelling: string,
    storeURL: string[],
    haveWebsite: string,
    websiteURL: string[]
}
export const setStepOne = (stepOneData: stepOne) => ( {
    type: 'SET_STEP_ONE' as const,
    payload: stepOneData
});

interface stepTwo {
    companyName: string,
    country: string,
    city: string,
    businessNumber: string,
    ownerName: string,
    ownerEmailAddress: string
}
export const setStepTwo = (stepTwoData: stepTwo) => ( {
    type: 'SET_STEP_TWO' as const,
    payload: stepTwoData
});

export const saveBusinessToDB = () => ({
    type: 'SAVE_BUSINESS_TO_DB' as const
})
