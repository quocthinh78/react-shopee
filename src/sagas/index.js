import { call, takeEvery, put, takeLatest, delay } from "redux-saga/effects";

import * as typesProduct from "./../constant/product";
import * as actionsProduct from "./../actions/product";
import * as productApis from "./../apis/Product";
import * as typesCart from "./../constant/cart";
import * as actionsCart from "./../actions/cart";
import * as actionModal from "./../actions/modal"
import * as typesControls from "./../constant/controls"
import * as actionsControls from "./../actions/controls"

function* getProductAll({ payload }) {
    yield delay(400)
    const { params } = payload;
    const response = yield call(productApis.pagination, params);
    const { status, data } = response;
    const { products, pagination } = data;
    if (status === 200) {
        yield put(actionsProduct.fetchProductSuccess(products));
        yield put(actionsProduct.paginationSuccess(pagination));

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
    const searchKey = yield call(productApis.getBeradCrumb, params);
    const { status, data } = searchKey;
    if (status === 200) {
        yield put(actionsProduct.fetchBreadcrumbSuccess(data));
    }
}
// cart
function* AddToCart({ payload }) {
    const { product, quantity } = payload;
    yield put(actionsCart.addProductInCartSuccess(product, quantity));
}

function* deleteCart({ payload }) {
    const { product } = payload;
    yield put(actionModal.hideModal())
    yield put(actionsCart.deleteCartSuccess(product));
}
function* updateCart({ payload }) {
    const { product, quantity } = payload;
    yield put(actionsCart.updateCartSuccess(product, quantity));
}

// sort 

function* sortProduct({ payload }) {
    const { value } = payload;
    yield put(actionsProduct.sortProductSuccess(value))
}
function* searchKey({ payload }) {
    const name = payload.value;
    const searchKey = yield call(productApis.getSearchKey, { name });
    const { status, data } = searchKey;
    if (status === 200) {
        yield put(actionsControls.searchSuccess(data));
    }
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

    // sort 
    yield takeLatest(typesControls.SORT, sortProduct)

    //search
    yield takeLatest(typesControls.SEARCH, searchKey)


}

export default rootSaga;