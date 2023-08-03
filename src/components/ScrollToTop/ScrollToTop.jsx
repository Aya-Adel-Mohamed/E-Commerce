import React, { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className='topToBtm'>
            <div className='iconPosition'>
            {" "}{showTopBtn && ( <HiChevronUp className= 'iconStyle' onClick={goToTop} /> )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTop;