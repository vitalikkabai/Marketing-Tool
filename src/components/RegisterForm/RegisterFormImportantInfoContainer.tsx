import {Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../store/store";
import { setStepTwo, stepTwoData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';
import RegisterFormImportantInfo from "./RegisterFormImportantInfo";
import { ProfileType } from "../../store/Profile/ProfileReducer";
import { setProfile } from "../../store/Profile/ProfileActions";
import { Profile } from "../../models";
import LoginForm from "../LoginForm/LoginForm";

export type RegisterFormImportantInfoContainerType = MapDispatchType &
    stepTwoData & ProfileType;

const mapStateToProps = (state: AppStateType) => {
    return {
        companyName: state.BusinessReducer.companyName,
        countryCode: state.BusinessReducer.country || "",
        phoneNumber: state.BusinessReducer.businessNumber || "",
        profile: state.ProfileReducer.profile,
        registerErrorText: state.AuthReducer.registerErrorMessage
    }
};

type MapDispatchType = {
    setStepTwo: (arg: stepTwoData) => void,
    signUp: (email: string, password: string, userName: string) => void,
    setProfile: (profile: Profile) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setStepTwo: (stepTwoData) => dispatch(setStepTwo(stepTwoData)),
        signUp: (email, password, userName) => dispatch(signUp(email, password, userName)),
        setProfile: (profile) => dispatch(setProfile(profile))
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RegisterFormImportantInfo)