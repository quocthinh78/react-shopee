import React from 'react'
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { RiErrorWarningLine } from "react-icons/ri"
import { RiDeleteBin6Line } from "react-icons/ri"

function Cart(props) {
    return (
        <div className="app">
            <Header />
            <div className="app__container">
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
                            <div className="cart__list-total">
                                <div className="grid__row">
                                    <div className="cart__list-total-name col-1">
                                        <input type="checkbox" />
                                        <img src="https://vn-test-11.slatic.net/p/02303c82e10b1fcd1301109701dea211.jpg_400x400q90.jpg_.webp" alt="dfss" />
                                        <div className="cart__list-total-name-title">Máy đo huyết áp dạng kẹp ngón tay hỗ trợ đo nồng độ oxi trong máu, nhịp tim thông minh hiển thị màn hình LED cao cấp</div>
                                    </div>
                                    <div className="cart__list-total-price col-2">
                                        <div className="cart__list-total-price--after">345.000đ</div>
                                        <div className="cart__list-total-price--before">332.000đ</div>
                                    </div>
                                    <div className="cart__list-total-quanti col-3">
                                        <div className="cart__list-total-quanti-decrement">
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="" />
                                        </div>
                                        <div className="cart__list-total-quanti-quantity">
                                            <input type="text" value="3" />
                                        </div>
                                        <div className="cart__list-total-quanti-increment">
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="cart__list-total-total col-4">
                                        444.000đ
                                    </div>
                                    <div className="cart__list-total-delete col-5">
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>
                            </div>
                            <div className="cart__list-total">
                                <div className="grid__row">
                                    <div className="cart__list-total-name col-1">
                                        <input type="checkbox" />
                                        <img src="https://vn-test-11.slatic.net/p/02303c82e10b1fcd1301109701dea211.jpg_400x400q90.jpg_.webp" alt="dfss" />
                                        <div className="cart__list-total-name-title">Máy đo huyết áp dạng kẹp ngón tay hỗ trợ đo nồng độ oxi trong máu, nhịp tim thông minh hiển thị màn hình LED cao cấp</div>
                                    </div>
                                    <div className="cart__list-total-price col-2">
                                        <div className="cart__list-total-price--after">345.000đ</div>
                                        <div className="cart__list-total-price--before">332.000đ</div>
                                    </div>
                                    <div className="cart__list-total-quanti col-3">
                                        <div className="cart__list-total-quanti-decrement">
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="" />
                                        </div>
                                        <div className="cart__list-total-quanti-quantity">
                                            <input type="text" value="3" />
                                        </div>
                                        <div className="cart__list-total-quanti-increment">
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="cart__list-total-total col-4">
                                        444.000đ
                                    </div>
                                    <div className="cart__list-total-delete col-5">
                                        <RiDeleteBin6Line />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="grid__column-3">
                            <div className="cart__total-price">
                                <div className="cart__total-price-ship">
                                    <div className="cart__total-price-ship-title">
                                        <div>Giao tới</div>
                                        <span>Thay đổi</span>
                                    </div>
                                    <div className="cart__total-price-ship-human">
                                        <div>Thịnh Võ</div>
                                        <span>0868913214</span>
                                    </div>
                                    <div className="cart__total-price-ship-address">
                                        8a/l2 hà thị khiêm quận 12, Phường Trung Mỹ Tây, Quận 12, Hồ Chí Minh
                                    </div>
                                </div>
                                <div className="cart__total-price-promotion">
                                    <div className="cart__total-price-promotion-info">
                                        <span>Shoppe khuyễn mãi</span>
                                        <div>
                                            Có thể chọn 2
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cart__total-price-promotion-choose">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg" alt="" />
                                        <span>Chọn hoặc nhập khuyễn mãi</span>
                                    </div>
                                </div>
                                <div className="cart__total-price-result">
                                    <div className="cart__total-price-result-top">
                                        <div className="cart__total-price-result-top-price">
                                            <span>Tạm tính</span>
                                            <div>844.000đ</div>
                                        </div>
                                        <div className="cart__total-price-result-top-discount">
                                            <span>Giảm giá</span>
                                            <div>833.000đ</div>
                                        </div>
                                    </div>
                                    <div className="cart__total-price-result-bottom">
                                        <span>Tổng cộng</span>
                                        <div className="cart__total-price-result-bottom-price">
                                            <div>
                                                500.000đ
                                            </div>
                                            <small>(Đã bao gồm VAT nếu có)</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__total-price-result-buy">
                                    Mua hàng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart

