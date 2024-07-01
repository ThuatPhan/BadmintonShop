import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {
                isVisible && (
                    <a
                        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
                        onClick={scrollToTop}
                    >
                        <i className="fa fa-arrow-up"></i>
                    </a>
                )
            }
        </>
    );
}

export default BackToTop;
