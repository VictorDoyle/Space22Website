import React from 'react';
//import { Link } from 'react-router-dom';
//component import
import NavBar from '../components/NavBar.js';
//styling
import "../styles/LandingPage.css"
import "../styles/GlobalStyle.css";

function LandingPage() {
    return(
        <>
        <NavBar/>
        <h1 className="landingPageTitle"> Welcome To Space-22 Music </h1>
        </>
    )
}

export default LandingPage