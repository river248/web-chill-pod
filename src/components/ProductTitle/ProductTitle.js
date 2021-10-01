import React from 'react'
import relax from 'resources/images/white-relax.png'

import './ProductTitle.scss'

function ProductTitle() {
    return (
        <div className="title-product">
            <img src={relax} alt="relax"/>
            <div className="title-product-content">
                <span>1 HỘP 4 VIÊN</span>
                <span>4 NGƯỜI DÙNG</span>
            </div>
        </div>
    )
}

export default ProductTitle
