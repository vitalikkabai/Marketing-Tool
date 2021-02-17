import {CreateProductInput, Stage} from '../../API';
import * as actions from './ProductActions';

export type InitialStateType = typeof initialState;
const initialState = {
    product: {
        itemNumber: [{value: 0, createdAt: ""}],
        itemName: [{value: "", createdAt: ""}],
        release: '',
        websiteURLs: [{record: [], createdAt: ""}],
        stage: Stage.PRODUCTS,
        businessID: '',
        photos: [],
        videos: [],
        certifications: [],
        marketingMaterials: [],
    } as CreateProductInput,
    isPending: false
};

export const ProductReducer = (
    state = initialState,
    action: ActionTypes
): InitialStateType => {
    switch (action.type) {
        case 'SET_PRODUCT_INFO': {
            return {
                ...state,
                product: action.payload,
            };
        }
        case 'CREATE_PRODUCT_REQUEST': {
            return {
                ...state,
                isPending: true,
            };
        }
        case 'CREATE_PRODUCT_SUCCESS': {
            return {
                ...state,
                isPending: false,
            };
        }
        case 'CREATE_PRODUCT_FAILED': {
            return {
                ...state,
                isPending: false,
            };
        }
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ProductReducer;
