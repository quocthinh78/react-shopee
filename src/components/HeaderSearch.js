import React from "react";
import { NavLink } from "react-router-dom";
function HeaderSearch(props) {
    const { searchName, isOpenSearch, handleOpen } = props;
    return (
        <div className="header__search">
            <div className="header__search-input-wrap">
                <input
                    onFocus={(e) => {
                        props.search(e.target.value);
                        handleOpen(true)
                    }}
                    onChange={(e) => props.search(e.target.value)}
                    type="text"
                    className="header__search-input"
                    placeholder="Nhập sản phẩm cần tìm"
                />
                {isOpenSearch && (
                    <div className="header__search-history">
                        <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
                        <ul className="header__search-history-list">
                            {searchName.map((product) => {
                                return (
                                    <li key={product._id} onClick={() => handleOpen(false)} className="header__search-history-item">
                                        <NavLink to={`/detail/${product._id}`}>
                                            {product.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <div className="header__search-select">
                <span className="header__search-select-label">
                    Trong shop
                    <i className="fas header__search-select-icon fa-angle-down" />
                </span>
                <ul className="header__search-option">
                    <li className=" header__search-option-item header__search-option--active">
                        <span>Trong shop</span>
                        <i className="fas fa-check" />
                    </li>
                    <li className="header__search-option-item">
                        <span>Ngoài shop</span>
                        <i className="fas fa-check" />
                    </li>
                </ul>
            </div>
            <button className="header__search-btn">
                <i className="header__search-btn-icon fas fa-search" />
            </button>
        </div>
    );
}

export default HeaderSearch;
