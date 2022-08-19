import React from "react";
/* components */
import Footer from '../components/Footer.js';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

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

function CarouselNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function CarouselPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

function AlbumPage() {
    /* slider settings for carousel */
    var settings = {
        dots: true, 
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        rows: 2,
        centerMode: true,
        slidesToScroll: 1,
        /* accessibility */
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        /* custom arrows here */
        arrows: true,
        nextArrow: <CarouselNextArrow />,
        prevArrow: <CarouselPrevArrow />
      };


    return(
        <>
        <NavBar/>
        {/* banner region */}
        <div className='flexGridMain'>
                <div className='landingPageItem'>
                    {/* remain empty */}
                </div>
                <div className='landingPageItem'>
                    <h1 className="landingPageTitle"> ALBUMS </h1>
                </div>
        </div>
        {/* main section 1 */}
        <div className="AlbumBannerContainer">
            <div className="AlbumBannerSlider">
                {/* slider 1 */}
            <Slider {...settings}>
                {/* add play/pause button for accessibility here */}
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
               
            </div>
        </div>
        
        <div className="AlbumBannerContainer">
            <div className="AlbumBannerSlider">
                {/* img 1 */}

                {/* img 2 */}

                {/* img 3 */}
            </div>
        </div>
        </>
    ) 
}

export default AlbumPage