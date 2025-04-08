import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/menubar.tsx";
import AboutLKP from "./pages/AboutLKP";
import Donate from "./pages/Donate";
import InKindDonations from "./pages/InKindDonations";
import VolunteerOpportunities from "./pages/VolunteerOpportunities";
import Events from "./pages/Events";
import CatTherapy from "./pages/CatTherapy";
import ForCatRescuers from "./pages/ForCatRescuers";
import CatGallery from "./pages/CatGallery";
import CatProfile from "./pages/CatProfile";
import AdoptionProcess from "./pages/AdoptionProcess.tsx";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <MenuBar /> {/* Display the Navbar at the top */}

      <Routes>
        <Route path="/" element={<AboutLKP />} />
        <Route path="/cat-gallery" element={<CatGallery />} />
        <Route path="/cats/:slug" element={<CatProfile />} />
        <Route path="/adoption-process" element={<AdoptionProcess />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/in-kind-donations" element={<InKindDonations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cat-therapy" element={<CatTherapy />} />
        <Route path="/for-cat-rescuers" element={<ForCatRescuers />} />
        <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
      </Routes>

      <Footer /> {/* Display Footer at the bottom of the page */}
    </Router>
  );
};

export default App;



