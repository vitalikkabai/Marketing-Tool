export const isNotEmpty = (value: string):string  => {
    if (!value.replace(/\s/g, '')) return 'Field cannot be empty';
    return '';
};

export const isFieldsNotEmpty = (arr: Array<string>):string  => {
    if (arr.filter((item) => item === '').length !== 0)
        return 'This Fields cannot be empty';
    return '';
};

export const isNotPositive = (value: string):string  => {
    if (Number(value) < 0) return `The field value can't be negative`;
    return '';
};

export const isNotEmail = (value: string):string  => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase())) return 'Invalid email address';
    return '';
};

export const isNameNotValid = (value: string):string  => {
    if (!/^[A-Za-z\s]+$/.test(value)) return 'Please enter valid name';
    return '';
};

export const isNotPhone = (value: string):string  => {
    if (/\D/.test(value) || value.length > 15 || value.length < 9)
        return 'Invalid phone number';
    return '';
};

export const isNotMinLength = (value: string):string => {
    if (value.length < 6) return 'The password must be at least 6 characters';
    return '';
};

export const isPasswordsNotEqual = (password: string, confirm: string):string  => {
    if (password !== confirm) return 'Password mismatched';
    return '';
};

export const validateField = (field: string | undefined, ...args: Array<string>) => {
    // Function for validation
    let errorArray = []; // Initiate arrays for errors
    errorArray.push(...args); // Push error text to array
    errorArray = errorArray.filter((el) => el); // Get rid of empty string values in array
    return errorArray; // returns array with errors
};

export const isValidUrl = (url: string) => {
    try {
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
};
