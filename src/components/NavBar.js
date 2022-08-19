import  { useState ,useEffect } from "react";
import "../styles/GlobalStyle.css";
import { Link } from "react-router-dom";
/* skip link */
import SkipToMain from "./SkipToMain";
/* icons */
import { MdNorthEast } from 'react-icons/md';

function NavBar() {
    /* logic here to find if body using dark theme */
    const [color, setColor] = useState("black");

    useEffect(() => {
        setTimeout(function() {
            if(document.body.style.backgroundColor == "rgb(22, 22, 29)") {
                setColor("white");
            } else {
                setColor("black");
            }
        }, 1);
    })
   
    return(
        <>
        <SkipToMain/>
        <div className="navContainer topNav" aria-label="Main" role="navigation">

                <Link to={"/"} className="navLink logoMain" style={{color: color}}>
                    <h2>Space-22</h2>
                </Link>

                {/* nav list here */}
                <Link tabIndex={0} className="navLink" to={'/albums'} style={{color: color}} > Albums</Link>
                <Link tabIndex={0} className="navLink" to={'/art'} style={{color: color}}> Art</Link>
                <Link tabIndex={0} className="navLink" to={'/about'} style={{color: color}}> About</Link>

                {/* contact button here */}
                <div className="contactUsWrapper">
                    <Link tabIndex={0} className="navLink contactUs" to={'/contact'} style={{color: color}}> Contact <MdNorthEast className="contactArrow" /></Link>
                    
                </div>
            
        
        </div>

        </>
    )
}

export default NavBar
