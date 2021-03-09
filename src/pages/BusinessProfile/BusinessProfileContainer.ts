import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import {RoleTagsInput, UpdateBusinessInput} from '../../API';
import { updateBusinessInDB } from '../../store/Business/BusinessActions';
import { connect, ConnectedProps } from 'react-redux';
import BusinessProfile from './BusinessProfile';
import {setRoleTags} from "../../store/Employee/EmployeeActions";

function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer.profile,
        roleTags: state.EmployeeReducer.roleTags,
        business: state.BusinessReducer,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        updateBusinessInDB: (business: UpdateBusinessInput) =>
            dispatch(updateBusinessInDB(business)),
        setRoleTags: (roleTags: RoleTagsInput) =>
            dispatch(setRoleTags(roleTags))
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(BusinessProfile);
