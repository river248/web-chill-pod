import React, { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import logo1 from 'resources/images/MCK.png'
import product from 'resources/images/product.jpg'
import Choco from 'resources/images/Choco.jpg'
import Vani from 'resources/images/Vani.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Home.scss'
function Home() {

    const homeContentRef = useRef(null)
    const homeLogoRef = useRef(null)

    const elementEffect = () => {
        if(window.pageYOffset > 30) {
            homeContentRef?.current?.style.setProperty('z-index', '1')
            homeLogoRef?.current?.style.setProperty('z-index', '1')
        }
        else {
            homeContentRef?.current?.style.setProperty('z-index', '10')
            homeLogoRef?.current?.style.setProperty('z-index', '10')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", elementEffect)
    }, [])

    const imageSlider = useRef(null)

    const slickImage = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        className: "center",
        pauseOnHover: false,
    }

    return (
        <Element name="home" className="home">
            <div className="home-logo" ref={homeLogoRef}>
                <img src={logo1} alt="monkey chill"/>
            </div>
            <div className="home-content" ref={homeContentRef}>
                <img src={product} alt="monkey chill"/>
            </div>

            <div className="home-slider">
                <Slider ref={imageSlider} { ...slickImage} >
                    <div className="home-slider-item">
                        <div className="home-slider-image">
                            <img src={Choco} alt="monkey chill"/>
                        </div>
                    </div>
                    <div className="home-slider-item">
                        <div className="home-slider-image">
                            <img src={Vani} alt="monkey chill"/>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="home-text-left">
                <span>MILK</span>
                <span>OLATE</span>
            </div>
            <div className="home-text-right">
                <span>1 HỘP 4 VIÊN</span>
                <span>4 NGƯỜI DÙNG</span>
            </div>
        </Element>
    )
}

export default Home
