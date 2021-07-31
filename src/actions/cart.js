import * as typesCart from "./../constant/cart";
// add cart
export const addProductInCart = (params) => {
    return {
        type: typesCart.ADD_CART,
        params: params,
    };
};
export const addProductInCartSuccess = () => {
    return {
        type: typesCart.ADD_CART_SUCCESS,
    };
};

// update cart

// remove cart