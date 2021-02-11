import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import ProductPage from './ProductPage';
import { signOut } from '../../store/Auth/AuthActions';

function mapStateToProps(state: AppStateType) {
    return {
        isAuth: state.AuthReducer.isAuth,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        signOut: () => dispatch(signOut()),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductPage);
