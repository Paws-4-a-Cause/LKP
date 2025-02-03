import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LKP Cat Rescue</h1>
      <ul>
        <li><Link to="/">About LKP</Link></li>
        <li className = "dropdown">
          <Link to="/our-cats">Our Cats</Link>
          <div className = "dropdown-content">
            <ul className="dropdown-content">
              <li><Link to="/resident-cats">Resident Cats</Link></li>
              <li><Link to="/adoptable-cats">Adoptable Cats</Link></li>
            </ul>
          </div>
        </li>
        <li className="dropdown">
          <Link to="/support-us">Support Us</Link>
          <div className = "dropdown-content">
            <ul className="dropdown-content">
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/in-kind-donations">In-Kind Donations</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/cat-therapy">Cat Therapy</Link></li>
        <li className = "dropdown">
          <Link to="/join-us">Join Us</Link>
          <div className = "dropdown-content">
            <ul className="dropdown-content">
              <Link to="/volunteer-opportunities">Volunteer </Link>
            </ul>
          </div>
        </li>
        <li><Link to="/for-cat-rescuers">For Cat Rescuers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;