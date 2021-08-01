import * as typesCart from "./../constant/cart";
// add cart
export const addProductInCart = (product, quantity) => {
    return {
        type: typesCart.ADD_CART,
        payload: {
            product: product,
            quantity: quantity,
        },
    };
};
export const addProductInCartSuccess = (product, quantity) => {
    return {
        type: typesCart.ADD_CART_SUCCESS,
        payload: {
            product,
            quantity,
        },
    };
};

// update cart

// remove cart

export const deleteCart = (product) => {
    return {
        type: typesCart.DELETE_CART,
        payload: {
            product
        }
    }
}

export const deleteCartSuccess = (product) => {
    return {
        type: typesCart.DELETE_CART_SUCCESS,
        payload: {
            product
        }
    }
}