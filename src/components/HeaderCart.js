import React from 'react'
import PropTypes from 'prop-types'

function HeaderCart(props) {
    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="header__cart-icon fas fa-shopping-cart" />
                <span className="header__cart-notice">3</span>
                {/* No cart : header__cart-list--no-cart */}
                <div className="header__cart-list">
                    <img
                        src="/assets/img/nocart.jpg"
                        className="header__cart-no-cart-img"
                        alt=""
                    />
                    <span className="header__cart-list-no-cart-msg">
                        Chưa có sản phẩm
                    </span>
                    <div className="header__cart-have-cart">
                        <h4 className="header__cart-heading">Sản phẩm </h4>
                        <ul className="header__cart-list-item">
                            <li className="header__cart-item">
                                <img
                                    src="/assets/img/notify1.jpeg"
                                    alt=""
                                    className="header__cart-img"
                                />
                                <div className="header__cart-item-info">
                                    <div className="header__cart-item-head">
                                        <h5 className="header__cart-item-name">
                                            Bộ kem đặ dgdfg dfc vị vùng mắt
                                        </h5>
                                        <div className="header__cart-price-wrap">
                                            <span className="header__cart-item-price">
                                                2.000.000đ
                                            </span>
                                            <span className="header__cart-item-multiply">
                                                X
                                            </span>
                                            <span className="header__cart-item-qnt">1</span>
                                        </div>
                                    </div>
                                    <div className="header__cart-item-body">
                                        <span className="header__cart-item-description">
                                            Phân loại: Bạc
                                        </span>
                                        <span className="header__cart-item-remove">Xoá</span>
                                    </div>
                                </div>
                            </li>
                            <li className="header__cart-item">
                                <img
                                    src="/assets/img/notify1.jpeg"
                                    alt=""
                                    className="header__cart-img"
                                />
                                <div className="header__cart-item-info">
                                    <div className="header__cart-item-head">
                                        <h5 className="header__cart-item-name">
                                            Bộ kem đặ dgdfg dfc vị vùng mắt
                                        </h5>
                                        <div className="header__cart-price-wrap">
                                            <span className="header__cart-item-price">
                                                2.000.000đ
                                            </span>
                                            <span className="header__cart-item-multiply">
                                                X
                                            </span>
                                            <span className="header__cart-item-qnt">1</span>
                                        </div>
                                    </div>
                                    <div className="header__cart-item-body">
                                        <span className="header__cart-item-description">
                                            Phân loại: Bạc
                                        </span>
                                        <span className="header__cart-item-remove">Xoá</span>
                                    </div>
                                </div>
                            </li>
                            <li className="header__cart-item">
                                <img
                                    src="/assets/img/notify1.jpeg"
                                    alt=""
                                    className="header__cart-img"
                                />
                                <div className="header__cart-item-info">
                                    <div className="header__cart-item-head">
                                        <h5 className="header__cart-item-name">
                                            Bộ kem đặ dgdfg dfc vị vùng mắt
                                        </h5>
                                        <div className="header__cart-price-wrap">
                                            <span className="header__cart-item-price">
                                                2.000.000đ
                                            </span>
                                            <span className="header__cart-item-multiply">
                                                X
                                            </span>
                                            <span className="header__cart-item-qnt">1</span>
                                        </div>
                                    </div>
                                    <div className="header__cart-item-body">
                                        <span className="header__cart-item-description">
                                            Phân loại: Bạc
                                        </span>
                                        <span className="header__cart-item-remove">Xoá</span>
                                    </div>
                                </div>
                            </li>
                            <li className="header__cart-item">
                                <img
                                    src="/assets/img/notify1.jpeg"
                                    alt=""
                                    className="header__cart-img"
                                />
                                <div className="header__cart-item-info">
                                    <div className="header__cart-item-head">
                                        <h5 className="header__cart-item-name">
                                            Bộ kem đặ dgdfg dfc vị vùng mắt
                                        </h5>
                                        <div className="header__cart-price-wrap">
                                            <span className="header__cart-item-price">
                                                2.000.000đ
                                            </span>
                                            <span className="header__cart-item-multiply">
                                                X
                                            </span>
                                            <span className="header__cart-item-qnt">1</span>
                                        </div>
                                    </div>
                                    <div className="header__cart-item-body">
                                        <span className="header__cart-item-description">
                                            Phân loại: Bạc
                                        </span>
                                        <span className="header__cart-item-remove">Xoá</span>
                                    </div>
                                </div>
                            </li>
                            <li className="header__cart-item">
                                <img
                                    src="/assets/img/notify1.jpeg"
                                    alt=""
                                    className="header__cart-img"
                                />
                                <div className="header__cart-item-info">
                                    <div className="header__cart-item-head">
                                        <h5 className="header__cart-item-name">
                                            Bộ kem đặ dgdfg dfc vị vùng mắtBộ kem đặ dgdfg dfc
                                            vị vùng mắtBộ kem đặ dgdfg dfc vị vùng mắtBộ kem đặ
                                            dgdfg dfc vị vùng mắtBộ kem đặ dgdfg dfc vị vùng
                                            mắtBộ kem đặ dgdfg dfc vị vùng mắt
                                        </h5>
                                        <div className="header__cart-price-wrap">
                                            <span className="header__cart-item-price">
                                                2.000.000đ
                                            </span>
                                            <span className="header__cart-item-multiply">
                                                X
                                            </span>
                                            <span className="header__cart-item-qnt">1</span>
                                        </div>
                                    </div>
                                    <div className="header__cart-item-body">
                                        <span className="header__cart-item-description">
                                            Phân loại: Bạc
                                        </span>
                                        <span className="header__cart-item-remove">Xoá</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button className="header__cart-viewcart btn btn-primary">
                            Xem giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeaderCart.propTypes = {

}

export default HeaderCart

