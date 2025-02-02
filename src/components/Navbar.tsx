import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LKP Cat Rescue</h1>
      <ul>
        <li><Link to="/">About LKP</Link></li>
        <li><Link to="/adoption-gallery">Adoption Gallery</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/in-kind-donations">In-Kind Donations</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/cat-therapy">Cat Therapy</Link></li>
        <li><Link to="/for-cat-rescuers">For Cat Rescuers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;