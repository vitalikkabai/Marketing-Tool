import { Dispatch } from 'redux';
import RegisterFormWebLinks from './RegisterFormWebLinks';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../store/store';
import { setBusinessUrls } from '../../../store/Business/BusinessActions';
import { setHasWebsite, setHasExperienceSelling } from "../../../store/Auth/AuthActions";

// type MapDispatchType = {
//     setStepOne: (arg: stepOneData) => void
// }
// export type FormContainerType = MapDispatchType & stepOneData;

const mapStateToProps = (state: AppStateType) => {
    return {
        storeURLs: state.BusinessReducer.storeURLs,
        websiteURLs: state.BusinessReducer.websiteURLs,
        hasWebsite: state.AuthReducer.hasWebsite,
        hasExperienceSelling: state.AuthReducer.hasExperienceSelling
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setBusinessUrls: (storeURLs: string[], websiteURLs: string[]) =>
            dispatch(setBusinessUrls(storeURLs, websiteURLs)),
        setHasWebsite: (hasWebsite: boolean) =>
            dispatch(setHasWebsite(hasWebsite)),
        setHasExperienceSelling: (hasExperienceSelling: boolean) =>
            dispatch(setHasExperienceSelling(hasExperienceSelling))
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type FormContainerType = ConnectedProps<typeof connector>;

export default connector(RegisterFormWebLinks);
