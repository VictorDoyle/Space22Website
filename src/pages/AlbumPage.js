import React from "react";
/* components */
import Footer from '../components/Footer.js';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';

/* styles */
import "../styles/GlobalStyle.css";
import "../styles/AlbumPage.css";
/* album showcase imgs */
import albumShow2 from "../images/albumCovers/BirthOfNyx-Album.jpg";
import albumShow3 from "../images/albumCovers/Gravity-Riders-album.jpg";
import albumShow8 from "../images/albumCovers/TheID-Single.jpg";
import albumShow9 from "../images/albumCovers/Tigereyes-Album.jpg";
/* motion fx */
import { motion, useMotionValue, useTransform } from "framer-motion";
/* custom hook */
import { useDarkTheme } from '../hooks/index';

function AlbumPage() {
    /* trigger hook background color */
    useDarkTheme();

    return(
        <>
        <NavBar/>
        {/* banner region */}
        <div className="albumBannerRegion">
            <h1 className="pageTitleLeft">
                ALBUMS
            </h1>
        </div>

        {/* ALBUM SHOWCASE */}
        <div className="albumBannerContainer">
            <div className="albumTitlesRight">
                <h2 className="albumTitle">
                    ID
                </h2>
            </div>
        </div>
        {/* footer section */}
        <Footer/>
        </>
    ) 
}

export default AlbumPage