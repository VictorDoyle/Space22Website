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

    const toggleTheme = () => {
        if (theme === 'light-theme') {
        setTheme('dark-theme');
        } else {
        setTheme('light-theme');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return(
        <>
        <NavBar/>
        <main id='main' theme={theme}>
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
                    <h2> {'>'}Black Lined Albums  </h2>
                </div>
            </div>
            {/* button here click and trigger useDarkTheme() */}

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