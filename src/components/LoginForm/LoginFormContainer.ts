import {Dispatch} from "redux";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {getAuthData, signIn} from "../../store/Auth/AuthActions";


type MapDispatchType = {
    signIn: (username: string, password: string) => void
    getAuthData: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        signIn: (username, password) => dispatch(signIn(username, password)),
        getAuthData: () => dispatch(getAuthData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)