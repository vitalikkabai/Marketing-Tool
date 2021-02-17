import {Epic, ofType} from 'redux-observable';
import {catchError, mergeMap} from 'rxjs/operators';
import {ActionTypes} from '../storeTypes';
import {AppStateType} from '../store';
import {createProduct} from '../../graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';
import {from} from 'rxjs';
import {createProductFailed, createProductSuccess} from "./ProductActions";
import moment from "moment";
import {Stage} from "../../API";
import {useHistory} from "react-router";
import {filterAction} from "../../utils/backendUtils";



export default <Epic<ActionTypes, ActionTypes, AppStateType>[]>[
    (action$, state$) =>
        action$.pipe(
            filterAction('CREATE_PRODUCT_REQUEST'),
            mergeMap((action) => {
                const productData = state$.value.ProductReducer.product;
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
];
