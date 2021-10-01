import React, { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import logo1 from 'resources/images/MCK.png'
import demo from 'resources/images/demo.mp4'
import BeSaMeMutMoi from 'resources/images/BeSaMeMutMoi.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Home.scss'
function Home() {

    const homeContentRef = useRef(null)
    const homeLogoRef = useRef(null)
    const homeContentRef2 = useRef(null)

    const elementEffect = () => {
        if(window.pageYOffset > 30) {
            homeContentRef?.current?.style.setProperty('z-index', '1')
            homeContentRef2?.current?.style.setProperty('z-index', '1')
            homeLogoRef?.current?.style.setProperty('z-index', '1')
        }
        else {
            homeContentRef2?.current?.style.setProperty('z-index', '10')
            homeContentRef?.current?.style.setProperty('z-index', '10')
            homeLogoRef?.current?.style.setProperty('z-index', '10')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", elementEffect)
    }, [])

    return (
        <Element name="home" className="home">
            <div className="home-logo" ref={homeLogoRef}>
                <img src={logo1} alt="monkey chill"/>
            </div>
            
            <div className="home-content-2" ref={homeContentRef2}>
                <img src={BeSaMeMutMoi} alt="monkey chill"/>
            </div>

            <div className="home-content" ref={homeContentRef}>
                <video autoPlay controls>
                    <source src={demo} type="video/mp4"/>
                </video>
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
