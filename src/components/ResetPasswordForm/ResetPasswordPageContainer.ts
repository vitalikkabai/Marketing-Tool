import { Dispatch } from "redux";
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../store/store";
import { getResetLink, sendNewPassword } from "../../store/Auth/AuthActions";
import { cleanErrors } from "../../store/Auth/AuthActions";


const mapStateToProps = (state: AppStateType) => {
  return {
    errorText: state.AuthReducer.sendResetLinkError,
    isSendResetLinkSuccess: state.AuthReducer.isSendResetLinkSuccess
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendEmail: (email: string) => dispatch(getResetLink(email)),
    sendNewPassword: (email: string, code: string, newPassword: string) => dispatch(sendNewPassword(email, code, newPassword)),
    cleanErrors: () => dispatch(cleanErrors()),
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ResetPasswordPage);