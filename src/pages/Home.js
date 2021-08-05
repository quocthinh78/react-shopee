import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "./../actions/product";
import * as controlActions from "./../actions/controls";
import 'bootstrap/dist/css/bootstrap.min.css';
import Siderbar from "../components/Siderbar";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Product from "../components/Product";
function Home(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.fetchProduct());
    }, [dispatch]);
    const products = useSelector((state) => state.product.products);

    const sortValue = useSelector(state => state.controls.sortValue)

    const handleSort = (sortValue) => {
        dispatch(controlActions.sortProduct(sortValue));
    }
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalRows: 10
    })

    const [filters, setFilters] = useState({
        page: 1,
        limit: 10
    })

    return (
        <div className="app" >
            <Header />
            <div className="app__container">
                <div className="grid">
                    <div className="grid__row app__content">
                        <Siderbar />
                        <Product pagination={pagination} onSort={handleSort} sortValue={sortValue} products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
