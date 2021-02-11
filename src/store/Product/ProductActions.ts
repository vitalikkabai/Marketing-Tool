import { UpdateProductInput } from './../../API';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const setEmployee = (productData: UpdateProductInput) => ({
    type: 'UPDATE_PRODUCT' as const,
    payload: productData
});
