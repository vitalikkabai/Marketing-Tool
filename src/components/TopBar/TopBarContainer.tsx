import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import { signOut } from '../../store/Auth/AuthActions';
import { connect, ConnectedProps } from 'react-redux';
import TopBar from './TopBar';

const mapStateToProps = (state: AppStateType) => {
    return {
        userAttributes: state.AuthReducer.userAttributes,
        isAuth: state.AuthReducer.isAuth,
        profile: state.ProfileReducer.profile,
        avatarURL: state.ProfileReducer.avatarURL,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TopBar);
