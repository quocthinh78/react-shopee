import React from "react";
import PropTypes from "prop-types";

function HeaderCart(props) {
    const { productsIncart } = props;
    console.log("headerCârt", productsIncart);
    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="header__cart-icon fas fa-shopping-cart" />
                <span className="header__cart-notice">3</span>
                {/* No cart : header__cart-list--no-cart */}
                <div className={productsIncart.length > 0 ? "header__cart-list" : "header__cart-list header__cart-list--no-cart"}>
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
                            {
                                productsIncart.map(product => {
                                    return (
                                        <li key={product._id} className="header__cart-item">
                                            <img
                                                src={`${product.image}`}
                                                alt=""
                                                className="header__cart-img"
                                            />
                                            <div className="header__cart-item-info">
                                                <div className="header__cart-item-head">
                                                    <h5 className="header__cart-item-name">
                                                        {product.name}
                                                    </h5>
                                                    <div className="header__cart-price-wrap">
                                                        <span className="header__cart-item-price">
                                                            {product.price * product.discount / 100}đ
                                                        </span>
                                                        <span className="header__cart-item-multiply">X</span>
                                                        <span className="header__cart-item-qnt">{product.quatity}</span>
                                                    </div>
                                                </div>
                                                <div className="header__cart-item-body">
                                                    <span className="header__cart-item-description">
                                                        Nơi sản xuất: {product.national}
                                                    </span>
                                                    <span className="header__cart-item-remove">Xoá</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="header__cart-viewcart btn btn-primary">
                            Xem giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

HeaderCart.propTypes = {};

export default HeaderCart;
