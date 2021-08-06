import React from "react";
import { NavLink } from "react-router-dom";
import { currencyFormat } from "./../common/currency";
function ProductItem(props) {
    const { product } = props;
    return (
        <div className="grid__column-2-4">
            <NavLink className="home-poduct-item" to={`/detail/${product._id}`}>
                <div
                    className="home-product-item__img"
                    style={{ backgroundImage: `url(${product.image})` }}
                />
                <h4 className="home-product-item__name">{product.name}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-old">
                        {currencyFormat(product.price)}
                    </span>
                    <span className="home-product-item__price-current">
                        {currencyFormat((product.price * (100 - product.discount)) / 100)}
                    </span>
                </div>
                <div className="home-product-item__action">
                    <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill far fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                        <i className="home-product-item__start--gold fas fa-star" />
                        <i className="home-product-item__start--gold fas fa-star" />
                        <i className="home-product-item__start--gold fas fa-star" />
                        <i className="home-product-item__start--gold fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">
                        {product.saled} đã bán
                    </span>
                </div>
                <div className="home-product-item__origin">
                    <div className="home-product-item__brand">Whoo</div>
                    <span className="home-product-item__origin-name">
                        {product.national}
                    </span>
                </div>
                <div className="home-product-item__favourite">
                    <i className="fas fa-check" /> <span>Yêu thích</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">
                        {product.discount}%
                    </span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </NavLink>
        </div>
    );
}

ProductItem.propTypes = {};

export default ProductItem;
