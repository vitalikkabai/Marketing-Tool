import {Dispatch} from "redux";
import RegisterFormStepTwo from "./RegisterFormStepTwo";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {getAuthData, signIn} from "../../store/Auth/AuthActions";
import { setStepTwo, stepTwoData, stepOneData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';


export type FormStepTwoContainerType = MapDispatchType & stepTwoData;

const mapStateToProps = (state: AppStateType):stepTwoData => {
    return {
        companyName: state.BusinessReducer.companyName,
        country: state.BusinessReducer.country,
        city: state.BusinessReducer.city,
        businessNumber: state.BusinessReducer.businessNumber,
        ownerName: state.BusinessReducer.ownerName,
        ownerEmailAddress: state.BusinessReducer.ownerEmailAddress

    }
};

type MapDispatchType = {
    setStepTwo: (arg: stepTwoData) => void,
    signUp: (email: string, password: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setStepTwo: (stepTwoData) => dispatch(setStepTwo(stepTwoData)),
        signUp: (email, password) => dispatch(signUp(email,password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormStepTwo)