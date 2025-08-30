import "./Donate.css"; 
import PayNowQR from "../assets/paynow-qr.jpg";
const Donate = () => {
  return (
    <div className="donate-container">
      
      <h1 className="donate-title">🐾 Support Our Cause 🐾</h1>

      <section className="section">
        <h2>Sponsorship Program</h2>
        <p>
          Become a valued sponsor and make a lasting impact! Your contributions
          help us continue our mission to rescue and care for cats.
        </p>

        <h3 className="text-[#FF735C]">Why Sponsor?</h3>
        <ul className="sponsorship-benefits">
          <li>🐾 Brand visibility on our website</li>
          <li>🏆 Special mentions in our events</li>
          <li>💖 Helping a great cause and saving lives</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>Got questions? Reach out to us!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="donate-button">Send Message</button>
        </form>
      </section>

      <section className="section text-center">
        <h2>Support Us with Donations</h2>
        <p>You can contribute via SimplyGiving or PayNow. Every little bit helps!</p>

        <a
          href="https://legacy.simplygiving.com/nonprofit/luvkuching"
          target="_blank"
          className="donate-button"
        >
          Donate via SimplyGiving ❤️
        </a>

        <div className="qr-code">
          <p>Scan this QR code to donate via PayNow:</p>
          <img src={PayNowQR}
           alt="PayNow QR Code" />
        </div>
      </section>
    </div>
  );
};

export default Donate;
