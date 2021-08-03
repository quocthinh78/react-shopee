import React from "react";
import { useDispatch } from "react-redux";
import * as modalActions from "./../actions/modal"
function ModalLogin(props) {
    const dispatch = useDispatch();
    const hideModal = () => {
        dispatch(modalActions.hideModal())
    }
    return (
        <div className="auth-form">
            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng nhập</h3>
                    <span className="auth-form__switch-btn">Đăng kí</span>
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
                </div>
                <div className="auth-form__aside">
                    <div className="auth-form__help">
                        <a
                            href="#/"
                            className="auth-form__help-link auth-form__help-forgot"
                        >
                            Quên mật khẩu
                        </a>
                        <span className="auth-form__help-separated" />
                        <a href="#/" className="auth-form__help-link">
                            Cần trợ giúp?
                        </a>
                    </div>
                </div>
                <div className="auth-form__controls">
                    <button className="btn auth-form__controls_back btn-normal"
                        onClick={hideModal}
                    >
                        TRỞ LẠI
                    </button>
                    <button className="btn btn-primary">ĐĂNG NHẬP</button>
                </div>
            </div>
            <div className="auth-form__socials">
                <a
                    href="#/"
                    className="auth-form__socials--facebook  btn btn--with-icon btn--size-s"
                >
                    <i className="fab auth-form__socials-title auth-form__socials-icon fa-facebook-square" />
                    Kết nối với Facebook
                </a>
                <a
                    href="#/"
                    className="auth-form__socials--google btn btn--with-icon btn--size-s"
                >
                    <i className="fab auth-form__socials-title auth-form__socials-icon fa-google" />
                    Kết nối với Google
                </a>
            </div>
        </div>
    );
}

export default ModalLogin;
