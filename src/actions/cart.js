import * as typesCart from "./../constant/cart";

// add cart
export const addProductInCart = () => {
    return {
        type: typesCart.ADD_CART,
    };
};
export const addProductInCartSuccess = () => {
    return {
        type: typesCart.ADD_CART_SUCCESS,
    };
};

export const addProductInCartFail = () => {
    return {
        type: typesCart.ADD_CART_FAIL,
    };
};

// update cart

// remove cart