import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import "./menubar.css";
import profilePic from "../assets/LKPLogo.png";
import { useState } from "react";

// Import cats data from JSON file
import cats from "../data/cats.json";

const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenDropdowns([]); // Close all dropdowns when closing menu
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdowns([]); // Close all dropdowns
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdowns(prev => 
      prev.includes(dropdownName) 
        ? prev.filter(name => name !== dropdownName)
        : [...prev, dropdownName]
    );
  };

  return (
    <Menubar className="menubar">
      <div className="heading-logo">
        <img src={profilePic} alt="Logo" className="logo-img" />
        <h1 className="heading"></h1>
      </div>
      
      {/* Desktop Menu */}
      <div className="menu-items desktop-menu">
        {/* Home Link */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/" className="text">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* About Link */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/about" className="text">About LKP</Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Our Cats Dropdown */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/cat-gallery" className="text">Our Cats</Link>
          </MenubarTrigger>
          <MenubarContent>
            {cats.map((cat) => (
              <MenubarItem key={cat.slug} asChild>
                <Link to={`/cats/${cat.slug}`}>{cat.name}</Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>

        {/* Support Us Dropdown */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/donate" className="text">Support Us</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link to="/donate">Donate</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link to="/in-kind-donations">In-Kind Donations</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link to="/events">Events</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Cat Therapy Link */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/cat-therapy" className="text">Cat Therapy</Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Join Us Dropdown */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/volunteer-opportunities" className="text">Join Us</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link to="/volunteer-opportunities">Volunteer Opportunities</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* For Cat Rescuers Dropdown */}
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link to="/for-cat-rescuers" className="text">For Cat Rescuers</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link to="/adoption-process">Adoption Process</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <img src={profilePic} alt="Logo" className="mobile-logo" />
            <button 
              className="close-mobile-menu"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              ×
            </button>
          </div>
          
          <nav className="mobile-nav">
            <Link to="/" onClick={closeMobileMenu} className="mobile-nav-item">
              Home
            </Link>
            
            <Link to="/about" onClick={closeMobileMenu} className="mobile-nav-item">
              About LKP
            </Link>
            
            <div className={`mobile-dropdown ${openDropdowns.includes('cats') ? 'active' : ''}`}>
              <button 
                className="mobile-dropdown-trigger"
                onClick={() => toggleDropdown('cats')}
              >
                Our Cats
              </button>
              <div className="mobile-dropdown-content">
                {cats.map((cat) => (
                  <Link 
                    key={cat.slug} 
                    to={`/cats/${cat.slug}`} 
                    onClick={closeMobileMenu}
                    className="mobile-dropdown-item"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className={`mobile-dropdown ${openDropdowns.includes('support') ? 'active' : ''}`}>
              <button 
                className="mobile-dropdown-trigger"
                onClick={() => toggleDropdown('support')}
              >
                Support Us
              </button>
              <div className="mobile-dropdown-content">
                <Link to="/donate" onClick={closeMobileMenu} className="mobile-dropdown-item">
                  Donate
                </Link>
                <Link to="/in-kind-donations" onClick={closeMobileMenu} className="mobile-dropdown-item">
                  In-Kind Donations
                </Link>
                <Link to="/events" onClick={closeMobileMenu} className="mobile-dropdown-item">
                  Events
                </Link>
              </div>
            </div>
            
            <Link to="/cat-therapy" onClick={closeMobileMenu} className="mobile-nav-item">
              Cat Therapy
            </Link>
            
            <div className={`mobile-dropdown ${openDropdowns.includes('join') ? 'active' : ''}`}>
              <button 
                className="mobile-dropdown-trigger"
                onClick={() => toggleDropdown('join')}
              >
                Join Us
              </button>
              <div className="mobile-dropdown-content">
                <Link to="/volunteer-opportunities" onClick={closeMobileMenu} className="mobile-dropdown-item">
                  Volunteer Opportunities
                </Link>
              </div>
            </div>
            
            <div className={`mobile-dropdown ${openDropdowns.includes('rescuers') ? 'active' : ''}`}>
              <button 
                className="mobile-dropdown-trigger"
                onClick={() => toggleDropdown('rescuers')}
              >
                For Cat Rescuers
              </button>
              <div className="mobile-dropdown-content">
                <Link to="/adoption-process" onClick={closeMobileMenu} className="mobile-dropdown-item">
                  Adoption Process
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Menubar>
  );
};

export default MenuBar;
