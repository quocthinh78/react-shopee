import React from "react";

function HeaderAuth(props) {

    return (
        <>
            {/* user khi chua  dang nhap */}
            <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate"
                onClick={props.showModalRegister}
            >
                Đăng kí
            </li>
            <li className="header__navbar-item header__navbar-item--strong"
                onClick={props.showModalLogin}
            >
                Đăng nhập</li>
            {/* <li className="header__navbar-item header__navbar-user">
                <img
                    src="/assets/img/user.png"
                    alt=""
                    className="header__navbar-user-img"
                />
                <span className="header__navbar-user-name">Quốc Thịnh</span>
                <ul className="header__navbar-user-menu">
                    <li className="header__navbar-user-item">
                        <a>Tài khoản của tôi</a>
                    </li>
                    <li className="header__navbar-user-item">
                        <a>Địa chỉ của tôi</a>
                    </li>
                    <li className="header__navbar-user-item">
                        <a>Đơn mua</a>
                    </li>
                    <li className="header__navbar-user-item header__navbar-user-item-separate">
                        <a>Đăng xuất</a>
                    </li>
                </ul>
            </li> */}
        </>
    );
}


export default HeaderAuth;
