import React from "react";
import PropTypes from "prop-types";

function Siderbar(props) {
    return ( <
        div className = "grid__column-2" >
        <
        nav className = "category" >
        <
        h3 className = "category__heading" >
        <
        i className = "category__heading-icon fas fa-list" / > Danh mục <
        /h3> <
        ul className = "category-list" >
        <
        li className = "categorty-item category-item--active" >
        <
        a className = "category-item__link" > Trang điểm mặt < /a> <
        /li> <
        li className = "categorty-item" >
        <
        a className = "category-item__link" > Trang điểm mặt < /a> <
        /li> <
        li className = "categorty-item" >
        <
        a className = "category-item__link" > Trang điểm mặt < /a> <
        /li> <
        li className = "categorty-item" >
        <
        a className = "category-item__link" > Trang điểm mặt < /a> <
        /li> <
        /ul> <
        /nav> <
        /div>
    );
}

Siderbar.propTypes = {};

export default Siderbar;