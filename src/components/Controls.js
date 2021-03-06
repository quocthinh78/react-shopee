import React from "react";
import { li, liButton } from "react-bootstrap"
function Controls(props) {
    return (
        <div className="html-filter">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn-primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input curson-pointer">
                <span className="select-input__label">Giá</span>
                <i className="select-input__icon fas fa-angle-down" />
                <ul className="select-input__list">
                    <li className={props.sortValue === 1 ? "select-input__item sort_selected" : "select-input__item"} onClick={() => props.onSort(1)}>
                        <a className="select-input__link">Giá: Cao đến thấp</a>
                        <i className="fa fa-check"></i>
                    </li>
                    <li className={props.sortValue === -1 ? "select-input__item sort_selected" : "select-input__item"} onClick={() => props.onSort(-1)}>
                        <a className="select-input__link">Giá: Thấp đến cao</a>
                        <i className="fa fa-check"></i>
                    </li>
                </ul>
            </div>
            <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/ 14
                </span>
                <div className="home-filter__page-control">
                    <a className="home-filter__page-btn home-filter__page-btn--disable">
                        <i className="home__filter-icon fas fa-angle-left" />
                    </a>
                    <a className="home-filter__page-btn">
                        <i className="home__filter-icon fas fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    );
}

Controls.propTypes = {};

export default Controls;
