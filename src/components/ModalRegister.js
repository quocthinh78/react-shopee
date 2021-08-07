import React, { useState } from "react";
import Validator from './../common/validator';
import { rules } from "./../common/validator/rules"
import { useDispatch } from "react-redux";
import ModalLogin from "./../components/ModalLogin"
import * as modalActions from "./../actions/modal"
import * as userActions from "./../actions/user"
function ModalRegister(props) {
    const dispatch = useDispatch();
    const hideModal = () => {
        dispatch(modalActions.hideModal())
    }
    const [formValue, setFormValue] = useState({
        username: null,
        email: "",
        password: "",
        checkpass: "",
        errors: {}
    })
    const validator = new Validator(rules);
    const handleInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        setFormValue((formValue) => {
            return {
                ...formValue,
                errors: validator.validate(formValue)
            }
        })
        if (!formValue.checkpass || !formValue.password || formValue.name || !formValue.email) return;
        if (formValue.password !== formValue.checkpass) {
            setFormValue((formValue) => {
                return {
                    ...formValue,
                    errors: { ...formValue.errors, checkpass: "Mật khẩu không trùng khớp" },
                    password: "",
                    checkpass: ""
                }
            })
            return;
        }
        const { username, email, password } = formValue;
        dispatch(userActions.register({ username, email, password }));
        dispatch(modalActions.changeModalContent(<ModalLogin />))
    }

    const { errors } = formValue;
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
                            placeholder="Tên đăng nhập"
                            name="username"
                            value={formValue.username || ""}
                            onChange={handleInput}
                        />
                        {errors.username && <div className="auth-form__validation" style={{ display: "block" }}>{errors.username}</div>}
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="text"
                            className="auth-form__input"
                            placeholder="Email đăng kí"
                            name="email"
                            value={formValue.email || ""}
                            onChange={handleInput}
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
                            onChange={handleInput}
                        />
                        {errors.password && <div className="auth-form__validation" style={{ display: "block" }}>{errors.password}</div>}
                    </div>
                    <div className="auth-form__group">
                        <input
                            type="password"
                            className="auth-form__input"
                            placeholder="Nhập lại mật khẩu"
                            name="checkpass"
                            value={formValue.checkpass || ""}
                            onChange={handleInput}
                        />
                        {errors.checkpass && <div className="auth-form__validation" style={{ display: "block" }}>{errors.checkpass}</div>}
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
                    <button className="btn btn-primary" onClick={handleSubmit}>ĐĂNG KÍ</button>
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


export default ModalRegister;
