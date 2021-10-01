import React from 'react'
import logo from 'resources/images/MCK.png'
import Choco from 'resources/images/Choco.jpg'
import Vani from 'resources/images/Vani.jpg'
import relaxmonkeychill from 'resources/images/relax-monkey-chill.jpg'
import MonkeyChill from 'resources/images/MonkeyChill.jpg'
import TheBestChill from 'resources/images/TheBestChill.jpg'

import { Element } from 'react-scroll'
import './Contact.scss'
import Slider from 'react-slick'

function Contact() {
    const slickContactImage = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        className: "center",
        pauseOnHover: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
        ]
    }
    return (
        <Element name="contact" className="contact">
            <h1>THƯ VIỆN</h1>
            
            <div className="contact-library-slider">
                <Slider {...slickContactImage}>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={Choco} alt="Choco Monkey Chill"/>
                        </div>
                    </div>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={Vani} alt="Vani Monkey Chill"/>
                        </div>
                    </div>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={relaxmonkeychill} alt="Relax Monkey Chill"/>
                        </div>
                    </div>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={MonkeyChill} alt="Monkey Chill"/>
                        </div>
                    </div>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={TheBestChill} alt="The Best Chill"/>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="contact-image">
                <img src={logo} alt="relax monkey"/>
            </div>
            <div className="footer-contact">
                <div className="contact-info">
                    <span>RELAX STORE</span>
                    <span>THÔNG TIN LIÊN HỆ</span>
                    <span>SĐT: 02229999886 - 02229999993</span>
                    <span>Email: monkeychill2021@gmail.com</span>
                </div>
            </div>
        </Element>
    )
}

export default Contact
