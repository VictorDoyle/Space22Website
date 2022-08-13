import React from "react";
import "../styles/GlobalStyle.css";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
        {/* banner n logo here */}
        <div className="navContainer">
            <Link to={"/"}>
                <h2 className="navLink logoMain">Space-22</h2>
            </Link>

            {/* nav list here */}
            <Link tabIndex={0} className="navLink" to={'/albums'}> Albums</Link>
            <Link tabIndex={0} className="navLink" to={'/art'}> Art</Link>
            <Link tabIndex={0} className="navLink" to={'/about'}> About</Link>

            {/* contact button here */}
            <Link tabIndex={0} className="navLink contactUs" to={'/contact'}> Contact</Link>
        </div>

        </>
    )
}

export default NavBar
