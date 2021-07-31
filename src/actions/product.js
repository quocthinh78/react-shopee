import * as typesProduct from "./../constant/product";

export const fetchProduct = (params = {}) => {
    return {
        type: typesProduct.GET_PRODUCT,
        payload: {
            params: "",
        },
    };
};
export const fetchProductSuccess = (data) => {
    return {
        type: typesProduct.GET_PRODUCT_SUCESS,
        payload: {
            data,
        },
    };
};
export const fetchDetailProduct = (params = {}) => {
    return {
        type: typesProduct.GET_DETAIL_PRODUCT,
        payload: {
            params,
        },
    };
};

export const fetchDetailProductSuccess = (detail) => {
    return {
        type: typesProduct.GET_DETAIL_PRODUCT_SUCCESS,
        payload: {
            detail,
        },
    };
};