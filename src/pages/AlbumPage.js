import React, { useEffect, useState } from "react";
/* components */
import Footer from '../components/Footer.js';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
/* styles */
import "../styles/GlobalStyle.css";



function AlbumPage() {



    return(
        <>
        <NavBar/>
        {/* banner region */}

        <Footer/>
        </>
    ) 
}

export default AlbumPage