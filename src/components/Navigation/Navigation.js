import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

function Navigation() {

    const [state, setstate] = useState(0)

    const toggleShow = () => {
        if(window.innerWidth < 621) {
            setstate(1)
        }
        else {
            setstate(0)
        }
    }

    const toggleShowNav = () => {
        if(state === 1) {
            setstate(2)
        }
        else
            setstate(1)
    }

    useEffect(() => {
        window.addEventListener("resize", toggleShow)
    }, [])

    return (
        <>
        {(state === 0  || state === 2) && <div className={ state === 0 ? "navigation" : (state === 2 ? "navigation navigation-slidedown" : "navigation .navigation-slideup")}>
            <div className="navigation-link">
                <Link to="/" style={{color: '#00ffea', textShadow: '0 0 10px #00ffea'}}>TRANG CHỦ</Link>
            </div>
            <div className="navigation-link">
                <Link to="" style={{color: '#ff0084', textShadow: '0 0 10px #ff0084'}}>SẢN PHẨM</Link>
            </div>
            <div className="navigation-link">
                <Link to="" style={{color: '#fff', textShadow: '0 0 10px #fff'}}>TIN TỨC</Link>
            </div>
        </div>}

        {state !== 0 && <div className="navigation-mobile">
            <div className="navigation-mobile-icon" onClick={toggleShowNav}>
                <div/>
                <div/>
                <div/>
            </div>
        </div>}
        </>
    )
}

export default Navigation
