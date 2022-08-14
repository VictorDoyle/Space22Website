import React from "react";
import "../styles/GlobalStyle.css";
import { MdArrowUpward } from 'react-icons/md';

function ReturnToTop() {
    return(
        <>
        <div className="backToTopContainer">
            <a className="backToTop" id="back2Top" tabIndex={0} href="#skipLink" aria-label="Back To Top">
                <MdArrowUpward/>
            </a>
        </div>
        </>
    )
}

export default ReturnToTop