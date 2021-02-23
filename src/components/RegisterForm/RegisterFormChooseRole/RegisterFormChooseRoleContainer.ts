import { Dispatch } from 'redux';
import RegisterFormChooseRole from './RegisterFormChooseRole';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../store/store';
import { setRoleTags } from '../../../store/Employee/EmployeeActions';
import { RoleTags } from '../../../models';

const mapStateToProps = (state: AppStateType) => {
    return {
        roleTags: state.EmployeeReducer.roleTags,
        websiteURLs: state.BusinessReducer.websiteURLs,
        storeURLs: state.BusinessReducer.storeURLs,
        hasWebsite: state.AuthReducer.hasWebsite,
        hasExperienceSelling: state.AuthReducer.hasExperienceSelling
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setRoleTags: (roleTags: RoleTags) => dispatch(setRoleTags(roleTags)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ChooseRoleProps = ConnectedProps<typeof connector>;

export default connector(RegisterFormChooseRole);
