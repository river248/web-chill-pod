import ProductTitle from 'components/ProductTitle/ProductTitle'
import React from 'react'
import product from 'resources/images/product.jpg'
import './HotProduct.scss'
 
function HotProduct() {

    return (
        <div className="product-container">
            <ProductTitle/>
            <div className="hot-product">
                <img src={product} alt="relax monkey"/>
                <div className="product-name">
                    <span>VANI MILK</span>
                    <span>CHOCOLATE</span>
                </div>
            </div>
        </div>
    )
}

export default HotProduct
