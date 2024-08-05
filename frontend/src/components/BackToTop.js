import React, { useEffect, useState } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";

const BackToTop = () => {

    const [backtoTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 && window.scrollX < 100) setBackToTopButton(true)
            else setBackToTopButton(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backtoTopButton && (
                <button style={{ position: "fixed", color: "gold", bottom: "60px", right: "60px", height: "60px", width: "50px", fontSize: "60px" }} onClick={scrollUp}>
                    <FaCircleArrowUp />
                </button>
            )}
        </div>
    )
}

export default BackToTop
