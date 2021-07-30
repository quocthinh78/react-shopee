import React from "react";
import PropTypes from "prop-types";

function HeaderSearch(props) {
    return ( <
        div className = "header__search" >
        <
        div className = "header__search-input-wrap" >
        <
        input type = "text"
        className = "header__search-input"
        placeholder = "Nhập sản phẩm cần tìm" /
        >
        <
        div className = "header__search-history" >
        <
        h3 className = "header__search-history-heading" > Lịch sử tìm kiếm < /h3> <
        ul className = "header__search-history-list" >
        <
        li className = "header__search-history-item" >
        <
        a > Kem dưỡng da < /a> <
        /li> <
        li className = "header__search-history-item" >
        <
        a > Kem trị mụn < /a> <
        /li> <
        li className = "header__search-history-item" >
        <
        a > Kem dưỡng da < /a> <
        /li> <
        /ul> <
        /div> <
        /div> <
        div className = "header__search-select" >
        <
        span className = "header__search-select-label" >
        Trong shop <
        i className = "fas header__search-select-icon fa-angle-down" / >
        <
        /span> <
        ul className = "header__search-option" >
        <
        li className = " header__search-option-item header__search-option--active" >
        <
        span > Trong shop < /span> <
        i className = "fas fa-check" / >
        <
        /li> <
        li className = "header__search-option-item" >
        <
        span > Ngoài shop < /span> <
        i className = "fas fa-check" / >
        <
        /li> <
        /ul> <
        /div> <
        button className = "header__search-btn" >
        <
        i className = "header__search-btn-icon fas fa-search" / >
        <
        /button> <
        /div>
    );
}

HeaderSearch.propTypes = {};

export default HeaderSearch;