import "./ForCatRescuers.css";
import Placeholder1 from "../assets/placeholder pictures/placeholder1.jpg";

const ForCatRescuers = () => {
  return (
    <div className="cat-rescuers-container">
      {/* Hero Section - Full Width */}
      <section className="hero-section">
        <img src={Placeholder1} alt="Cats in need" className="hero-image" />
        <div className="hero-overlay">
          <h1>FOR CAT RESCUERS</h1>
          <p>Resources and guidance for helping cats in need</p>
        </div>
      </section>

      {/* How to Contact Us */}
      <div className="section-wrapper">
        <div className="section">
          <h2>📞 HOW TO CONTACT US</h2>
          <p>
            If you've found a cat in need or have questions regarding rescue, please reach out to us. 
            We'll do our very best to assist or guide you to the right resources.
          </p>
          
          <h3>👉 Report a Cat in Need:</h3>
          <ul>
            <li><strong>Email:</strong> lkp.rescue@gmail.com</li>
            <li><strong>Social Media:</strong> Message us on Instagram @luvkuching</li>
          </ul>
          
          <h3>Please include as much detail as possible:</h3>
          <ul>
            <li>Location of the cat</li>
            <li>Physical condition and behavior</li>
            <li>Photos or videos (if available)</li>
            <li>Any immediate concerns (injury, illness, danger, etc.)</li>
            <li>Whether the cat has been brought to a vet</li>
            <li>Any medical reports available, e.g. FIV/FeLV results</li>
          </ul>
        </div>
        <div className="contact-info-box">
          <h3>Emergency Contacts</h3>
          <div className="emergency-contact">
            <strong>SPCA 24/7 Emergency Hotline:</strong><br />
            6287 5355 ext 9
          </div>
          <div className="emergency-contact">
            <strong>Love Kuching Project:</strong><br />
            lkp.rescue@gmail.com<br />
            @luvkuching (Instagram)
          </div>
        </div>
      </div>

      {/* Helpful Resources */}
      <div className="section-wrapper">
        <div className="section">
          <h2>📚 HELPFUL RESOURCES</h2>
          <p>
            We're a small shelter with limited space, time, and funding — and while we wish we could help every cat in need, 
            the reality is that we can't always respond to every case. That's why we've put together these helpful resources 
            to assist you in taking action, finding support, and making the best decisions for cats in your care or community.
          </p>
        </div>
        <div className="resources-image">
          <img src={Placeholder1} alt="Resources for cat rescuers" />
        </div>
      </div>

      {/* Medical Emergencies */}
      <div className="section-wrapper">
        <div className="section">
          <h2>🐱 MEDICAL EMERGENCIES & ASSISTANCE</h2>
          <p>
            While we do our best to help, Love Kuching is not equipped to provide medical treatment, 
            as we do not have an in-house veterinarian. If a cat needs urgent medical attention, we recommend:
          </p>
          <ul>
            <li>
              <strong>Call SPCA 24/7 emergency rescue hotline</strong> for help (6287 5355 ext 9). 
              You can retrieve a case number from SPCA if you would like to make a follow-up.
            </li>
            <li>
              <strong>Alternatively, you can bring the cat to a vet clinic.</strong> It would be helpful to research 
              online and/or call up clinics to check on their rates first before visiting.
            </li>
          </ul>
        </div>
        <div className="medical-info-box">
          <h3>Medical Emergency Steps</h3>
          <ol>
            <li>Assess the cat's condition</li>
            <li>Call SPCA emergency hotline</li>
            <li>Get a case number for follow-up</li>
            <li>Transport to vet if possible</li>
            <li>Document all medical reports</li>
          </ol>
        </div>
      </div>

      {/* TNR Section */}
      <div className="section-wrapper">
        <div className="section">
          <h2>🛠 TRAP-NEUTER-RETURN (TNR)</h2>
          <p>
            TNR (Trap-Neuter-Return) is a humane and effective method of managing community cat populations. 
            It involves trapping community cats, having them spayed or neutered, and then returning them to their original location. 
            TNR stops the cycle of endless litters to prevent cat overpopulation in the community.
          </p>
          
          <h3>Trapping the cat</h3>
          <p>
            The Cat Welfare Society (CWS) provide resources on how you can trap a cat yourself, 
            as well as how you can engage a professional trapper.
          </p>
          <a href="https://www.catwelfare.org/start-your-own-trap-and-neuter/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="resource-link">
            CWS TNR Resources →
          </a>
          
          <h3>Sterilization</h3>
          <p>
            You may bring the cat to your preferred vet clinic for sterilization. Alternatively, 
            the Cat Welfare Society administers the Community Cat Sterilization Programme – 
            You can apply for a sterilization slot via their online form, subjected to terms and conditions and availability.
          </p>
          <a href="https://www.catwelfare.org/catsnip/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="resource-link">
            CWS CatSnip Program →
          </a>
        </div>
        <div className="tnr-info-box">
          <h3>TNR Benefits</h3>
          <ul>
            <li>Prevents cat overpopulation</li>
            <li>Reduces nuisance behaviors</li>
            <li>Improves cat health</li>
            <li>Stabilizes colony size</li>
            <li>Humane population control</li>
          </ul>
        </div>
      </div>

      {/* Finding Fosterers & Adopters */}
      <div className="section-wrapper">
        <div className="section">
          <h2>🔍 FINDING FOSTERERS & ADOPTERS</h2>
          <p>
            Looking to find a foster home or adopter for a cat in your care? While Love Kuching may not be able to take the cat in, 
            you may consider the following options. While cat boarding can be used as a last option, 
            please be aware that it typically incurs fees.
          </p>
          
          <h3>Adoption Platforms:</h3>
          <ul>
            <li><strong>CWS Cat Adoption Board</strong></li>
            <li><strong>Facebook community cat groups:</strong> Sayang Our Singapore's Community Cats, Singapore Cat Lovers Group, etc.</li>
          </ul>
          
          <h3>Tips for Finding Homes:</h3>
          <ul>
            <li>Take clear, high-quality photos</li>
            <li>Write detailed descriptions</li>
            <li>Share on multiple platforms</li>
            <li>Screen potential adopters</li>
            <li>Follow up after adoption</li>
          </ul>
        </div>
        <div className="fostering-info-box">
          <h3>Fostering Resources</h3>
          <ul>
            <li>Social media groups</li>
            <li>Community networks</li>
            <li>Vet clinic referrals</li>
            <li>Local cat lovers</li>
            <li>Emergency boarding</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <p>Need immediate assistance? Contact us right away!</p>
        <div className="cta-buttons">
          <a href="mailto:lkp.rescue@gmail.com" className="cta-button primary">
            Email Us
          </a>
          <a href="https://www.instagram.com/luvkuching" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="cta-button secondary">
            Message on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default ForCatRescuers;
  