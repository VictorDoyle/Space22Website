import React from 'react';
import { Link } from 'react-router-dom';
//component import
import NavBar from '../components/NavBar.js';
/* back to top link */
import ReturnToTop from "../components/ReturnToTop";
//styling
import "../styles/LandingPage.css"
import "../styles/GlobalStyle.css";

import Footer from '../components/Footer.js';

function LandingPage() {
    return(
        <>
        <NavBar/>
        <main id='main'>

            {/* Back to top btn */}
            <ReturnToTop/>

        </main>

        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export default LandingPage