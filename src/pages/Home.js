import React from 'react'
import Product from '../components/Product'
import Siderbar from '../components/Siderbar'
import Header from "./../components/Header"
import Footer from "./../components/Footer"
function Home(props) {
    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <div className="grid">
                    <div className="grid__row app__content">
                        <Siderbar />
                        <Product />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Home

