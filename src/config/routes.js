import React from "react";
import {BrowserRouter ,Routes, Route } from "react-router-dom";

/* pages */
import AboutPage from "../pages/AboutPage";
import LandingPage from "../pages/LandingPage";
import ArtPage from "../pages/ArtPage";
import AlbumPage from "../pages/AlbumPage";
import ContactPage from "../pages/ContactPage";


export default (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/albums"  element={<AlbumPage />} />
            <Route path="/art"  element={<ArtPage />} />
            <Route path="/about"  element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage/>} />
        </Routes>
    </BrowserRouter>
)