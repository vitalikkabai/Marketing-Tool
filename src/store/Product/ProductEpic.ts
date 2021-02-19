import {Epic} from 'redux-observable';
import {catchError, mergeMap} from 'rxjs/operators';
import {ActionTypes} from '../storeTypes';
import {AppStateType} from '../store';
import {createProduct} from '../../graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';
import {from} from 'rxjs';
import {createProductFailed, createProductSuccess, getProductListFailed, getProductListSuccess} from "./ProductActions";
import {filterAction} from "../../utils/backendUtils";
import {listProducts} from "../../graphql/queries";



export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$, state$) =>
        action$.pipe(
            filterAction('CREATE_PRODUCT_REQUEST'),
            mergeMap((action) => {
                const productData = state$.value.ProductReducer.product;
                console.log("Add product with data: ", productData);
                return from(
                    (API.graphql(
                        graphqlOperation(createProduct, {
                            input: productData
                        })
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        action.payload.callback();
                        return [
                            createProductSuccess(res.data.getProfile),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [createProductFailed(err)];
                    })
                );
            })
        ),

    (action$) =>
        action$.pipe(
            filterAction('GET_PRODUCT_LIST_REQUEST'),
            mergeMap(() => {
                return from(
                    (API.graphql(
                        graphqlOperation(listProducts)
                    ) as unknown) as Promise<any>
                ).pipe(
                    mergeMap((res) => {
                        return [
                            getProductListSuccess(res.data.listProducts.items),
                        ];
                    }),
                    catchError((err) => {
                        console.log(err);
                        return [getProductListFailed()];
                    })
                );
            })
        ),
];
