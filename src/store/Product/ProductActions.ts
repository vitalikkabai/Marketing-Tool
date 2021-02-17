import {CreateProductInput, UpdateProductInput} from '../../API';

export const createProduct = (callback: () => void) => ({
    type: 'CREATE_PRODUCT_REQUEST' as const,
    payload: {callback}
});

export const createProductSuccess = (productData: CreateProductInput) => ({
    type: 'CREATE_PRODUCT_SUCCESS' as const,
    payload: productData,
});

export const createProductFailed = (productData: CreateProductInput) => ({
    type: 'CREATE_PRODUCT_FAILED' as const,
    payload: productData,
});


export const updateProduct = (productData: UpdateProductInput) => ({
    type: 'UPDATE_PRODUCT' as const,
    payload: productData,
});

export const setProductInfo = (productData: CreateProductInput) => ({
    type: 'SET_PRODUCT_INFO' as const,
    payload: productData,
});
