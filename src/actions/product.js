import * as typesProduct from "./../constant/product";

// all product
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

// detail product
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

// fetchBreadcrumb
export const fetchBreadcrumb = (id) => {
    return {
        type: typesProduct.GET_BREADCRUM,
        payload: {
            params: id,
        },
    };
};

export const fetchBreadcrumbSuccess = (breadcrumb) => {
    return {
        type: typesProduct.GET_BREADCRUM_SUCCESS,
        payload: {
            breadcrumb,
        },
    };
};

// controls
export const sortProductSuccess = (value) => {
    return {
        type: typesProduct.SORT_SUCCESS,
        payload: {
            value
        }
    }
}
