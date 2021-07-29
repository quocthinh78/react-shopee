import React from 'react'
import PropTypes from 'prop-types'

function Controls(props) {
    return (
        <div className="html-filter">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn-primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input__icon fas fa-angle-down" />
                <ul className="select-input__list">
                    <li className="select-input__item">
                        <a href className="select-input__link">
                            Giá: Cao đến thấp
                        </a>
                    </li>
                    <li className="select-input__item">
                        <a href className="select-input__link">
                            Giá: Cao đến thấp
                        </a>
                    </li>
                </ul>
            </div>
            <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/ 14
                </span>
                <div className="home-filter__page-control">
                    <a
                        href
                        className="home-filter__page-btn home-filter__page-btn--disable"
                    >
                        <i className="home__filter-icon fas fa-angle-left" />
                    </a>
                    <a href className="home-filter__page-btn">
                        <i className="home__filter-icon fas fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    )
}

Controls.propTypes = {

}

export default Controls
