import React from 'react'
import product from 'resources/images/product.jpg'
import './ProductSection.scss'

function ProductSection() {
    return (
        <div className="product-section">
            <h1>SẢN PHẨM</h1>
            <div className="product-section-container">
                <div className="hot-title-product">
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
        </div>
    )
}

export default ProductSection
