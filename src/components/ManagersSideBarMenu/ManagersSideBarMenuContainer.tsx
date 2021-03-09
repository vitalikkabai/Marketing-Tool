import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../store/store';
import { cleanErrors, getAuthData, signIn } from '../../store/Auth/AuthActions';
import ManagersSideBarMenu from './ManagersSideBarMenu';
import { setBusiness } from '../../store/Business/BusinessActions';
import { setInterlocutor } from '../../store/Message/MessageActions';
import { DetailedBusiness } from '../../store/Manager/ManagerReducer';

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
        setActiveBusiness: (activeBusiness: DetailedBusiness) => {
            dispatch(setBusiness(activeBusiness.business))
                dispatch(setInterlocutor(activeBusiness.employeeProfiles[0]));
        },
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ManagersSideBarMenu);
