import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                TickID Mail
                            </a>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                Hưỡng Dẫn Mua Hàng
                            </a>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    Tuyển Dụng
                                </a>
                            </li>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                Mua Hàng
                            </a>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                Điều Khoản
                            </a>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    Trang Điểm Mặt
                                </a>
                            </li>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                Trang Điểm Môi
                            </a>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                Đồ Gia Dụng
                            </a>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    <i className="footer-item__icon fab fa-facebook" /> Facebook
                                </a>
                            </li>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                <i className="footer-item__icon fab fa-instagram" /> Instagram
                            </a>
                            <li className="footer-item" />
                            <a href className="footer-item__link">
                                <i className="footer-item__icon  fab fa-linkedin" />
                                LikedIn
                            </a>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Tải ứng dụng</h3>
                        <div className="footer__download">
                            <img
                                src="/assets/img/qr.png"
                                alt=""
                                className="footer__download-qr"
                            />
                            <div className="footer__download-apps">
                                <a href className="footer__download-app-link">
                                    <img
                                        src="/assets/img/google_paly.png"
                                        alt="Google play"
                                        className="footer_downlaod-app-img"
                                    />
                                </a>
                                <a href className="footer__download-app-link">
                                    <img
                                        src="/assets/img/app_store.png"
                                        alt="App store"
                                        className="footer_downlaod-app-img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid">
                    <div className="grid__row">
                        <p className="footer__text">©2021 - Bản quyền thuộc về MyCompany</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
