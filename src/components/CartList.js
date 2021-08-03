import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri"
import { RiDeleteBin6Line } from "react-icons/ri"
import CartItem from "./../components/CartItem"
import CartCheckout from './CartCheckout'
function CartList(props) {
    const { cartProduct } = props;
    return (
        <div className="grid cart-wrap">
            <div className="grid__row cart">
                <div className="grid__column-12">
                    <div className="cart__alert">
                        <div className="cart__alert-icon">
                            <RiErrorWarningLine />
                        </div>
                        <div className="cart__alert-title">
                            Do ảnh hưởng của dịch Covid-19, một số khu vực có thể nhận hàng chậm hơn dự kiến. Tiki đang nỗ lực giao các đơn hàng trong thời gian sớm nhất. Cám ơn sự thông cảm của quý khách!
                        </div>
                    </div>
                </div>
                <div className="grid__column-12 cart__list-title">
                    Giỏ hàng
                </div>
                {cartProduct.length ? <>
                    <div className="grid__column-9 border-rd">
                        <div className="cart__list-th">
                            <div className="grid__row">
                                <div className="col-1">
                                    <input type="checkbox" />
                                    Tất cả (2 sản phẩm)
                                </div>
                                <div className="col-2">Đơn giá</div>
                                <div className="col-3">Số lượng</div>
                                <div className="col-4">Thành tiền</div>
                                <div className="col-5"><RiDeleteBin6Line /></div>
                            </div>
                        </div>
                        {cartProduct && cartProduct.map(product => {
                            return <CartItem deleteProductInCart={props.deleteProductInCart} onHandleUpdateCart={props.onHandleUpdateCart} product={product} key={product._id} />
                        })}
                    </div>
                    <div className="grid__column-3">
                        <CartCheckout cartProduct={cartProduct} />
                    </div>
                </> : <>
                    <div className="cart__list-nocart">
                        <img src="/assets/img/nocart.jpg" alt="" />
                        <div className="cart__list-nocart-content">
                            Bạn chưa có sản phẩm nào
                        </div>
                        <div className="btn-nocart">
                            Tiếp tục mua sắm
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}



export default CartList

