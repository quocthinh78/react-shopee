import React from "react";
import PropTypes from "prop-types";
import Pagination from "./../components/Pagination";
import ProductItem from "./ProductItem";
import Controls from "./Controls";

function Product(props) {
    const { products } = props;
    return (
        <div className="grid__column-10">
            <Controls />
            <div className="home-product">
                <div className="grid__row">
                    {
                        products.map(product => {
                            return <ProductItem product={product} key={product._id} />
                        })
                    }
                </div>
                <Pagination />
            </div>
        </div>
    );
}

Product.propTypes = {};

export default Product;
