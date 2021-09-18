import React, { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import logo1 from 'resources/images/MCK.png'
import product from 'resources/images/product.jpg'

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

    return (
        <Element name="main" className="home">
            <div className="home-logo" ref={homeLogoRef}>
                <img src={logo1} alt="relax monkey"/>
            </div>
            <div className="home-content" ref={homeContentRef}>
                <img src={product} alt="relax monkey"/>
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
