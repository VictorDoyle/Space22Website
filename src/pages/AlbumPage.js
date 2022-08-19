import React, { useEffect, useState } from "react";
/* components */
import Footer from '../components/Footer.js';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import AlbumShowcaser from "../components/AlbumShowcaser.js";
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

    /* useEffect reveal album here */
    const [currentAlbum , setCurrentAlbum ] = useState("");
    useEffect(() => {
      console.log('Current Album shown is ', currentAlbum);
    }, [currentAlbum]);


    const changeAlbum = event => {
        /* save album text from current Click evt */
        setCurrentAlbum(event.currentTarget.textContent.trim());
    };

    


    return(
        <>
        <NavBar/>
        {/* banner region */}
        <div className="albumBannerRegion">
            <h1 className="pageTitleLeft">
                DISCOGRAPHY
            </h1>
        </div>

        {/* ALBUM SHOWCASE */}
        <div className="albumBannerContainer">
            <div className="albumRevealLeft">
             <AlbumShowcaser currentAlbum = {currentAlbum} />
            </div>
            <div className="albumTitlesRight">
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                        
                        FEMME FATALE
                    </h2>
                </button>

                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                    BIRTH OF NYX
                    </h2>
                </button>
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                        
                        ID
                    </h2>
                </button>
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                        
                        TIGER EYES
                    </h2>
                </button>
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                        
                    TIMELESS RAIN
                    </h2>
                </button>
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle">
                        
                    ALWAYS GET YOUR WAY
                    </h2>
                </button>
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle"> 
                        MUNDUS VULT DECIPI
                    </h2>
                </button>

                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle"> 
                    MEAN IT LIKE YOU MOVE IT
                    </h2>
                </button>
            
                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle"> 
                    SEIN UND ZEIT
                    </h2>
                </button>

                <button className="hiddenBtn" onClick={changeAlbum}>
                    <h2 className="albumTitle"> 
                    LEAVE THEM BEHIND
                    </h2>
                </button>
            </div>
        </div>
        {/* footer section */}
        <Footer/>
        </>
    ) 
}

export default AlbumPage