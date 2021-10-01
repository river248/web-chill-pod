import ProductTitle from 'components/ProductTitle/ProductTitle'
import TheBestChill from 'resources/images/TheBestChill.jpg'
import MonkeyChill from 'resources/images/MonkeyChill.jpg'

import React from 'react'
import './Product.scss'

function Product() {
    return (
        <div className="product-1-container">
            <div className="product-1">
                <img src={MonkeyChill} alt="monkey chill"/>
                <img src={TheBestChill} alt="the best chill"/>
                <div className="product-1-name">
                    <span>NHO</span>
                    <span>MATCHA</span>
                </div>
            </div>
            <ProductTitle/>
        </div>
    )
}

export default Product
