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
/* showcase imgs */
import w_albumShow1 from "../images/W_AlbumLanding1.jpg";
import b_albumShow1 from "../images/B_AlbumLanding1.jpg";
/* mini vinyl imgs */
import bLineVinylAlb1 from "../images/DominanceVinylAlb.jpg";
import bLineVinylAlb2 from "../images/PrimalVinylAlb.jpg";


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
                <>
                    {/* image here */}
                    <img className='w_albumLandingShowCase' src={w_albumShow1}/>
                    {/* end image here */}
                <div className='titleWAlbums'>

                <h2 className='largeH2'>White Lined Albums</h2>
                <p>Space-22's white lined albums are used to demark songs that were made more geared towards electronic, club and house music genres </p>
                <h3> // WHY? </h3>
                <p> The goal of music production is to explore boundaries and to express what the artist feels. Space-22 is constantly trying to challenge his comfort zone and break his boundaries by exploring
                new styles and musical genres. </p>
                <h3> // WHATS SPECIAL ABOUT WHITE MARKED ALBUMS? </h3>
                <p> White Marked albums were crafted with love and danceability in mind. Additionally, these tend to be albums that are best experienced with other dancers,
                in dance rooms, clubs and dancing environments. </p>
                <h3> // WHICH ARE SPACE-22'S TOP PERFORMING WHITE LINED ALBUMS? </h3>
                <div className='vinylWAlbumShowCase'>
                <Link tabIndex={0}  to={'/albums#inherentAttitude'} aria-label="View Album Inherent Attitude">                     
                    <img className='vinylAlbumStyle' src={w_albumShow1}/>
                </Link>
                <Link tabIndex={0}  to={'/albums#inherentAttitude'} aria-label="View Album Inherent Attitude">                     
                    <img className='vinylAlbumStyle' src={w_albumShow1}/>
                </Link>
                <Link tabIndex={0}  to={'/albums#inherentAttitude'} aria-label="View Album Inherent Attitude">                     
                    <img className='vinylAlbumStyle' src={w_albumShow1}/>
                </Link>

                </div>
                
                </div>
                    </>
                :     
                <>
                    {/* image here */}
                    <img className='b_albumLandingShowCase' src={b_albumShow1}/>
                    {/* image end */}
                <div className='titleBAlbums'>
                <h2 className='largeH2' >Black Lined Albums</h2>
                <p>Space-22's black lined albums are used to demark songs that were made more geared towards darkwave, hardcore techno and EBM music genres </p>
                <h3> // WHY? </h3>
                <p> The goal of music production is to explore boundaries and to express what the artist feels. Space-22 is constantly trying to challenge his comfort zone and break his boundaries by exploring
                new styles and musical genres. </p>
                <h3> // WHATS SPECIAL ABOUT BLACK MARKED ALBUMS? </h3>
                <p> Black Marked albums were crafted with attitude and energetic force. These albums are best experienced alone or in deep underground techno raves where no one will judge you for kicking away at every drum break. </p>
                <h3> // WHICH ARE SPACE-22'S TOP PERFORMING BLACK LINED ALBUMS? </h3>

                <div className='vinylWAlbumShowCase'>
                <Link tabIndex={0}  to={'/albums#nocturnal'} aria-label="View Album Nocturnal">                     
                    <img className='vinylAlbumStyle' src={b_albumShow1}/>
                </Link>
                <Link tabIndex={0}  to={'/albums#dominance'} aria-label="View Album Dominance">                     
                    <img className='vinylAlbumStyle' src={bLineVinylAlb1}/>
                </Link>
                <Link tabIndex={0}  to={'/albums#primal'} aria-label="View Album Primal">                     
                    <img className='vinylAlbumStyle' src={bLineVinylAlb2}/>
                </Link>
                </div>

                
                </div>
                </>       
            }
            </div>
            <div className='clearDivider' aria-hidden='true' role='presentation'></div>

                {/* secondary section here onwrds */}
                <div className='secondarySection'>
                <p role='heading' aria-level='2' className='stylizedPtoHeading2 headSecSection'> EMBRACE THE ABERRANT </p>
                <div className='gridCardsContainer'>
                    <div className='attitudeCard landingCards' >
                        <h2>ATTITUDE</h2>
                        <p>Each album is created with attitude in mind. Songs are crafted with the desire to make each listener walk differently and in their 
                            own unique way once the songs start. If people don't notice a shift in your walk when listening to Space-22, then the volume isn't high enough.</p>
                    </div>
                    <div className='remiCard landingCards' >
                        <h2>REMINISCENCE</h2>

                        <p>A select range of albums were made with a unique reminiscence to the 80's with the use of heavy 
                            hitting snares, angry drum kicks and melodic synthesizers. The use of vocal effects and chromatic reverberations are also an hommage
                            to some of the grooviest techno our past has to offer.
                        </p>

                    </div>
                    <div className='narraCard landingCards' >
                    <h2>NARRATIVE</h2>
                    <p>Every musical composition made by Space-22 has a narrative component in mind during the production process. The use of music and orchestrating sound as a means to convey a story in the listener's mind is
                        central to Space-22's music.
                    </p>

                    </div>
                    <div className='exploCard landingCards'>
                    <h2>EXPLORATION</h2>
                    <p>Space-22's musical production puts genre, musical and imaginative exploration at the forefront of his approach to music. Every song made is a song that 
                        is crafted with the hope to break personal boundaries of comfort with music production. Every album released is a point of no return in discovery.
                    </p>

                    </div>


                </div>

                
                {/* background images left */}
                {/* end */}


                {/* background images right */}
                {/* end */}








                
                </div>
            <div className='clearDivider' aria-hidden='true' role='presentation'></div>

            {/* THIRD SECTION ONWARD */}
            <div className='thirdSection'>
                <p role='heading' aria-level='2' className='stylizedPtoHeading2 headThirdSection'> MEET THE ARTIST </p>
                
                {/* artist images left */}
                <img className='artistPhoto' src={bLineVinylAlb2}/>
                {/* end */}

                {/* artist bio */}
                <p className='artistBio'>Heavily influenced by 80s Drums, Dark Techno and Electronic New Wave, the French/British producer Space-22's approach to production often includes 
                an eclectic mix of electronic genres and is constantly experimenting with new approaches to Techno. 
                Inspired by Artists such as The Hacker, Boy Harsher, Phase Fatale and others, 
                Space-22 is continuing to build his reputation as a producer that likes to break 
                boundaries and conventional rhythmic structures. </p>
                <p className='artistBio'>
                Emerging from the underground dark techno scene of New York City, 
                Space-22 is constantly operating on the fringes of expectations and convention. 
                With his unique approach to discography and releasing Black Lined Albums for Dark Techno, 
                and White Lined Albums for House & Electronic,
                Space-22 brings an unexpected expertise in production. 
                </p>
                <p className='artistBio'>                
                His recent release "Nocturnal" showcases the breadth and constant change in production style,
                ranging from Space-22's infamous heavy "attitude" kicks and drums, to dark melodic and vocalized techno soundtracks
                </p>
                {/* end */}
                <div className='clearDivider' aria-hidden='true' role='presentation'></div>


                {/* background images right */}
                {/* end */}








            
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