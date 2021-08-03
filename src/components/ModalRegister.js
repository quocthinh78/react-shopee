import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as modalActions from "./../actions/modal"


function ModalRegister(props) {
    const dispatch = useDispatch();
    const hideModal = () => {
        dispatch(modalActions.hideModal())
    }
    return (
        <div className="auth-form">
            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng kí</h3>
                    <span className="auth-form__switch-btn">Đăng nhập</span>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input
                            type="text"
                            className="auth-form__input"
                            placeholder="Email của bạn"
                        />
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="password"
                            className="auth-form__input"
                            placeholder="Mật khẩu của bạn"
                        />
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="password"
                            className="auth-form__input"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>
                </div>
                <div className="auth-form__aside">
                    <p className="auth-form__policy-text">
                        Bằng việc đăng kí, bạn đã đồng ý với shopee về
                        <a className="auth-form__policy-link">ĐIều khoản dịch vụ</a> &amp;
                        <a className="auth-form__policy-link">Chính sách bảo mật</a>
                    </p>
                </div>
                <div className="auth-form__controls">
                    <button className="btn auth-form__controls_back btn-normal"
                        onClick={hideModal}
                    >
                        TRỞ LẠI
                    </button>
                    <button className="btn btn-primary">ĐĂNG KÍ</button>
                </div>
            </div>
            <div className="auth-form__socials">
                <a className="auth-form__socials--facebook  btn btn--with-icon btn--size-s">
                    <i className="fab auth-form__socials-title auth-form__socials-icon fa-facebook-square" />
                    Kết nối với Facebook
                </a>
                <a className="auth-form__socials--google btn btn--with-icon btn--size-s">
                    <i className="fab auth-form__socials-title auth-form__socials-icon fa-google" />
                    Kết nối với Google
                </a>
            </div>
        </div>
    );
}

ModalRegister.propTypes = {};

export default ModalRegister;
