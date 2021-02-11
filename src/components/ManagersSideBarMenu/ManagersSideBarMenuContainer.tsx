import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import { cleanErrors, getAuthData, signIn } from '../../store/Auth/AuthActions';
import ManagersSideBarMenu from './ManagersSideBarMenu';

const mapStateToProps = (state: AppStateType) => {
    return {
        companiesList: state.ManagerReducer.companies,
        activeCompany: state.ManagerReducer.activeCompany,
        errorText: state.AuthReducer.loginErrorMessage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signIn: (username: string, password: string) =>
            dispatch(signIn(username, password)),
        cleanErrors: () => dispatch(cleanErrors()),
        getAuthData: () => dispatch(getAuthData()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ManagersSideBarMenu);
