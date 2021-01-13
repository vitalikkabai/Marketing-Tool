import {Dispatch} from "redux";
import RegisterForm from "./RegisterForm";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {getAuthData, signIn} from "../../store/Auth/AuthActions";
import { setStepOne, stepOneData } from '../../store/Business/BusinessActions';

type MapDispatchType = {
    setStepOne: (arg: stepOneData) => void
}
export type FormContainerType = MapDispatchType & stepOneData;

const mapStateToProps = (state: AppStateType):stepOneData => {
    return {
        haveExperienceSelling: state.BusinessReducer.haveExperienceSelling,
        storeURLs: state.BusinessReducer.storeURLs,
        haveWebsite: state.BusinessReducer.haveWebsite,
        websiteURLs: state.BusinessReducer.websiteURLs

    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        setStepOne: (stepOneData) => dispatch(setStepOne(stepOneData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)