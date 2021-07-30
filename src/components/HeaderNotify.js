import React from "react";
import PropTypes from "prop-types";

function HeaderNotify(props) {
    return (
        <li className="header__navbar-item header__navbar-item--has-qr">
            <a className="header__navbar-item-link" >
                <i className="header__navbar-icon far fa-bell" /> Thông báo
            </a>
            <div className="header__notify">
                <header className="header__notyfi-header">
                    <h3>Thông báo mới nhận</h3>
                </header>
                <ul className="header__notyfi-list">
                    <li className="header__notify-item header__notify-item--viewed">
                        <a className="header__notyfi-link">
                            <img
                                src="/assets/img/notify1.jpeg"
                                alt=""
                                className="header__notyfi-img"
                            />
                            <div className="header__notyfi-info">
                                <span className="header__notyfi-name">
                                    Mỹ phẩm Ohui chính hãng
                                </span>
                                <span className="header__notyfi-description">
                                    Mô tả sản phảm chính hãng
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
                <footer className="header__notify-footer">
                    <a className="header__notify--footer-btn">
                        <span>Xem tất cả</span>
                    </a>
                </footer>
            </div>
        </li>
    );
}

HeaderNotify.propTypes = {};

export default HeaderNotify;
