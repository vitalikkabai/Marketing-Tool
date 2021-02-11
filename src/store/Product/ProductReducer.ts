import { CreateProductInput, Stage } from '../../API';
import * as actions from './ProductActions';

const initialState: CreateProductInput = {
    itemNumber: [{value: 0, createdAt:""}],
    itemName: [{value: "", createdAt:""}],
    release: '',
    websiteURLs: [{record:[], createdAt: ""}],
    stage: Stage.PRODUCTS,
    businessID: '',
    color: [{record:[], createdAt: ""}],
    material: [{record:[], createdAt: ""}],
    photos: [],
    videos: [],
    certifications: [],
    marketingMaterials: []
};

export const ProductReducer = (
    state = initialState,
    action: ActionTypes
): CreateProductInput => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ProductReducer;
