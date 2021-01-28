import {Dispatch} from "redux";
import RegisterFormWebLinks from "./RegisterFormWebLinks";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../store/store";
import { setBusinessUrls } from '../../store/Business/BusinessActions';

// type MapDispatchType = {
//     setStepOne: (arg: stepOneData) => void
// }
// export type FormContainerType = MapDispatchType & stepOneData;

const mapStateToProps = (state: AppStateType) => {
    return {
        storeURLs: state.BusinessReducer.storeURLs,
        websiteURLs: state.BusinessReducer.websiteURLs
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setBusinessUrls: (storeURLs: string[], websiteURLs: string[]) => dispatch(setBusinessUrls(storeURLs, websiteURLs))
    }
};

const connector =  connect(mapStateToProps, mapDispatchToProps);

export type FormContainerType = ConnectedProps<typeof connector>

export default connector(RegisterFormWebLinks)