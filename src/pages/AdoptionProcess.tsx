// import React from 'react';
import './AdoptionProcess.css';
import adoptionFormPdf from '../assets/adoption-form.pdf';


const AdoptionProcess = () => {
  return (
    <div className="adoption-container">
      <h1 className="adoption-title">LKP Adoption Process</h1>

      <section className="adoption-section">
        <h2>Steps in the Cat Adoption Process</h2>
        <div className="steps">
          <div className="step-card">
            <h3 className="step-title">LKP Social Media & Events Outreach</h3>
            <p>Browse <a href="https://www.instagram.com/luvkuching/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">LKP’s social media</a> and/or talk to us at events to find out which cats are available.</p>
          </div>
          <div className="step-card">
            <h3 className="step-title">Fill Out Adoption Questionnaire</h3>
            <p>If keen to adopt, you can express interest by filling out the adoption interest questionnaire. This questionnaire asks about the adopting family, such as their adoption history, past experience(s) with cats, and current pet(s).</p>
            <a href="https://form.jotform.com/230051538289053" target="_blank" rel="noopener noreferrer">
              <button className="pdf-button">Adoption Questionnaire</button>
            </a>
          </div>
          <div className="step-card">
            <h3 className="step-title">Meet the Cat</h3>
            <p>LKP will arrange an appointment for you to meet and interact with the cat(s) at our facility.</p>
          </div>
          <div className="step-card">
            <h3 className="step-title">Interview & Assessing Suitability</h3>
            <p>LKP will briefly interview potential adopter(s) during their visit at the facility. This is to assess adopters’ suitability on how well they are able to meet the cats’ needs, whether in terms of daily care, attention, and/or medical needs. We want to find out more about how the adopter’s home environment is like and how adopters plan to integrate the cat into the new home environment and/or with resident cat(s).</p>
          </div>
        </div>
      </section>

      <section className="preparation">
        <h2>Preparing for the Cat to Go Home</h2>
        <div className="preparation-card">
          <h3 className="preparation-title">What You Need to Do</h3>
          <ul>
            <li>Adopting family has all windows meshed for safety.</li>
            <li>📄LKP will hand over necessary documents:
              <ul>
                <li>✔️Sterilisation certification, if completed.</li>
                <li>💳Details of microchip, if completed.</li>
                <li>📑Any other medical records, e.g., vaccination records.</li>
              </ul>
            </li>
            <li>🔄If not completed at the point of adoption, LKP will follow-up post-adoption on:
              <ul>
                <li>🧪Sterilisation</li>
                <li>💾Microchipping</li>
                <li>💉Vaccination</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-button">
        <a href={adoptionFormPdf} target="_blank" rel="noopener noreferrer">
          <button className="pdf-button">Copy Of Adoption Form</button>
        </a>
      </div>
    </div>
  );
};

export default AdoptionProcess;


