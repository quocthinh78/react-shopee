import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "./../actions/product";
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

    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <div className="grid">
                    <div className="grid__row app__content">
                        <Siderbar />
                        <Product products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
