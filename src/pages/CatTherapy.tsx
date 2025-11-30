import "./CatTherapy.css";  // Assuming you have this CSS file for styling

const CatTherapy = () => {
  return (
    <div className="cat-therapy-container">
      <h1 className="cat-therapy-title">🐾 Cat Therapy: Relax with Our Adorable Cats 🐾</h1>

      <div className="cat-therapy-section">
        <h2>Unwind with Our Furry Friends</h2>
        <p>
          Feeling stressed? Take a break from your busy routine and relax with our
          adorable rescue cats. 🐱💆‍♀️ Spend quality time with them, enjoy their purring
          therapy, and recharge your mind and body.
        </p>
      </div>

      <div className="cat-therapy-section">
        <h2>What We Offer</h2>
        <ul className="section-list">
          <li>Comfortable and cozy space for relaxation 🛋️</li>
          <li>Gentle, affectionate cats for cuddling 🐾</li>
          <li>Mindfulness exercises to help you de-stress 🧘‍♂️</li>
          <li>Herbal teas and light snacks 🍵</li>
        </ul>
      </div>

      <div className="cat-therapy-section">
        <h2>Our Mission</h2>
        <p>
          We believe in the healing power of animals. Through our Cat Therapy sessions,
          we aim to promote emotional well-being by connecting individuals with cats in a
          safe and calming environment. Our mission is to spread joy and comfort, one paw
          at a time! ❤️
        </p>
      </div>

      <div className="cat-therapy-section">
        <h2>Contact Us</h2>
        <p>Interested in booking a session? Reach out to us for more information.</p>
        <a href="mailto:contact@cattherapy.com" className="contact-button">📧 Get in Touch</a>
      </div>
    </div>
  );
};

export default CatTherapy;
