import { toastError, toastSuccess } from "./../helper/toastify";
import * as typesCart from "./../constant/cart";
const initialState = {
    cart: [],
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
            console.log(index);
            if (index === -1) {
                return {
                    ...state,
                    cart: [{...action.product, quatity: 1 }].concat(state.cart),
                };
            }
            let count = { quatity: state.cart[index].quatity++ };
            return {
                ...state,
                cart: [{...action.product, quatity: count.quatity }],
            };
        default:
            return {...state };
    }
};

export default cartReducer;