import "./ForCatRescuers.css";
import { Link } from "react-router-dom";

export default function ForCatRescuers() {
  return (
    <div className="rescuers-page">
      {/* Large Header */}
      <header className="rescuers-header">
        <h1>🐾 For Cat Rescuers 🐾</h1>
      </header>

      {/* Resources Section */}
      <section className="rescuers-section">
        <h2 className="section-heading"> Resources for You</h2>
        <p className="section-description">
          Whether you’re new to feeding or an experienced rescuer, here are tools to support your journey.
        </p>
        <ul className="section-list">
          
        </ul>
      </section>

      {/* Share Your Story */}
      <section className="rescuers-section">
        <h2 className="section-heading"> Share Your Story</h2>
        <p className="section-description">
          We feature rescuers' experiences to inspire and connect the community. Want to be featured?
        </p>
        <Link to="/submit-story" className="section-link">Submit Your Story</Link>
      </section>

      {/* Need Help */}
      <section className="rescuers-section">
        <h2 className="section-heading">🛠️ Need Help?</h2>
        <p className="section-description">
          We can help connect you with fosters, transport volunteers, or donations.
        </p>
        <Link to="/contact" className="section-link">Reach Out</Link>
      </section>
    </div>
  );
}



  