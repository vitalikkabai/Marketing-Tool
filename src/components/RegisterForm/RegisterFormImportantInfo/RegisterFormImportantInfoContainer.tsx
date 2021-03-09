import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../store/store';
import { setBusinessName } from '../../../store/Business/BusinessActions';
import {cleanErrors, signUp} from '../../../store/Auth/AuthActions';
import RegisterFormImportantInfo from './RegisterFormImportantInfo';
import { setProfile } from '../../../store/Profile/ProfileActions';
import { CreateEmployeeInput, CreateProfileInput } from '../../../API';
import {
    getUserLocation,
    setEmployee,
} from '../../../store/Employee/EmployeeActions';

const mapStateToProps = (state: AppStateType) => {
    return {
        companyName: state.BusinessReducer.companyName,
        profile: state.ProfileReducer.profile,
        phoneNumber: state.EmployeeReducer.phoneNumber,
        businessNumber: state.EmployeeReducer.countryCode,
        registerErrorText: state.AuthReducer.registerErrorMessage,
        employee: state.EmployeeReducer,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setBusinessName: (businessName: string) =>
            dispatch(setBusinessName(businessName)),
        signUp: (email: string, password: string, userName: string) =>
            dispatch(signUp(email, password, userName)),
        setProfile: (profile: CreateProfileInput) =>
            dispatch(setProfile(profile)),
        setEmployee: (employee: CreateEmployeeInput) =>
            dispatch(setEmployee(employee)),
        getUserLocation: () => dispatch(getUserLocation()),
        cleanErrors: () => dispatch(cleanErrors())
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RegisterFormImportantInfo);
