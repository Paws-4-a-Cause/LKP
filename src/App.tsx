// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import MenuBar from "./components/menubar.tsx"
import AboutLKP from "./pages/AboutLKP";
import ResidentCats from "./pages/ResidentCats.tsx";
import AdoptableCats from "./pages/AdoptableCats.tsx";
import Donate from "./pages/Donate";
import InKindDonations from "./pages/InKindDonations";
import VolunteerOpportunities from "./pages/VolunteerOpportunities"
import Events from "./pages/Events";
import CatTherapy from "./pages/CatTherapy";
import ForCatRescuers from "./pages/ForCatRescuers";

const App = () => {
  return (
    <Router>
      
      <MenuBar/>

      <Routes>
        <Route path="/" element={<AboutLKP />} />
        <Route path="/resident-cats" element={<ResidentCats />} />
        <Route path="/adoptable-cats" element={<AdoptableCats />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/in-kind-donations" element={<InKindDonations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cat-therapy" element={<CatTherapy />} />
        <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
        <Route path="/for-cat-rescuers" element={<ForCatRescuers />} />
      </Routes>
    </Router>
  );
};

export default App;
