import React from "react";
import "../styles/GlobalStyle.css";
function SkipToMain() {
    /* onclick evt here send focus to main content */
    return(
        <>
            <a className="skipToMain" id="skipLink" tabIndex={0} href="#main">Skip To Main Content</a>
        </>
    )
}

export default SkipToMain