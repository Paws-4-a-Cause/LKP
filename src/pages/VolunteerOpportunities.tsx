import "./VolunteerOpportunities.css";
import FeedCat from "../assets/placeholder pictures/feedcat.jpg";

const VolunteerOpportunities = () => {
  return (
    <div className="volunteer-opportunities-container">
      {/* Hero Section - Full Width */}
      <section className="hero-section">
        <img src={FeedCat} alt="Volunteer opportunities" className="hero-image" />
        <div className="hero-overlay">
          <h1>VOLUNTEER OPPORTUNITIES</h1>
          <p>Join our mission to help cats in need</p>
        </div>
      </section>

      {/* Foster Care & Long-term Volunteering */}
      <div className="section-wrapper">
        <div className="section">
          <h2>🏠 FOSTER CARE & LONG-TERM VOLUNTEERING</h2>
          <p>
            We're looking for dedicated volunteers who can make a weekly commitment for a minimum of 6 months. 
            Apply through our online form to get started on your volunteering journey with us.
          </p>
          
          <div className="apply-button-container">
            <a 
              href="https://form.jotform.me/90571579543466" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="apply-button"
            >
              Apply Now →
            </a>
          </div>
        </div>
        <div className="volunteer-info-box">
          <h3>Commitment Required</h3>
          <ul>
            <li>Weekly commitment</li>
            <li>Minimum 6 months</li>
            <li>Regular attendance</li>
            <li>Training completion</li>
            <li>Performance evaluation</li>
          </ul>
        </div>
      </div>

      {/* Shift Timings */}
      <div className="section-wrapper">
        <div className="section">
          <h2>⏰ SHIFT TIMINGS</h2>
          <p>
            While Love Kuching Project isn't staffed 24/7, we need volunteers who are available at different times of the day. 
            Each shift is 2 hours long, and we offer flexibility especially for morning and afternoon shifts.
          </p>
          
          <div className="shift-timings">
            <div className="shift-card morning">
              <h3>🌅 Morning Shifts</h3>
              <p className="shift-time">10:00 - 14:00</p>
              <p className="shift-note">2 hours between these times</p>
              <span className="flexibility-badge">More Flexible</span>
            </div>
            
            <div className="shift-card afternoon">
              <h3>☀️ Afternoon Shifts</h3>
              <p className="shift-time">14:00 - 18:00</p>
              <p className="shift-note">2 hours between these times</p>
              <span className="flexibility-badge">More Flexible</span>
            </div>
            
            <div className="shift-card evening">
              <h3>🌙 Evening Shifts</h3>
              <p className="shift-time">18:00 - 22:00</p>
              <p className="shift-note">2 hours between these times</p>
            </div>
          </div>
        </div>
        <div className="timing-info-box">
          <h3>Shift Flexibility</h3>
          <p>Morning and afternoon shift timings tend to be more flexible to accommodate different schedules.</p>
          <div className="shift-duration">
            <strong>Duration:</strong> 2 hours per shift
          </div>
        </div>
      </div>

      {/* Volunteer Responsibilities */}
      <div className="section-wrapper">
        <div className="section">
          <h2>📋 VOLUNTEER RESPONSIBILITIES</h2>
          <p>
            Our volunteers are required to help with various tasks to ensure the well-being of our cats and the smooth operation of our shelter.
          </p>
          
          <div className="responsibilities-grid">
            <div className="responsibility-item">
              <span className="responsibility-icon">🍽️</span>
              <h4>Food Preparation</h4>
              <p>Preparing meals and dietary supplements for cats</p>
            </div>
            
            <div className="responsibility-item">
              <span className="responsibility-icon">🧹</span>
              <h4>Cleaning & Maintenance</h4>
              <p>Cleaning cat suites, litter boxes, sweeping and mopping floors</p>
            </div>
            
            <div className="responsibility-item">
              <span className="responsibility-icon">💊</span>
              <h4>Medical Care</h4>
              <p>Administering clinical treatments and medications</p>
            </div>
            
            <div className="responsibility-item">
              <span className="responsibility-icon">👕</span>
              <h4>Laundry</h4>
              <p>Doing laundry (Sunday afternoons only)</p>
            </div>
          </div>
        </div>
        <div className="responsibilities-info-box">
          <h3>Training Areas</h3>
          <ul>
            <li>Food preparation</li>
            <li>Dietary supplements</li>
            <li>Clinical procedures</li>
            <li>Safety protocols</li>
            <li>Cat handling</li>
          </ul>
        </div>
      </div>

      {/* Training Process */}
      <div className="section-wrapper">
        <div className="section">
          <h2>🎓 TRAINING PROCESS</h2>
          <p>
            We understand that different individuals come in with varying levels of experience and learn at different speeds. 
            Our training process is designed to be flexible and comprehensive.
          </p>
          
          <div className="training-steps">
            <div className="training-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Initial Training</h4>
                <p>Learn the basics of food preparation, supplements, and general care</p>
              </div>
            </div>
            
            <div className="training-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Performance Evaluation</h4>
                <p>Demonstrate consistent attendance and performance</p>
              </div>
            </div>
            
            <div className="training-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Clinical Training</h4>
                <p>Advanced training for clinical care procedures</p>
              </div>
            </div>
            
            <div className="training-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Independent Shifts</h4>
                <p>Handle shifts independently after training completion</p>
              </div>
            </div>
          </div>
          
          <div className="training-note">
            <p>
              <strong>Note:</strong> We do not have a fixed number of training sessions. 
              We will train new volunteers on the job until they are comfortable handling shifts independently.
            </p>
          </div>
        </div>
        <div className="training-info-box">
          <h3>Training Benefits</h3>
          <ul>
            <li>Hands-on experience</li>
            <li>Professional development</li>
            <li>Animal care skills</li>
            <li>Community impact</li>
            <li>Personal fulfillment</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Ready to Make a Difference?</h3>
        <p>Join our team of dedicated volunteers and help us care for cats in need</p>
        <div className="cta-buttons">
          <a 
            href="https://form.jotform.me/90571579543466" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button primary"
          >
            Apply to Volunteer
          </a>
          <a href="/for-cat-rescuers" className="cta-button secondary">
            Learn More About Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default VolunteerOpportunities;