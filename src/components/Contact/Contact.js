import React from 'react'
import logo from 'resources/images/MCK.png'
import Choco from 'resources/images/Choco.jpg'
import Vani from 'resources/images/Vani.jpg'
import { Element } from 'react-scroll'
import './Contact.scss'
import Slider from 'react-slick'

function Contact() {
    const slickContactImage = {
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
        <Element name="contact" className="contact">
            <h1>THƯ VIỆN</h1>
            <div className="contact-library">
                <img src={Choco} alt="monkey chill"/>
                <img src={Vani} alt="monkey chill"/>
            </div>
            
            <div className="contact-library-slider">
                <Slider {...slickContactImage}>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={Choco} alt="monkey chill"/>
                        </div>
                    </div>
                    <div className="contact-slider-item">
                        <div className="contact-slider-image">
                            <img src={Vani} alt="monkey chill"/>
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
