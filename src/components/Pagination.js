import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
    return (
        <div className="pagination home-product__pagination">
            <li className="pagination-item">
                <a className="pagination-item__link pagination">
                    <i className="pagination-item__icon fas fa-angle-left" />
                </a>
            </li>
            <li className="pagination-item pagination-item--active">
                <a className="pagination-item__link">1</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">2</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">3</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">4</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">...</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">13</a>
            </li>
            <li className="pagination-item">
                <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right" />
                </a>
            </li>
        </div>
    );
}

Pagination.propTypes = {};

export default Pagination;
