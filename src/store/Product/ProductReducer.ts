import { CreateProductInput, Stage } from '../../API';
import * as actions from './ProductActions';

const initialState: CreateProductInput = {
        itemNumber: 0,
        itemName: "",
        release: "",
        websiteURLs: [],
        stage: Stage.PRODUCTS,
        businessID: "",
        color: [],
        material: [],
        photos: [],
        videos: [],
        certifications: [],
        marketingMaterials: [],
        packagingPhotos: [],
        packagingVideos: [],
        packagings: []
};

export const ProductReducer = (state = initialState, action: ActionTypes): CreateProductInput => {
    switch (action.type) {

        default:
            return {
                ...state,
            };
    }
};
type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export default ProductReducer;