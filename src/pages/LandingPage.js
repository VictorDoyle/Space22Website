import React from 'react';
import { Link } from 'react-router-dom';
//component import
import NavBar from '../components/NavBar.js';
//styling
import "../styles/LandingPage.css"
import "../styles/GlobalStyle.css";
/* icons */
import { MdMusicNote, MdPublic, MdSentimentSatisfiedAlt, MdNorthEast } from 'react-icons/md';
/* images */
import spaceShowCase from "../images/space22albums.jpg";
/* album showcase imgs */
import albumShow2 from "../images/albumCovers/BirthOfNyx-Album.jpg";
import albumShow3 from "../images/albumCovers/Gravity-Riders-album.jpg";
import albumShow8 from "../images/albumCovers/TheID-Single.jpg";
import albumShow9 from "../images/albumCovers/Tigereyes-Album.jpg";
/* motion fx */
import { motion, useMotionValue, useTransform } from "framer-motion";

function LandingPage() {
    return(
        <>
        <NavBar/>
        <main id='main'>
            {/* first section */}
            <div className='flexGridMain'>
                <div className='landingPageItem'>
                    <div className='iconBarLeft'>
                        <div className='iconOnly'>
                            <MdMusicNote/>
                            <MdPublic />
                            <MdSentimentSatisfiedAlt />
                        </div>
                        <p className='hoverTextIcons'> View The Latest Album Releases  <Link tabIndex={0}  to={'/albums'} aria-label="View The Latest Album Releases Here"> Here</Link></p>
                    </div>

                </div>
                <div className='landingPageItem'>
                    <h1 className="landingPageTitle"> SPACE-22 </h1>
                </div>
            </div>

            {/* second section */}
            <div className='flexGridContent'>
                <div className='landingPageItem sectionTwo'>
                    <h2> Producing Electronic and Techno music with the intent of breaking convention.</h2>
                    <Link tabIndex={0} className="aboutUsBtn" to={'/about'}> About Us <MdNorthEast className="contactArrow" /></Link>
                </div>
                <div className='landingPageItem'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <img className="showCaseImg" alt='' role={"presentation"} src={spaceShowCase}/> 
                </motion.div>
                </div>
            </div>

            {/* third section */}
            <div className='flexGridMain'>
                <div className='landingPageItem'>
                    {/* keep empty */}
                </div>
                    <div className='landingPageItem'>
                        <h2 className="landingPageTitle2"> Unconventional Approaches </h2>
                        <Link tabIndex={0} className="aboutUsBtn" to={'/art'}> View All Albums <MdNorthEast className="contactArrow" /></Link>
                    </div>
            </div> 

            {/* fourth section showcase albums n art */}
            <div className='flexGridContentAlbums'>
                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow2}/> 
                    </motion.div>
                </div>


                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow9}/> 
                    </motion.div>
                </div>

                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow8}/> 
                    </motion.div>
                </div>

                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow3}/> 
                    </motion.div>
                </div>
            </div>        
        </main>
        </>
    )
}

export default LandingPage