

export const setCompanyName = (companyName: string) => ( {
    type: 'SET_COMPANY_NAME' as const,
    payload: companyName
});

export const setInputValues = (country: string) => ({
    type: 'SET_COUNTRY' as const,
    payload: country
});