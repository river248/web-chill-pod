import HotProduct from 'components/HotProduct/HotProduct'
import Product from 'components/Product/Product'
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { Element } from 'react-scroll'
import './ProductSection.scss'

function ProductSection() {

    const [current, setCurrent] = useState(0)

    const handleNext = () => {

        let clone = current+1
        if(clone > 1)
            clone = 0
        setCurrent(clone)
    }

    const handlePrev = () => {

        let clone = current-1
        if(clone < 0)
            clone = 1
        setCurrent(clone)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            let clone = current+1
            if(clone > 1)
                clone = 0
            setCurrent(clone)
        }, 2500)

        return () => clearInterval(timer)
    },[current])

    return (
        <Element name="products" className="product-section">
            <h1>SẢN PHẨM</h1>
            <div className="product-section-container">
                {current === 1 && <Product/>}
                {current === 0 && <HotProduct/>}
                <MdKeyboardArrowLeft className="arrow-1" onClick={handlePrev}/>
                <MdKeyboardArrowRight className="arrow-2" onClick={handleNext}/>
            </div>
        </Element>
    )
}

export default ProductSection
