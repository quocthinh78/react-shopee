import * as types from "./../constant/product";

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_SUCESS:
            const { data } = action.payload;
            return {
                ...state,
                products: data,
            };
        default:
            return state;
    }
};

export default reducer;