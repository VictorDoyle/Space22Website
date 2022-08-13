import React from "react";
import {BrowserRouter ,Routes, Route } from "react-router-dom";

/* pages */
import AboutPage from "../pages/AboutPage";
import LandingPage from "../pages/LandingPage";

export default (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about"  element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
)