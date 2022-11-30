import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//component import
import NavBar from '../components/NavBar.js';
/* back to top link */
import ReturnToTop from "../components/ReturnToTop";
//styling
import "../styles/LandingPage.css"
import "../styles/GlobalStyle.css";
import Footer from '../components/Footer.js';
/* hooks */

function LandingPage() {
    /* logic here to find change theme to color base album */
    const [theme, setTheme] = useState('light-theme');

    const [showColorContent, setshowColorContent] = useState('true');
    //console.log(showColorContent,"true state of show color - True = W, False = B");
    const toggleTheme = () => {
        if (theme === 'light-theme') {
        setTheme('dark-theme');
        setshowColorContent("false");
    } else {
        setTheme('light-theme');
        setshowColorContent("true");
    }
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme, showColorContent]);

    return(
        <>
        <NavBar/>
        <main id='main' >
            <div className='centralLandingChoice'>
                {/* toggle button */}
                <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button r" id="button-1" role={"presentation"}>
                            <input type="checkbox" className="checkbox" tabIndex={0} aria-label='Change Album Style' onClick={toggleTheme}/>                            
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                {/* end toggle btn */}
                <div className='whiteAlbumChoice'>
                    <h2>  White Lined Albums {'<'} </h2>
                </div>
                <div className='blackAlbumChoice'>
                    <h2>{'>'} Black Lined Albums  </h2>
                </div>
            </div>

            {/* change content based on theme  -- IF THEME LIGHT : DARK*/}
            <div className="contentLanding">
                { //Check if message failed
                    (showColorContent === 'true')
                    ? 
                
                    <div className='titleWAlbums'>
                    <h2 className='largeH2'>White Lined Albums</h2>
                    <p>Space-22's white lined albums are used to demark songs that were made more geared towards electronic, club and house music genres </p>
                    <h3> // WHY? </h3>
                    <p> The goal of music production is to explore boundaries and to express what the artist feels. Space-22 is constantly trying to challenge his comfort zone and break his boundaries by exploring
                    new styles and musical genres. </p>
                    <h3> // WHATS SPECIAL ABOUT WHITE MARKED ALBUMS </h3>
                    <p> White Marked albums were crafted with love and danceability in mind. Additionally, these tend to be albums that are best experienced with other dancers,
                    in dance rooms, clubs and dancing environments. </p>
                    
                    
                    </div>
                    :            
                    <div className='titleBAlbums'>
                    <h2 className='largeH2' >Black Lined Albums</h2>
                    <p>Space-22's black lined albums are used to demark songs that were made more geared towards darkwave, hardcore techno and EBM music genres </p>
                    <h3> // WHY? </h3>
                    <p> The goal of music production is to explore boundaries and to express what the artist feels. Space-22 is constantly trying to challenge his comfort zone and break his boundaries by exploring
                    new styles and musical genres. </p>
                    <h3> // WHATS SPECIAL ABOUT BLACK MARKED ALBUMS </h3>
                    <p> Black Marked albums were crafted with attitude and energetic force. These albums are best experienced alone or in deep underground techno raves where no one will judge you for kicking away at every drum break.

                     </p>
                    
                    
                    </div>
                }
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