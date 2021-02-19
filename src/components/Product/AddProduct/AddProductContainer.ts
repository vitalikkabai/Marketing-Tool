import AddProduct from './AddProduct';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../store/store';
import { Dispatch } from 'redux';
import {createProduct, setProductInfo} from "../../../store/Product/ProductActions";
import {CreateProductInput} from "../../../API";

function mapStateToProps(state: AppStateType) {
    return {
        businessID: state.BusinessReducer.id,
        product: state.ProductReducer.product,
        isPending: state.ProductReducer.isPending
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        setProductInfo: (product: CreateProductInput) => dispatch(setProductInfo(product)),
        createProduct: (callback: () => void) => dispatch(createProduct(callback)),
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AddProduct);
