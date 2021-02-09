import AddProduct from "./AddProduct";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../../store/store";
import {signOut} from "../../../store/Auth/AuthActions";
import {Dispatch} from "redux";

function mapStateToProps(state: AppStateType) {
    return {
        isAuth: state.AuthReducer.isAuth
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        signOut: () => dispatch(signOut())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(AddProduct);