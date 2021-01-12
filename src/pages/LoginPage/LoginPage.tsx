import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {Dispatch} from "redux";
import {signOut} from "../../store/Auth/AuthActions";
import {useHistory} from "react-router";

const LoginPage = (props: any) => {

    const history = useHistory();

    useEffect(()=>{
        if(!props.isAuth) history.push("login")
    })

    return <div
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>

        <h1 style={{paddingTop: "100px"}}>Welcome to Dashboard</h1>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={()=>{props.signOut()}}
        >
            Log Out
        </Button>
    </div>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)