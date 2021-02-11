import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import { cleanErrors, getAuthData, signIn } from '../../store/Auth/AuthActions';
import ManagersSideBarMenu from './ManagersSideBarMenu';
import { CreateBusinessInput } from '../../API';
import { setBusiness } from '../../store/Business/BusinessActions';

const mapStateToProps = (state: AppStateType) => {
    return {
        businesses: state.ManagerReducer.businesses,
        activeBusiness: state.BusinessReducer,
        errorText: state.AuthReducer.loginErrorMessage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signIn: (username: string, password: string) =>
            dispatch(signIn(username, password)),
        cleanErrors: () => dispatch(cleanErrors()),
        getAuthData: () => dispatch(getAuthData()),
        setActiveBusiness: (business: CreateBusinessInput) => dispatch(setBusiness(business))
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ManagersSideBarMenu);
