export const isEmpty = (value: string) => {
    if(!value) return "Field cannot be empty";
    return ""
}

export const isEmail = (value: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(value).toLowerCase())) return "Invalid email address";
    return ""
}


export const validateField = (field: any, ...args: any) => { // Function for validation
    let errorArray = []; // Initiate arrays for errors
    errorArray.push(...args); // Push error text to array
    errorArray = errorArray.filter(el => el); // Get rid of empty string values in array
    return errorArray;// returns array with errors
}

/*

export const isMaxLength = (value: string, maxLength: number) => {
    if(value.length > maxLength) return `Input cannot exceed ${maxLength} characters`;
    return ""
}

export const isEnglish = (value: string) => {
    if(/[^\x00-\x7F]/.test(value)) return "Input English only ";
    return ""
}

export const isDigit = (value: string) => {
    if(!(/^\d+$/.test(value))) return "Digits only";
    return ""
}

export const isInRange = (value: string, minValue: number, maxValue: number) => {
    if(minValue > Number(value) || Number(value) > maxValue) return `Must be a number from ${minValue} to ${maxValue}`;
    return ""
}





const [inputValue, setInputValue] = useState({ //For input values
        username: {value: "", touched: false, errorText: "", name: "REWARD_NAME"},
        password: {value: "", touched: false, errorText: "", name: "NUM_OF_VISITS"}
    });

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            let currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.username.name: {
                    currInputValue.username.value = inputData;
                    currInputValue.username.touched = true;
                    const errorCompanyName = validateField(inputData,
                        isEmpty(inputData),
                        isEnglish(inputData),
                        isMaxLength(inputData, 60));
                    currInputValue.username.errorText = errorCompanyName[0];
                    break;
                }

                case prevInput.password.name: {
                    currInputValue.password.value = inputData;
                    currInputValue.password.touched = true;
                    const errorCompanyName = validateField(inputData,
                        isEmpty(inputData),
                        isEnglish(inputData),
                        isMaxLength(inputData, 60));
                    currInputValue.password.errorText = errorCompanyName[0];
                    break;
                }

                case "INITIAL":{
                    const initialError = validateField(inputData,
                        isEnglish(inputData),
                        isMaxLength(inputData, 60));
                    currInputValue.companyName.errorText = initialError[0];
                    break;
                }

                default:
                    break;
            }
            return currInputValue
        })
    }
 */