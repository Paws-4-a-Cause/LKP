// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import AboutLKP from "./pages/Home";
import AdoptionGallery from "./pages/AdoptionGallery";
import Donate from "./pages/Donate";
import InKindDonations from "./pages/InKindDonations";
import Events from "./pages/Events";
import CatTherapy from "./pages/CatTherapy";
import ForCatRescuers from "./pages/ForCatRescuers";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Display the Navbar at the top */}

      <Routes>
        <Route path="/" element={<AboutLKP />} />
        <Route path="/adoption-gallery" element={<AdoptionGallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/in-kind-donations" element={<InKindDonations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cat-therapy" element={<CatTherapy />} />
        <Route path="/for-cat-rescuers" element={<ForCatRescuers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
