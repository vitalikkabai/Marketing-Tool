export const isEmpty = (value: string) => {
    if(!value.replace(/\s/g, '')) return "Field cannot be empty";
    return ""
}

export const isFieldsEmpty = (arr: Array<string>) => {
    if(arr.filter(item => item === "").length !== 0) return "This Fields cannot be empty";
    return ""
}

export const isEmail = (value: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(value).toLowerCase())) return "Invalid email address";
    return ""
}

export const isNameValid = (value: string) => {
    if(!/^[A-Za-z\s]+$/.test(value)) return "Please enter valid name";
    return ""
}

export const isPhone = (value: string) => {
    if((/\D/.test(value)) || value.length > 15 || value.length < 9) return "Invalid phone number";
    return ""
}

export const isMinLength = (value: string) => {
    if(value.length < 8) return "The password must be at least 8 characters";
    return ""
}

export const isPasswordsEqual = (password: string, confirm: string) => {
    if(password !== confirm) return "Password mismatched";
    return ""
}


export const validateField = (field: any, ...args: any) => { // Function for validation
    let errorArray = []; // Initiate arrays for errors
    errorArray.push(...args); // Push error text to array
    errorArray = errorArray.filter(el => el); // Get rid of empty string values in array
    return errorArray;// returns array with errors
}

export const isValidUrl = (url:string) => {
    try {
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
};
