import React, { Suspense } from "react";
import Pagination from "./../components/Pagination";
import Controls from "./Controls";
import { Spinner } from "react-bootstrap"
const ProductItem = React.lazy(() => import("../components/ProductItem"));
function Loading() {
    return (
        <div className="loading-product">
            <Spinner size="lg" animation="border" variant="primary" />
            <Spinner size="lg" animation="border" variant="primary" />
            <Spinner size="lg" animation="border" variant="primary" />
            <Spinner size="lg" animation="border" variant="primary" />
            <Spinner size="lg" animation="border" variant="primary" />
        </div>
    )
}
function Product(props) {
    const { products } = props;
    return (
        <div className="grid__column-10">
            <Controls onSort={props.onSort} sortValue={props.sortValue} />
            <div className="home-product">
                <div className="grid__row product__list">
                    <Suspense fallback={<Loading />}>
                        {
                            products.map(product => {
                                return <ProductItem product={product} key={product._id} />
                            })
                        }
                    </Suspense>
                </div>
                <Pagination pagination={props.pagination} />
            </div>
        </div>
    );
}


export default Product;
