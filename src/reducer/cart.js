import { toastError, toastSuccess } from "./../helper/toastify";
import * as typesCart from "./../constant/cart";
var data = localStorage.getItem("cart");

const initialState = {
    cart: data ? JSON.parse(data) : [],
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
    let index;
    switch (action.type) {
        case typesCart.ADD_CART_SUCCESS:
            toastSuccess("Thêm thành công");
            index = findIndex(state.cart, action.payload.product);
            if (index === -1) {
                let cartAdd = [
                    { ...action.payload.product, quatity: action.payload.quantity },
                ].concat(state.cart);
                localStorage.setItem("cart", JSON.stringify(cartAdd));
                return {
                    ...state,
                    cart: cartAdd,
                };
            }
            let count = {
                quatity: (state.cart[index].quatity += action.payload.quantity),
            };
            const cartAddUp = [{ ...action.payload.product, quatity: count.quatity }];
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state,
                cart: cartAddUp,
            };
        case typesCart.DELETE_CART_SUCCESS:
            toastSuccess("Đã xoá sản phẩm");
            index = findIndex(state.cart, action.payload.product);
            state.cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(state.cart))
            return {
                ...state,
                cart: [...state.cart]
            }
        case typesCart.UPDATE_CART:
            index = findIndex(state.cart, action.payload.product);
            state.cart[index].quatity = action.payload.quantity;
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state,
                cart: [...state.cart]
            }
        case typesCart.ADD_CART_IN_DATABASE_SUCCESS : 
        localStorage.removeItem("cart")
            return {
                ...state,
                cart : []
            }
        default:
            return { ...state };
    }
};

export default cartReducer;