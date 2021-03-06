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
export const updateCart = (product, quantity) => {
    return {
        type: typesCart.UPDATE_CART,
        payload: {
            product: product,
            quantity: quantity,
        }
    }
}

export const updateCartSuccess = (product, quantity) => {
    return {
        type: typesCart.UPDATE_CART_SUCCESS,
        payload: {
            product: product,
            quantity: quantity
        }
    }
}
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