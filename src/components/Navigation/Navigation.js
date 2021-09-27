import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navigation.scss'

function Navigation() {

    const [state, setstate] = useState(false)

    const handleToggleNav = () => {
        if(window.innerWidth < 769) {
            setstate(!state)
        }
        else {
            setstate(false)
        }

    }

    const hideNav = () => {
        setstate(false)
    }

    useEffect(() => {
        window.addEventListener("resize", hideNav)
    }, [])

    return (
        <>

        <input type="checkbox" readOnly checked={state} id="toggle"/>

        <div className="navigation">
            <div className="normal-nav">
                <Link className="main-nav nav-link-1" activeClass="active-item-1" spy={true} smooth={true} duration={200} onClick={handleToggleNav} to="home">TRANG CHỦ</Link>
            </div>
            <div className="normal-nav">
                <Link className="main-nav nav-link-2" activeClass="active-item-2" spy={true} smooth={true} duration={200} onClick={handleToggleNav} to="products">SẢN PHẨM</Link>
            </div>
            <div className="normal-nav">
                <Link className="main-nav nav-link-3" activeClass="active-item-3" spy={true} smooth={true} duration={200} onClick={handleToggleNav} to="news">TIN TỨC</Link>
            </div>
            <div className="normal-nav">
                <Link className="main-nav nav-link-1" activeClass="active-item-1" spy={true} smooth={true} duration={200} onClick={handleToggleNav} to="contact">LIÊN HỆ</Link>
            </div>
        </div>

        <div className="navigation-mobile">
            <div className="navigation-mobile-icon" onClick={handleToggleNav}>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
        </>
    )
}

export default Navigation
