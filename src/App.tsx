// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import AboutLKP from "./pages/AboutLKP";
import OurCats from "./pages/OurCats";
import SupportUs from "./pages/SupportUs";
import ResidentCats from "./pages/ResidentCats";
import AdoptableCats from "./pages/AdoptableCats";
import AdoptionGallery from "./pages/AdoptionGallery";
import Donate from "./pages/Donate";
import InKindDonations from "./pages/InKindDonations";
import Events from "./pages/Events";
import CatTherapy from "./pages/CatTherapy";
import ForCatRescuers from "./pages/ForCatRescuers";
import JoinUs from './pages/JoinUs';
import VolunteerOpportunities from './pages/VolunteerOpportunites';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Display the Navbar at the top */}

      <Routes>
        <Route path="/" element={<AboutLKP />} />
        <Route path="/our-cats" element={<OurCats />} />
        <Route path="/resident-cats" element={<ResidentCats />} />
        <Route path="/adoptable-cats" element={<AdoptableCats />} />
        <Route path="/adoption-gallery" element={<AdoptionGallery />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/in-kind-donations" element={<InKindDonations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cat-therapy" element={<CatTherapy />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
        <Route path="/for-cat-rescuers" element={<ForCatRescuers />} />
      </Routes>
    </Router>
  );
};

export default App;
