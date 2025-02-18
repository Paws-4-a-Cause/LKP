import "./AboutLKP.css";
import { Link } from "react-router-dom";

const AboutLKP = () => {
  return (
    <div className="home-container">
      <div className="navbar-placeholder"></div> {/* Placeholder for navbar */}

      <header className="hero">
        <img src="/images/LKP logo n tagline.PNG" alt="Love Kuching Project" className="hero-logo" />
      </header>

      <section className="hero-section">
        <div className="hero-image-container">
          <img src="/images/cats.jpg" alt="Cats" className="hero-image" />
          <div className="hero-overlay">
            <h1>Love Kuching Project</h1>
            <p>Caring for cats, building communities</p>
            <Link to="/about" className="cta-button">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="tabs-section">
        <div className="tab">
          <h3>Adoption Gallery</h3>
          <p>Find your feline friend today!</p>
          <Link to="/adoption-gallery" className="tab-button">Explore Now</Link>
        </div>
        <div className="tab">
          <h3>Donate</h3>
          <p>Support our rescue and care efforts.</p>
          <Link to="/donate" className="tab-button">Make a Difference</Link>
        </div>
        <div className="tab">
          <h3>Events</h3>
          <p>Join us in our upcoming activities.</p>
          <Link to="/events" className="tab-button">See Events</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutLKP;

