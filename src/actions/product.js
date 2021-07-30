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