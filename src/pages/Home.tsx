import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <img
          src="/images/LKP logo n tagline.PNG"
          alt="Love Kuching Project"
          className="hero-logo"
        />
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
    </div>
  );
};

export default Home;


