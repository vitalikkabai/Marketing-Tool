import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import ProductPage from './ProductPage';
import {getProductList} from "../../store/Product/ProductActions";

function mapStateToProps(state: AppStateType) {
    return {
        productList: state.ProductReducer.productList,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        getProductList: () => dispatch(getProductList()),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductPage);
