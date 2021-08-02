import { delay, call, takeEvery, put, takeLatest } from "redux-saga/effects";

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
function* getDetailProduct({ payload }) {
    const { params } = payload;
    const productDetail = yield call(productApis.fetchProductDetail, params);
    const { status, data } = productDetail;
    if (status === 200) {
        yield put(actionsProduct.fetchDetailProductSuccess(data));
    }
}

function* getBeradCrumb({ payload }) {
    const { params } = payload;
    const dataBreadcrumb = yield call(productApis.getBeradCrumb, params);
    const { status, data } = dataBreadcrumb;
    if (status === 200) {
        yield put(actionsProduct.fetchBreadcrumbSuccess(data));
    }
}
// cart
function* AddToCart({ payload }) {
    yield delay(500)
    const { product, quantity } = payload;
    yield put(actionsCart.addProductInCartSuccess(product, quantity));
}

function* deleteCart({ payload }) {
    const { product } = payload;
    yield put(actionsCart.deleteCartSuccess(product))
}
function* updateCart({ payload }) {
    yield delay(4000);
    const { product, quantity } = payload;
    yield put(actionsCart.updateCartSuccess(product, quantity));
}
function* rootSaga() {
    // get product
    yield takeEvery(typesProduct.GET_PRODUCT, getProductAll);
    yield takeLatest(typesProduct.GET_DETAIL_PRODUCT, getDetailProduct);
    yield takeLatest(typesProduct.GET_BREADCRUM, getBeradCrumb);

    // cart
    yield takeLatest(typesCart.ADD_CART, AddToCart);
    yield takeLatest(typesCart.DELETE_CART, deleteCart)
    yield takeLatest(typesCart.UPDATE_CART, updateCart)
}

export default rootSaga;