import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section - Full Width */}
      <section className="hero-section">
        <img src="/images/cats.jpg" alt="Cats looking up" className="hero-image" />
        <div className="hero-overlay">
          <h1>About Love Kuching Project</h1>
          <p>Caring for cats, building communities</p>
        </div>
      </section>

      {/* Who We Are */}
      <div className="section-wrapper">
        <div className="section">
          <h2>Who We Are</h2>
          <p>
            Love Kuching Project is a cat rescue group that started in 2009 from our founder’s own residence!
            Today, we have our own shelter space and continue to be entirely volunteer-run.
          </p>
        </div>
        <img src="/images/Cat1.jpg" alt="White Cat Sleeping" className="section-image" />
      </div>

      {/* Our Mission */}
      <div className="section-wrapper">
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            We specialize in palliative care for older cats, medical care for chronically ill or injured cats,
            as well as neonatal care for young kittens.
          </p>
        </div>
        <img src="/images/Cat2.jpg" alt="Tabby Cat Hugging Plush" className="section-image" />
      </div>

      {/* What We Do */}
      <div className="section-wrapper">
        <div className="section">
          <h2>What We Do</h2>
          <p>We focus on three core areas:</p>
          <ul>
            <li>🐾 Rescue & Rehabilitate – Providing medical support and palliative care.</li>
            <li>🏡 Adoption & Rehoming – Finding loving homes for stray and abandoned cats.</li>
            <li>📢 Community Engagement – Educating and involving the community in feline welfare.</li>
          </ul>
        </div>
        <img src="/images/Cat1.jpg" alt="Cat Care Activities" className="section-image" />
      </div>

      {/* Registered Organization (No Image) */}
      <div className="registration-box">
        <p>
          Love Kuching Project is registered under the Registry of Societies, UEN number <strong>T13SS0220G</strong>.
        </p>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <a href="/donate" className="cta-button">Support Us</a>
      </section>
    </div>
  );
};

export default About;