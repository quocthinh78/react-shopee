import * as types from "./../constant/product";

const initialState = {
    products: [],
    productDetail: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_SUCESS:
            const { data } = action.payload;
            return {
                ...state,
                products: data,
            };
        case types.GET_DETAIL_PRODUCT_SUCCESS:
            const { detail } = action.payload;
            return {
                ...state,
                productDetail: detail,
            };
        default:
            return state;
    }
};

export default reducer;