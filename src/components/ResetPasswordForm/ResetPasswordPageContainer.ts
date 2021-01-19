import { Dispatch } from "redux";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { connect } from "react-redux";
import { getResetLink, sendNewPassword } from "../../store/Auth/AuthActions";


type MapDispatchType = {
  sendEmail: (email: string) => void;
  sendNewPassword: (email: string, code: string, newPassword: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
  return {
    sendEmail: (email) => dispatch(getResetLink(email)),
    sendNewPassword: (email, code, newPassword) => dispatch(sendNewPassword(email, code, newPassword)),
  }
};

export default connect(null, mapDispatchToProps)(ResetPasswordPage);