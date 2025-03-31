import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
       
      </header>

      <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay">
          <h1>Love Kuching Project</h1>
          <p>Caring for cats, building communities</p>
          <Link to="/about" className="cta-button">Read More</Link>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;


