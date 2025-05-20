import "./About.css";
import ThreeCats from "../assets/placeholder pictures/ThreeCats.jpg";
import AhBoy from "../assets/cats/Ah Boy.jpg";
import AhGirl from "../assets/cats/Ah Girl.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section - Full Width */}
      <section className="hero-section">
        <img src={ThreeCats} alt="Cats" className="hero-image" />
        <div className="hero-overlay">
          <h1>LOVE KUCHING PROJECT</h1>
          <p>Caring for cats, building communities</p>
        </div>
      </section>

      {/* Who We Are */}
      <div className="section-wrapper">
        <div className="section">
          <h2>WHO WE ARE</h2>
          <p>
            Love Kuching Project is a cat rescue group that started in 2009 from
            our founder’s own residence! Today, we have our own shelter space
            and continue to be entirely volunteer-run
          </p>
        </div>
        <img src={AhBoy} alt="Ah Boy" className="section-image" />
      </div>

      {/* Our Mission */}
      <div className="section-wrapper">
        <div className="section">
          <h2>OUR MISSION</h2>
          <p>
            We specialize in palliative care for older cats, medical care for
            chronically ill or injured cats, as well as neonatal care for young
            kittens.
          </p>
          <h2>WHAT WE DO</h2>
          <ul>
            We focus on three core areas:
            <li>
            🐾 Rescue & Rehabilitate – Providing
            medical support and palliative care.
            </li>
            <li>
            🏡 Adoption & Rehoming –
            Finding loving homes for stray and abandoned cats.
            </li>
            <li>
            📢 Community Engagement – Educating and involving the community in feline
            welfare.
            </li>
          </ul>
        </div>

        <img src={AhGirl} alt="Ah Girl" className="section-image" />
      </div>


      {/* Registered Organization (No Image) */}
      <div className="registration-box">
        <p>
          Love Kuching Project is registered under the Registry of Societies,
          UEN number <strong>T13SS0220G</strong>.
        </p>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <a href="/donate" className="cta-button">
          Support Us
        </a>
      </section>
    </div>
  );
};

export default About;
