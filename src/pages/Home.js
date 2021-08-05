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


    const products = useSelector((state) => state.product.products);

    const sortValue = useSelector(state => state.controls.sortValue)

    const handleSort = (sortValue) => {
        dispatch(controlActions.sortProduct(sortValue));
    }
    const pagination = useSelector(state => state.pagination);
    const [pages, setPage] = useState(pagination)

    useEffect(() => {
        (
            async (done) => {
                dispatch(productActions.fetchProduct(pages));
                dispatch(productActions.fetchCategory({ page: "thinh" }));
            }
        )()
    }, [pages]);

    const handleChangePage = (page) => {
        setPage({
            ...pages,
            page: page,
        })
    }
    const categoryList = useSelector(state => state.product.category);
    return (
        <div className="app" >
            <Header />
            <div className="app__container">
                <div className="grid">
                    <div className="grid__row app__content">
                        <Siderbar categoryList={categoryList} />
                        <Product handleChangePage={handleChangePage} pagination={pagination} onSort={handleSort} sortValue={sortValue} products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
