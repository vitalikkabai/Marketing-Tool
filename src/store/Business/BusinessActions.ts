

interface stepOne {
    companyName: string,
    country: string,
    city: string,
    businessNumber: string
}
export const setStepOne = (stepOneData: stepOne) => ( {
    type: 'SET_STEP_ONE' as const,
    payload: stepOneData
});

interface stepTwo {
    haveExperienceSelling: string,
    storeURL: string,
    haveWebsite: string,
    websiteURL: string
}
export const setStepTwo = (stepTwoData: stepTwo) => ( {
    type: 'SET_STEP_TWO' as const,
    payload: stepTwoData
});

interface stepThree {
    ownerName: string,
    ownerEmailAddress: string
}
export const setStepThree = (stepThreeData: stepThree) => ( {
    type: 'SET_STEP_THREE' as const,
    payload: stepThreeData
});
