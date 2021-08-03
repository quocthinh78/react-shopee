import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as actionsCart from "./../actions/cart"
import * as actionsModal from "./../actions/modal"
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CartList from "./../components/CartList"
import ModalDeleteProduct from "./../components/ModalDeleteProduct"

function Cart(props) {
    const cartProduct = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const onHandleUpdateCart = (product, quantity) => {
        if (quantity && 1 <= quantity && quantity <= 10 && typeof quantity === 'number') {
            dispatch(actionsCart.updateCart(product, quantity));
        }
    }

    const deleteProductInCart = () => {
        dispatch(actionsModal.showModal());
        dispatch(actionsModal.changeModalContent(<ModalDeleteProduct />))
    }

    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <CartList deleteProductInCart={deleteProductInCart} onHandleUpdateCart={onHandleUpdateCart} cartProduct={cartProduct} />
            </div>
            <Footer />
        </div>
    )
}

export default Cart

