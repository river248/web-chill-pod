import React from 'react'
import product from 'resources/images/product.jpg'
import relax from 'resources/images/white-relax.png'
import './HotProduct.scss'
 
function HotProduct() {

    return (
        <div className="product-container">
            <div className="hot-title-product">
                <img src={relax} alt="relax"/>
                <div className="hot-title-product-content">
                    <span>1 HỘP 4 VIÊN</span>
                    <span>4 NGƯỜI DÙNG</span>
                </div>
            </div>
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
