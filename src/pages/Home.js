import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import * as productActions from "./../actions/product";
import * as controlActions from "./../actions/controls";
import * as userActions from "./../actions/user"
import 'bootstrap/dist/css/bootstrap.min.css';
import Siderbar from "../components/Siderbar";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Product from "../components/Product";
function Home(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const idRef = useRef(null);
    let products = useSelector((state) => state.product.products);
    const isLogin = useSelector(state => state.user.isLogin)
    const typeMoney = useSelector((state) => state.product.typeMoney)

    const sortValue = useSelector(state => state.controls.sortValue)

    const handleSort = (sortValue) => {
        dispatch(controlActions.sortProduct(sortValue));
    }
    const pagination = useSelector(state => state.pagination);
    const [pages, setPage] = useState(pagination)
    useEffect(() => {
        const loading = () => {
            if (isLogin) {
                dispatch(userActions.getUser())
            }
            if (id === idRef.current) {
                dispatch(productActions.fetchProduct({ ...pages, cat: id }));
            } else {
                dispatch(productActions.fetchProduct({ ...pages, page: 1, cat: id }));
            }
            dispatch(productActions.fetchCategory({ page: "" }));
            // dispatch(productActions.sortDefault())
        }
        loading()

        return () => idRef.current = id;

    }, [pages, id]);

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
                        <Product typeMoney={typeMoney} handleChangePage={handleChangePage} pagination={pagination} onSort={handleSort} sortValue={sortValue} products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
