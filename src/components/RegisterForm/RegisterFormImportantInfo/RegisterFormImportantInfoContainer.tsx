import {Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../../store/store";
import { setBusinessName } from '../../../store/Business/BusinessActions';
import { signUp } from '../../../store/Auth/AuthActions';
import RegisterFormImportantInfo from "./RegisterFormImportantInfo";
import { setProfile } from "../../../store/Profile/ProfileActions";
import { CreateEmployeeInput, CreateProfileInput } from "../../../API";
import { setEmployee } from "../../../store/Employee/EmployeeActions";

// export type RegisterFormImportantInfoContainerType = MapDispatchType &
//     stepTwoData & ProfileType;

const mapStateToProps = (state: AppStateType) => {
    return {
        companyName: state.BusinessReducer.companyName,
        profile: state.ProfileReducer.profile,
        phoneNumber: state.EmployeeReducer.phoneNumber,
        country: "",
        city: "",
        businessNumber: "",
        registerErrorText: state.AuthReducer.registerErrorMessage,
        employee: state.EmployeeReducer
    }
};

// type MapDispatchType = {
//     setStepTwo: (arg: stepTwoData) => void,
//     signUp: (email: string, password: string, userName: string) => void,
//     setProfile: (profile: CreateProfileInput) => void
// }

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setBusinessName: (businessName: string) => dispatch(setBusinessName(businessName)),
        signUp: (email:string, password:string, userName:string) => dispatch(signUp(email, password, userName)),
        setProfile: (profile: CreateProfileInput) => dispatch(setProfile(profile)),
        setEmployee: (employee: CreateEmployeeInput) => dispatch(setEmployee(employee))
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RegisterFormImportantInfo)