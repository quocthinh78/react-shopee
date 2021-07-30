import { call, takeEvery, put } from "redux-saga/effects";

import * as typesProduct from "./../constant/product";
import * as actionsProduct from "./../actions/product";
import * as productApis from "./../apis/Product";

function* getProductAll({ payload }) {
    const { params } = payload;
    const products = yield call(productApis.fetchProduct, params);
    const { status, data } = products;
    if (status === 200) {
        yield put(actionsProduct.fetchProductSuccess(data));
    }
}

function* rootSaga() {
    yield takeEvery(typesProduct.GET_PRODUCT, getProductAll);
}

export default rootSaga;