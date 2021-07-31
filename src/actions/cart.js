import * as typesCart from "./../constant/cart";
// add cart
export const addProductInCart = (product) => {
    return {
        type: typesCart.ADD_CART,
        payload: {
            product: product,
        },
    };
};
export const addProductInCartSuccess = (product) => {
    return {
        type: typesCart.ADD_CART_SUCCESS,
        product,
    };
};

// update cart

// remove cart