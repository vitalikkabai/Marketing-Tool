import {Dispatch} from "redux";
import RegisterFormChooseRole from "./RegisterFormChooseRole";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import { setStepTwo, stepTwoData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';


/*export type FormStepTwoContainerType = MapDispatchType & stepTwoData;

const mapStateToProps = (state: AppStateType):stepTwoData => {
    return {
        companyName: state.BusinessReducer.companyName
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
 */

export default connect(null, null)(RegisterFormChooseRole)