import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
/* styling */
import "../styles/AlbumPage.css";
import "../styles/GlobalStyle.css";
/* images for albums */


function AlbumShowcaser(props) {
    const [currentAlbum, setCurrentAlbum] = useState(props);
    const [currentAlbumImg, setCurrentAlbumImg] = useState();


    /* images for each album */


    useEffect(() => {

    }, []);

    return(
        <>
        <div className="showcaseContainer">
            <div className="albumCover">
                <img/>
            </div>

            <div className="albumTitleHeading">
            <h2>test </h2>
            </div>



            <div className="albumTracklist">
                {/* maybe add spotify ting here */}
            </div>

            <div className="albumDescription">
            {/* album text  */}
            </div>
        </div>
        
        </>
    )
}

export default AlbumShowcaser