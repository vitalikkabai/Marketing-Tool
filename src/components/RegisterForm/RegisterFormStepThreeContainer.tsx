import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import { setStepTwo, stepTwoData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';
import RegisterFormStepThree from "./RegisterFormStepThree";
import { ProfileType } from "../../store/Profile/ProfileReducer";
import { setProfile } from "../../store/Profile/ProfileActions";
import { Profile } from "../../models";

export type FormStepTwoContainerType = MapDispatchType &
    stepTwoData & ProfileType;

const mapStateToProps = (state: AppStateType):stepTwoData & ProfileType => {
    return {
        companyName: state.BusinessReducer.companyName,
        country: state.BusinessReducer.country,
        city: state.BusinessReducer.city,
        businessNumber: state.BusinessReducer.businessNumber,
        profile: state.ProfileReducer.profile

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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormStepThree)