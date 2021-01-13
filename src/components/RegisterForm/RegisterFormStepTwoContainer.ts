import {Dispatch} from "redux";
import RegisterFormStepTwo from "./RegisterFormStepTwo";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {getAuthData, signIn} from "../../store/Auth/AuthActions";
import { setStepTwo, stepTwoData, stepOneData } from '../../store/Business/BusinessActions';

type MapDispatchType = {
    setStepTwo: (arg: stepTwoData) => void
}
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setStepTwo: (stepTwoData) => dispatch(setStepTwo(stepTwoData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormStepTwo)