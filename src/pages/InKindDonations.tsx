import React from "react";
import { Link } from "react-router-dom";
import "./InKindDonations.css"; // Assuming you have the relevant CSS file

const InKindDonations = () => {
  return (
    <div className="in-kind-donations-container">
      <h1>In-Kind Donations</h1>
      <p className="description">
        Support us by donating products from our wish list. Your generous
        contributions help us provide the best care for our cats.
      </p>

      <h2>Our Collaborating Companies</h2>
      <div className="company-logos">
        {/* Placeholder for Rein Biotech */}
        <div className="company">
          <img
            src="https://via.placeholder.com/150"
            alt="Rein Biotech Logo"
            className="company-logo"
          />
          <p className="company-description">
            Rein Biotech: A company focused on biotechnology solutions to improve
            pet health and wellness.
          </p>
        </div>

        {/* Placeholder for Polypet */}
        <div className="company">
          <img
            src="https://via.placeholder.com/150"
            alt="Polypet Logo"
            className="company-logo"
          />
          <p className="company-description">
            Polypet: Leading supplier of quality pet products that help improve
            the lives of pets and their owners.
          </p>
        </div>

        {/* Placeholder for Petmart */}
        <div className="company">
          <img
            src="https://via.placeholder.com/150"
            alt="Petmart Logo"
            className="company-logo"
          />
          <p className="company-description">
            Petmart: Retailer of pet food and accessories, dedicated to providing
            quality products for pets.
          </p>
        </div>
      </div>

      <Link to="/donate" className="cta-button">
        Make a Difference
      </Link>
    </div>
  );
};

export default InKindDonations;



