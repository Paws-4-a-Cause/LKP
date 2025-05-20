// InKindDonations.tsx
import React from 'react';
import './InKindDonations.css';
import ReinLogo from '../assets/collaborating company logos/Rein Logo.png';
import PolypetLogo from '../assets/collaborating company logos/Polypet Logo.avif';
import PetMartLogo from '../assets/collaborating company logos/PetMart Logo.jpg';


const InKindDonations: React.FC = () => {
  return (
    <section className="collaborators-section">
      <h2 className="collaborators-title">🐾 <strong>In-Kind Donations</strong> 🐾</h2>
      <p className="collaborators-description">
        Support us by donating products from our wish list. Your generous contributions help us
        provide the best care for our cats.
      </p>

      <h3 className="collaborators-subtitle">Our Collaborating Companies</h3>

      <div className="collaborators-container">
        <div className="collaborator-card">
          <img src={ReinLogo} alt="Rein Biotech Logo" className="collaborator-logo" />
          <p className="collaborator-name">Rein Biotech</p>
          <p className="collaborator-description">
            A company focused on biotechnology solutions to improve pet health and wellness.
          </p>
          <a
            className="collaborator-button"
            href="https://reinbiotech.com/contribute-to-shelters/love-kuching-project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div className="collaborator-card">
          <img src={PolypetLogo} alt="Polypet Logo" className="collaborator-logo" />
          <p className="collaborator-name">Polypet</p>
          <p className="collaborator-description">
            Leading supplier of quality pet products that help improve the lives of pets and their owners.
          </p>
          <a
            className="collaborator-button"
            href="https://www.polypet.com.sg/collections/donate-to-love-kuching-proj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div className="collaborator-card">
          <img src={PetMartLogo} alt="Petmart Logo" className="collaborator-logo" />
          <p className="collaborator-name">Petmart</p>
          <p className="collaborator-description">
            Retailer of pet food and accessories, dedicated to providing quality products for pets.
          </p>
          <a
            className="collaborator-button"
            href="https://apetmart.com/product/love-kuching-project-donation-wishlist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default InKindDonations;




