import React from 'react'
import { useDispatch } from 'react-redux';
import * as actionsModal from "./../actions/modal"
import { deleteCart } from "./../actions/cart"
function ModalDeleteProduct(props) {

    const dispatch = useDispatch();

    const handlehideModal = () => {
        dispatch(actionsModal.hideModal());
    }

    const hadleDeleteOnneCart = (product) => {
        dispatch(deleteCart(product));
    }

    return (
        <div className="auth-form">
            <div className="auth-form__container">
                <div className="modal__delete-product">
                    <div className="modal__delete-product-title">
                        Bạn muốn xoá sản phẩm này?
                    </div>
                    <div className="modal__delete-product-control">
                        <button className="btn btn-no-delete-product" onClick={handlehideModal}>
                            Không
                        </button>
                        <button className="btn btn-delete-product"
                            onClick={() => hadleDeleteOnneCart(props.product)}
                        >
                            Xoá</button>
                    </div>
                </div>
            </div>
        </div >
    )
}



export default ModalDeleteProduct

