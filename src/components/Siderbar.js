import React from "react";
import { NavLink } from "react-router-dom";
import { changslug } from "./../common/currency"
function Siderbar(props) {
    const { categoryList } = props;
    return (
        <div className="grid__column-2">
            <nav className="category">
                <h3 className="category__heading">
                    <i className="category__heading-icon fas fa-list"></i> Danh mục
                </h3>
                <ul className="category-list">
                    <NavLink to="/home" className="categorty-item" activeClassName="category-item--active">
                        <div className="category-item__link">
                            Tất cả
                        </div>
                    </NavLink>
                    {
                        categoryList.map(cat => {
                            const slug = changslug(cat.name)
                            return (<NavLink to={`/${slug}/${cat._id}`} key={cat._id} className="categorty-item" activeClassName="category-item--active">
                                <div className="category-item__link">
                                    {cat.name}
                                </div>
                            </NavLink>)
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}


export default Siderbar;
