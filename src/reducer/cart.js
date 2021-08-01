import { toastError, toastSuccess } from "./../helper/toastify";
import * as typesCart from "./../constant/cart";
const data = localStorage.getItem("cart");

const initialState = {
    cart: data ? data : [],
};
const findIndex = (cart, product) => {
    let i = -1;
    for (let index = 0; index < cart.length; index++) {
        if (cart[index]._id === product._id) {
            i = index;
        }
    }
    return i;
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCart.ADD_CART_SUCCESS:
            toastSuccess("Thêm thành công");
            const index = findIndex(state.cart, action.product);
            if (index === -1) {
                let cartAdd = [{...action.product, quatity: 1 }].concat(state.cart);
                localStorage.setItem("cart", JSON.stringify(cartAdd));
                return {
                    ...state,
                    cart: cartAdd,
                };
            }
            let count = { quatity: (state.cart[index].quatity += 1) };
            const cartAddUp = [{...action.product, quatity: count.quatity }];
            return {
                ...state,
                cart: cartAddUp,
            };
        default:
            return {...state };
    }
};

export default cartReducer;