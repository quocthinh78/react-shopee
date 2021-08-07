import React, { useState } from "react";
import Validator from './../common/validator';
import { useHistory } from "react-router-dom"
import { rules } from "./../common/validator/rules"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import * as modalActions from "./../actions/modal"
import * as userActions from "./../actions/user"
function ModalLogin(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogin = useSelector((state) => state.user.isLogin)
    if (isLogin) {
        history.push("/");
    }
    const hideModal = () => {
        dispatch(modalActions.hideModal())
    }

    const [formValue, setformValue] = useState({
        email: "",
        password: "",
        errors: {}
    })
    const validator = new Validator(rules);
    const handleChange = (e) => {
        setformValue((formValue) => {
            return {
                ...formValue,
                [e.target.name]: e.target.value
            }
        })
        console.log(formValue)
    }
    const handleSubmit = (e) => {
        setformValue((formValue) => {
            return {
                ...formValue,
                errors: validator.validate(formValue)
            }
        })
        if (!formValue.password || !formValue.email) return;

        const { email, password } = formValue;
        dispatch(userActions.login({ email, password }));


    }
    const { errors } = formValue;
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
                            name="email"
                            value={formValue.email || ""}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="auth-form__validation" style={{ display: "block" }}>{errors.email}</div>}
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="password"
                            className="auth-form__input"
                            placeholder="Mật khẩu của bạn"
                            name="password"
                            value={formValue.password || ""}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="auth-form__validation" style={{ display: "block" }}>{errors.password}</div>}
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
                    <button className="btn btn-primary" onClick={handleSubmit}>ĐĂNG NHẬP</button>
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
