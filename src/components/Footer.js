import React from "react";
import "../styles/GlobalStyle.css";
import { Link } from "react-router-dom";

/* icons */

/* styles */
import "../styles/GlobalStyle.css";

function Footer() {
    return(
        <>
<div className="footerContainer">

        <div className="navContainer" aria-label="Footer" role="navigation">
            <Link to={"/"} className="navLink logoMain">
                <h2>Space-22</h2>
            </Link>

            {/* footer nav here */}
            <Link tabIndex={0} className="navLink" to={'/albums'}> Albums</Link>
            <Link tabIndex={0} className="navLink" to={'/art'}> Art</Link>
            <Link tabIndex={0} className="navLink" to={'/about'}> About</Link>
            <div className="hiddenDemarker" aria-hidden="true" role="presentation"> </div>
            <Link tabIndex={0} className="navLink" to={'/albums'}> Privacy Policy</Link>
            <div className="hiddenDemarker" aria-hidden="true" role="presentation"> </div>
            <a tabIndex={0} className="navLink" target="_blank" href="https://www.instagram.com/space22official/"> Instagram</a>
            <a tabIndex={0} className="navLink" target="_blank" href="https://www.facebook.com/itsaspace22/"> Facebook</a>
            <div className="hiddenDemarker" aria-hidden="true" role="presentation"> </div>
            <a tabIndex={0} className="navLink" target="_blank" href="https://open.spotify.com/artist/1PBlbMf53P99M1R7eNFxIR?si=suT2N5IpSNWeaXs2SE74dQ" aria-label="View Spotify Profile - Opens In A New Page"> Spotify</a>
            <a tabIndex={0} className="navLink" target="_blank" href="https://music.apple.com/us/artist/space-22/1522222544" aria-label="View Apple Music Profile - Opens In A New Page"> Apple Music</a>
        </div>

        {/* pre bottom of footer */}
            <div>
                <p className="copyright">SPACE-22 © 2022</p>
            </div>
    
</div>
        </>
    )
}

export default Footer
