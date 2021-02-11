import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SendResetLink from '../../components/ResetPasswordForm/SendResetLink';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';
import ResetIsDone from '../../components/ResetPasswordForm/ResetsIsDone';
import {
    isNotEmail,
    isNotEmpty,
    isNotMinLength,
    isPasswordsNotEqual,
    validateField,
} from '../../utils/validators/validators';
import { PropsFromRedux } from './ResetPasswordPageContainer';

const ResetPasswordPage: React.FC<PropsFromRedux> = (props) => {
    const [isEmailEntered, setEmailEntered] = useState(false);
    const [isNewPasswordEntered, setIsNewPasswordEntered] = useState(false);
    const [inputValue, setInputValue] = useState({
        //For input values
        email: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'EMAIL',
        },
        code: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'CODE',
        },
        newPassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'NEW_PASSWORD',
        },
        retypePassword: {
            value: '',
            touched: false,
            error: false,
            errorText: '',
            name: 'CONFIRM_PASSWORD',
        },
    });

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.email.name: {
                    currInputValue.email.value = inputData;
                    currInputValue.email.error = false;
                    currInputValue.email.errorText = '';
                    break;
                }
                case prevInput.code.name: {
                    currInputValue.code.value = inputData;
                    currInputValue.code.error = false;
                    currInputValue.code.errorText = '';
                    break;
                }
                case prevInput.newPassword.name: {
                    currInputValue.newPassword.value = inputData;
                    currInputValue.newPassword.error = false;
                    currInputValue.newPassword.errorText = '';
                    break;
                }
                case prevInput.retypePassword.name: {
                    currInputValue.retypePassword.value = inputData;
                    currInputValue.retypePassword.error = false;
                    currInputValue.retypePassword.errorText = '';
                    break;
                }
                default:
                    break;
            }
            return currInputValue;
        });
    };

    const resetFieldErrors = () => {
        setInputValue((prevInput) => {
            const currentInputValue = Object.assign({}, prevInput);
            currentInputValue.email.error = false;
            currentInputValue.email.errorText = '';

            currentInputValue.code.error = false;
            currentInputValue.code.errorText = '';

            currentInputValue.newPassword.error = false;
            currentInputValue.newPassword.errorText = '';

            currentInputValue.retypePassword.error = false;
            currentInputValue.retypePassword.errorText = '';

            return currentInputValue;
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        resetFieldErrors();
        props.cleanErrors();
        const emailError = validateField(
            inputValue.email.value,
            isNotEmpty(inputValue.email.value),
            isNotEmail(inputValue.email.value)
        );
        const codeError = validateField(
            inputValue.code.value,
            isNotEmpty(inputValue.code.value)
        );
        const newPasswordError = validateField(
            inputValue.newPassword.value,
            isNotEmpty(inputValue.newPassword.value),
            isNotMinLength(inputValue.newPassword.value)
        );
        const retypeError = validateField(
            inputValue.retypePassword.value,
            isNotEmpty(inputValue.retypePassword.value)
        );

        if (!isNewPasswordEntered && !isEmailEntered) {
            if (inputValue.email.value && !emailError[0]) {
                props.sendEmail(inputValue.email.value);
            } else {
                if (emailError[0])
                    setInputValue((prevStyle) => ({
                        ...prevStyle,
                        email: {
                            ...prevStyle.email,
                            error: true,
                            errorText: emailError[0],
                        },
                    }));
            }
        }
        if (isEmailEntered) {
            if (codeError[0])
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    code: {
                        ...prevStyle.code,
                        error: true,
                        errorText: codeError[0],
                    },
                }));
            if (newPasswordError[0])
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    newPassword: {
                        ...prevStyle.newPassword,
                        error: true,
                        errorText: newPasswordError[0],
                    },
                }));
            if (retypeError[0])
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    retypePassword: {
                        ...prevStyle.retypePassword,
                        error: true,
                        errorText: retypeError[0],
                    },
                }));
            if (!codeError[0] && !newPasswordError[0] && !retypeError[0]) {
                if (
                    !isPasswordsNotEqual(
                        inputValue.newPassword.value,
                        inputValue.retypePassword.value
                    )
                ) {
                    props.sendNewPassword(
                        inputValue.email.value,
                        inputValue.code.value,
                        inputValue.newPassword.value
                    );
                } else {
                    setInputValue((prevStyle) => ({
                        ...prevStyle,
                        newPassword: {
                            ...prevStyle.newPassword,
                            error: true,
                            errorText: 'Password missmached',
                        },
                        retypePassword: {
                            ...prevStyle.retypePassword,
                            error: true,
                        },
                    }));
                }
            }
        }
    };

    useEffect(() => {
        //Detect async error status
        switch (props.errorText.code) {
            case 'UserNotFoundException': {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    email: {
                        ...prevStyle.email,
                        error: true,
                        errorText: 'User not found',
                    },
                }));
                break;
            }
            case 'LimitExceededException': {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    email: {
                        ...prevStyle.email,
                        error: true,
                        errorText: 'Attempt limit exceeded, try again later',
                    },
                    code: {
                        ...prevStyle.code,
                        error: true,
                        errorText: 'Attempt limit exceeded, try again later',
                    },
                }));
                break;
            }
            case 'CodeMismatchException': {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    code: {
                        ...prevStyle.code,
                        error: true,
                        errorText: 'Invalid verification code',
                    },
                }));
                break;
            }
            case 'UserLambdaValidationException': {
                setInputValue((prevStyle) => ({
                    ...prevStyle,
                    code: {
                        ...prevStyle.code,
                        error: true,
                        errorText: 'Server error occurred, try again later',
                    },
                }));
                break;
            }
        }
    }, [props.errorText]);

    useEffect(() => {
        setEmailEntered(props.isSendResetLinkSuccess);
        setIsNewPasswordEntered(props.isResetPasswordSuccess);
    }, [props.isSendResetLinkSuccess, props.isResetPasswordSuccess]);

    const getErrorMessage = () => {
        //Setting error messages
        if (inputValue.email.errorText) return inputValue.email.errorText;
        if (inputValue.code.errorText) return inputValue.code.errorText;
        if (inputValue.newPassword.errorText)
            return inputValue.newPassword.errorText;
        if (inputValue.retypePassword.errorText)
            return inputValue.retypePassword.errorText;
        return '';
    };

    return (
        <>
            <Header />
            {!isEmailEntered && (
                <SendResetLink
                    email={inputValue.email}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    errorMessage={getErrorMessage()}
                />
            )}
            {isEmailEntered && !isNewPasswordEntered && (
                <ResetPasswordForm
                    code={inputValue.code}
                    newPassword={inputValue.newPassword}
                    retypePassword={inputValue.retypePassword}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    errorMessage={getErrorMessage()}
                    resetFieldErrors={resetFieldErrors}
                    cleanSuccess={props.cleanSuccess}
                />
            )}
            {isNewPasswordEntered && (
                <ResetIsDone
                    cleanSuccess={props.cleanSuccess}
                    resetFieldErrors={resetFieldErrors}
                />
            )}
        </>
    );
};

export default ResetPasswordPage;
