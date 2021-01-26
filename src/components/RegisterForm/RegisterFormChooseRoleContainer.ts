import {Dispatch} from "redux";
import RegisterFormChooseRole from "./RegisterFormChooseRole";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../store/store";
import { setRoleTags, setStepTwo, stepTwoData } from '../../store/Business/BusinessActions';
import { signUp } from '../../store/Auth/AuthActions';
import { RoleTags } from "../../models";



const mapStateToProps = (state: AppStateType) => {
    return {
        roleTags: state.BusinessReducer.roleTags
    }
};



const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setRoleTags: (roleTags:RoleTags) => dispatch(setRoleTags(roleTags))
    }
};
 
const connector = connect(mapStateToProps,mapDispatchToProps);

export type ChooseRoleProps = ConnectedProps<typeof connector>


export default connector(RegisterFormChooseRole)