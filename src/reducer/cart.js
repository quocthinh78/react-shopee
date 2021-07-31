import { toastError, toastSuccess } from "./../helper/toastify";
import * as typesCart from "./../constant/cart";
const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCart.ADD_CART_SUCCESS:
            toastSuccess("Thêm thành công");
            return {
                ...state,
                cart: [...action.product, [...state.cart]],
            };
        default:
            return state;
    }
};

export default cartReducer;