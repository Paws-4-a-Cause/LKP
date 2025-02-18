
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/images/cats.jpg" alt="Cats" className="hero-image" />
        <div className="hero-overlay">
          <h1>About Love Kuching Project</h1>
          <p>Caring for cats, building communities</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="content-box">
          <h2>Who We Are</h2>
          <p>
            Love Kuching Project is a cat rescue group that started in 2009 from our founder’s own residence! 
            Today, we have our own shelter space and continue to be entirely volunteer-run.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We specialize in palliative care for older cats, medical care for chronically ill or injured cats, 
          as well as neonatal care for young kittens.
        </p>
      </section>

      {/* Core Services */}
      <section className="services-section">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🐾 Rescue & Rehabilitate</h3>
            <p>Providing medical support and palliative care for cats in need.</p>
          </div>
          <div className="service-card">
            <h3>🏡 Adoption & Rehoming</h3>
            <p>Finding loving homes for stray and abandoned cats.</p>
          </div>
          <div className="service-card">
            <h3>📢 Community Engagement</h3>
            <p>Educating and involving the community in feline welfare.</p>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="registration-section">
        <h2>Registered Organization</h2>
        <p>
          Love Kuching Project is registered under the Registry of Societies, 
          UEN number <strong>T13SS0220G</strong>.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <a href="/donate" className="cta-button">Support Us</a>
      </section>
    </div>
  );
};

export default About;