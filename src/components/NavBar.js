import React from "react";
import "../styles/GlobalStyle.css";
import { Link } from "react-router-dom";
/* skip link */
import SkipToMain from "./SkipToMain";
/* icons */
import { MdNorthEast } from 'react-icons/md';

function NavBar() {
    return(
        <>
        {/* skip link here */}
        <SkipToMain/>
        <div className="navContainer topNav" aria-label="Main" role="navigation">

                <Link to={"/"} className="navLink logoMain">
                    <h2>Space-22</h2>
                </Link>

                {/* nav list here */}
                <Link tabIndex={0} className="navLink" to={'/albums'}> Albums</Link>
                <Link tabIndex={0} className="navLink" to={'/art'}> Art</Link>
                <Link tabIndex={0} className="navLink" to={'/about'}> About</Link>

                {/* contact button here */}
                <div className="contactUsWrapper">
                    <Link tabIndex={0} className="navLink contactUs" to={'/contact'}> Contact <MdNorthEast className="contactArrow" /></Link>
                    
                </div>
            
        
        </div>

        </>
    )
}

export default NavBar
