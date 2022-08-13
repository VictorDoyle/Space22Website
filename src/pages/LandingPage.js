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
                    <img className="showCaseImg" alt='' role={"presentation"} src={spaceShowCase}/> 
                </div>
            </div>

            {/* third section */}
            <div className='flexGridContent'>
                <div className='landingPageItem sectionThree'>
                    <p> text h</p>
                </div>
                <div className='landingPageItem'>
                    <p> img here</p>
                    <img className="showCaseImg" alt='' role={"presentation"}/> 
                </div>
            </div>
        </main>
        </>
    )
}

export default LandingPage