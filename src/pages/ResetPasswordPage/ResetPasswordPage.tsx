import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SendResetLink from '../../components/ResetPasswordForm/SendResetLink';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPasswordForm';
import ResetIsDone from '../../components/ResetPasswordForm/ResetsIsDone';
import { PropsFromRedux } from './ResetPasswordPageContainer';

const ResetPasswordPage: React.FC<PropsFromRedux> = (props) => {
    const [isEmailEntered, setEmailEntered] = useState(false);
    const [isNewPasswordEntered, setIsNewPasswordEntered] = useState(false);

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
                               errorText={props.errorText}
                               isPending={props.isPending}/>
            )}
            {isEmailEntered && !isNewPasswordEntered && (
                <ResetPasswordForm
                    cleanSuccess={props.cleanSuccess}
                    errorText={props.errorText}
                    resetEmailAddress={props.resetEmailAddress}
                    sendNewPassword={props.sendNewPassword}
                    isPending={props.isPending}
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
