import { call, takeEvery, put, takeLatest } from "redux-saga/effects";

import * as typesProduct from "./../constant/product";
import * as actionsProduct from "./../actions/product";
import * as productApis from "./../apis/Product";
import * as typesCart from "./../constant/cart";
import * as actionsCart from "./../actions/cart";

function* getProductAll({ payload }) {
    const { params } = payload;
    const products = yield call(productApis.fetchProduct, params);
    const { status, data } = products;
    if (status === 200) {
        yield put(actionsProduct.fetchProductSuccess(data));
    }
}

function* AddToCart({ payload }) {
    const { product } = payload;
    yield put(actionsCart.addProductInCartSuccess(product));
}

function* getDetailProduct({ payload }) {
    const { params } = payload;
    const productDetail = yield call(productApis.fetchProductDetail, params);
    const { status, data } = productDetail;
    if (status === 200) {
        yield put(actionsProduct.fetchDetailProductSuccess(data));
    }
}

function* rootSaga() {
    yield takeEvery(typesProduct.GET_PRODUCT, getProductAll);
    yield takeLatest(typesCart.ADD_CART, AddToCart);
    yield takeLatest(typesProduct.GET_DETAIL_PRODUCT, getDetailProduct);
}

export default rootSaga;