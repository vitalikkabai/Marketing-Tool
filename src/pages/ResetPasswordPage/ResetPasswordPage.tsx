import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SendResetLink from "../../components/ResetPasswordForm/SendResetLink";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import ResetIsDone from "../../components/ResetPasswordForm/ResetsIsDone";

type PropsType = {
}

const ResetPasswordPage: React.FC<PropsType> = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isNewPassword, setIsNewPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email && !isNewPassword && !isEmail) {
      setIsEmail(!isEmail);
    }
    if (code && newPassword && retypePassword) {
      if (newPassword === retypePassword) {
        setIsNewPassword(!isNewPassword)
      }
    }
  }

  return (
    <>
      <Header />
      {!isEmail && <SendResetLink
        setEmail={setEmail}
        handleSubmit={handleSubmit} />}
      {isEmail && !isNewPassword && <ResetPasswordForm
        setCode={setCode}
        setNewPassword={setNewPassword}
        setRetypePassword={setRetypePassword}
        setIsEmail={setIsEmail}
        handleSubmit={handleSubmit} />}
      {isNewPassword && <ResetIsDone />}
    </>
  )
}

export default ResetPasswordPage;