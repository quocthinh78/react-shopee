import React from "react";
import PropTypes from "prop-types";


function Pagination(props) {
    const indexPage = (totolPages) => {
        let html = [];
        for (let i = 0; i < totolPages.length; i++) {
            html.push(<li className="pagination-item pagination-item--active">
                <a key={i} className="pagination-item__link">1</a>
            </li>)
        }
        return html
    }
    const { page, limit, totalRows } = props.pagination;
    const totalPage = Math.ceil(totalRows / limit);
    return (
        <div className="pagination home-product__pagination">
            <li className="pagination-item">
                <a className="pagination-item__link pagination">
                    <i className="pagination-item__icon fas fa-angle-left" />
                </a>
            </li>
            {indexPage(totalPage)}
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
