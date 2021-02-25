import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SendResetLink from '../../components/ResetPasswordForm/SendResetLink';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';
import ResetIsDone from '../../components/ResetPasswordForm/ResetsIsDone';
import { PropsFromRedux } from './ResetPasswordPageContainer';
import {useFormik} from "formik";
import * as Yup from "yup";

const ResetPasswordPage: React.FC<PropsFromRedux> = (props) => {
    const [isEmailEntered, setEmailEntered] = useState(false);
    const [isNewPasswordEntered, setIsNewPasswordEntered] = useState(false);

    /*const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.cleanErrors();

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
    };*/


    useEffect(() => {
        setEmailEntered(props.isSendResetLinkSuccess);
        setIsNewPasswordEntered(props.isResetPasswordSuccess);
    }, [props.isSendResetLinkSuccess, props.isResetPasswordSuccess]);

    return (
        <>
            <Header />
            {!isEmailEntered && (
                <SendResetLink isNewPasswordEntered={isNewPasswordEntered}
                               isEmailEntered={isEmailEntered}
                               sendEmail={props.sendEmail}
                               errorText={props.errorText}/>
            )}
            {isEmailEntered && !isNewPasswordEntered && (
                <ResetPasswordForm
                    cleanSuccess={props.cleanSuccess}
                    errorText={props.errorText}
                    resetEmailAddress={props.resetEmailAddress}
                    sendNewPassword={props.sendNewPassword}
                />
            )}
            {isNewPasswordEntered && (
                <ResetIsDone
                    cleanSuccess={props.cleanSuccess}
                />
            )}
        </>
    );
};

export default ResetPasswordPage;
