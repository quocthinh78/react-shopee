import React from "react";
import PropTypes from "prop-types";


function Pagination(props) {
    const indexPage = (totolPages, page) => {
        let html = [];
        for (let i = 0; i < totolPages; i++) {
            if (i + 1 === page) {
                html.push(<li key={i} className="pagination-item pagination-item--active" onClick={() => props.handleChangePage(i + 1)}>
                    <a key={i} className="pagination-item__link">{i + 1}</a>
                </li>)
            }
            else {
                html.push(<li key={i} className="pagination-item" onClick={() => props.handleChangePage(i + 1)}>
                    <a key={i} className="pagination-item__link">{i + 1}</a>
                </li>)
            }
        }
        return html
    }
    const { page, limit, totalCount } = props.pagination;
    const totalPage = Math.ceil(totalCount / limit);
    return (
        <div className="pagination home-product__pagination">
            {page > 0 ? <li className="pagination-item" onClick={() => props.handleChangePage(page - 1)}>
                <a className="pagination-item__link pagination">
                    <i className="pagination-item__icon fas fa-angle-left" />
                </a>
            </li> : <li className="pagination-item">
                <a className="pagination-item__link pagination">
                    <i className="pagination-item__icon fas fa-angle-left" />
                </a>
            </li>}
            {indexPage(totalPage, page)}
            {page < totalPage ? <li className="pagination-item" onClick={() => props.handleChangePage(page + 1)}>
                <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right" />
                </a>
            </li> : <li className="pagination-item">
                <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right" />
                </a>
            </li>}
        </div >
    );
}

Pagination.propTypes = {};

export default Pagination;
