import React from 'react'
import { Element } from 'react-scroll'
import PriceList from 'resources/images/PriceList.jpg'
import relax from 'resources/images/white-relax.png'
import './News.scss'

function News() {
    return (
        <Element name="news" className="news">
            <h1>TIN TỨC</h1>
            <div className="news-container">
                <img src={PriceList} alt="Price List"/>
                <div className="news-table">
                    <div className="news-row row-1">
                        <span>OPEN ORDER VER 3</span>
                    </div>
                    {/* <hr/> */}
                    <div className="news-row row-2">
                        <span>Monkey chill matcha.</span>
                        <span>Tăng cảm thục âm nhạc, hưng phấn.</span>
                        <span>Không chất cấm, đau đầu, dư âm.</span>
                    </div>
                    {/* <hr/> */}
                    <div className="news-row row-3">
                        <span>Ăn ngon, ngủ ngon</span>
                        <span>Giá niêm yết 350k</span>
                    </div>
                    <img src={relax} alt="monkey chill"/>
                </div>
            </div>
        </Element>
    )
}

export default News
