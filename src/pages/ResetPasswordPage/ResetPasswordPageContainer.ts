import { Dispatch } from 'redux';
import ResetPasswordPage from './ResetPasswordPage';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import {
    cleanSuccess,
    getResetLink,
    sendNewPassword,
} from '../../store/Auth/AuthActions';
import { cleanErrors } from '../../store/Auth/AuthActions';

const mapStateToProps = (state: AppStateType) => {
    return {
        errorText: state.AuthReducer.sendResetLinkError,
        isSendResetLinkSuccess: state.AuthReducer.isSendResetLinkSuccess,
        isResetPasswordSuccess: state.AuthReducer.isResetPasswordSuccess,
        resetEmailAddress: state.AuthReducer.resetEmailAddress,
        isPending: state.AuthReducer.isPending
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendEmail: (email: string) => dispatch(getResetLink(email)),
        sendNewPassword: (email: string, code: string, newPassword: string) =>
            dispatch(sendNewPassword(email, code, newPassword)),
        cleanSuccess: () => dispatch(cleanSuccess()),
        cleanErrors: () => dispatch(cleanErrors()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ResetPasswordPage);
