import {Dispatch} from "redux";
import RegisterFormStepTwo from "./RegisterFormStepTwo";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import { setStepTwo, stepTwoData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';


export type FormStepTwoContainerType = MapDispatchType &
stepTwoData & {ownerName: string, ownerEmailAddress: string};

const mapStateToProps = (state: AppStateType):stepTwoData & {ownerName: string, ownerEmailAddress: string} => {
    return {
        companyName: state.BusinessReducer.companyName,
        country: state.BusinessReducer.country,
        city: state.BusinessReducer.city,
        businessNumber: state.BusinessReducer.businessNumber,
        ownerName: state.AuthReducer.userAttributes.userName,
        ownerEmailAddress: state.AuthReducer.userAttributes.email

    }
};

type MapDispatchType = {
    setStepTwo: (arg: stepTwoData) => void,
    signUp: (email: string, password: string, userName: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setStepTwo: (stepTwoData) => dispatch(setStepTwo(stepTwoData)),
        signUp: (email, password, userName) => dispatch(signUp(email, password, userName,))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormStepTwo)