import React from 'react';
import { Link } from 'react-router-dom';
//component import
import NavBar from '../components/NavBar.js';
/* back to top link */
import ReturnToTop from "../components/ReturnToTop";
//styling
import "../styles/LandingPage.css"
import "../styles/GlobalStyle.css";
/* icons */
import { MdMusicNote, MdPublic, MdSentimentSatisfiedAlt, MdNorthEast } from 'react-icons/md';
/* images */
import spaceShowCase from "../images/space22albums.jpg";
import astronautStatic from "../images/decorative/astronaut_static.png";
/* album showcase imgs */
import albumShow2 from "../images/albumCovers/BirthOfNyx-Album.jpg";
import albumShow3 from "../images/albumCovers/Gravity-Riders-album.jpg";
import albumShow8 from "../images/albumCovers/TheID-Single.jpg";
import albumShow9 from "../images/albumCovers/Tigereyes-Album.jpg";

/* motion fx */
import { motion, useMotionValue, useTransform } from "framer-motion";
import Footer from '../components/Footer.js';

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
                    <Link tabIndex={0} className="aboutUsBtn" to={'/about'}> About Space-22 <MdNorthEast className="contactArrow" /></Link>
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
                        <h2 className="landingPageTitle2"> Unconventional Electronic </h2>
                        <Link tabIndex={0} className="viewAlbumsBtn" to={'/art'}> View All Albums <MdNorthEast className="contactArrow" /></Link>
                    </div>
            </div> 

            {/* fourth section showcase albums n art */}
            <div className='flexGridContentAlbums'>
                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link aria-label="View Album: The Birth Of Nyx" to={"/albums"}>                           
                            <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow2}/> 
                        <h3 className='albumTitleShowCase'> The Birth Of Nyx</h3>                        
                        </Link>
                    </motion.div>
                </div>


                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link aria-label="View Album: Tiger Eyes" to={"/albums"}>                        
                            <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow9}/> 
                        <h3 className='albumTitleShowCase'> Tiger Eyes</h3>                        
                        </Link>
                    </motion.div>
                </div>

                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link aria-label="View Album: The Id" to={"/albums"}>
                            <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow8}/> 
                            <h3 className='albumTitleShowCase'> The Id</h3>                        
                        </Link>
                    </motion.div>
                </div>

                <div className='showAlbumContainer'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link aria-label="View Album: Gravity Riders" to={"/albums"}>     
                            <img className="showCaseAlbum" alt='' role={"presentation"} src={albumShow3}/> 
                        <h3 className='albumTitleShowCase'> Gravity Riders</h3>                        
                        </Link>
                    </motion.div>
                </div>
            </div>
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