import React from "react";
import "../styles/GlobalStyle.css";
function SkipToMain() {
    return(
        <>
        <a className="skipToMain" tabIndex={0} href="#main">Skip To Main Content</a>
        </>
    )
}

export default SkipToMain