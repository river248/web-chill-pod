import React, { useState, useEffect, useRef } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import './ToTop.scss'

function ToTop() {

    const [visible, setVisible] = useState(false)
    const toTopRef = useRef(null)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
    };

    const handleScrollToTop = () => {
        scroll.scrollToTop({duration: 50})
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <>
        { visible && <div className="scroll-to-top" onClick={handleScrollToTop} ref={toTopRef}>
            
        </div>}
        </>
    )
}

export default ToTop
