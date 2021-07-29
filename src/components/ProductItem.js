import React from "react";
import PropTypes from "prop-types";

function ProductItem(props) {
    return (
        <div className="grid__column-2-4">
            <a className="home-poduct-item">
                <div
                    className="home-product-item__img"
                    style={{ backgroundImage: "url(./assets/img/sp1.jpeg)" }}
                />
                <h4 className="home-product-item__name">
                    Chân váy hoa nhí kèm hoa nhí kèm hoa nhí kèm hình thật bảng màu ở cuối
                </h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.000.000d</span>
                    <span className="home-product-item__price-current">1.200.000d</span>
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
                    <span className="home-product-item__sold">88 da ban</span>
                </div>
                <div className="home-product-item__origin">
                    <div className="home-product-item__brand">Whoo</div>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                </div>
                <div className="home-product-item__favourite">
                    <i className="fas fa-check" /> <span>Yêu thích</span>
                </div>
                <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
    );
}

ProductItem.propTypes = {};

export default ProductItem;
