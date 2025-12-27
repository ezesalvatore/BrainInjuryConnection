import { useState } from 'react';
import { Link } from 'react-router-dom';
import OnboardingQuizModal from '../components/survey/OnboardingQuizModal';
import './HomePage.css';

function HomePage() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h4>WELCOME TO</h4>
              <h1>Brain Injury Connection</h1>
              <h5>First time on our site?</h5>
              <p>For more information</p>
              <button
                className="start-here-btn"
                onClick={() => setShowOnboarding(true)}
              >
                START HERE <span className="arrow">→</span>
              </button>
            </div>
            <div className="banner-graphic">
              <div className="puzzle-pieces">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prevention-banner">
        <div className="container">
          <div className="prevention-content">
            <div className="prevention-logo">
              <div className="nspl-placeholder">
                NATIONAL SUICIDE PREVENTION LIFELINE
              </div>
            </div>
            <div className="prevention-info">
              <h2>Talk To Someone Now</h2>
              <p>
                If you're thinking about suicide, are worried about a friend or loved one, 
                or would like emotional support, the Lifeline network is available 24/7 
                across the United States
              </p>
              <div className="prevention-contacts">
                <a href="tel:1-800-273-8255">1 (800) 273-8255 <strong><i>Veterans Press 1</i></strong></a>
                <span> | </span>
                <a href="https://www.suicidepreventionlifeline.org" target="_blank" rel="noopener noreferrer">
                  www.suicidepreventionlifeline.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-blocks">
        <div className="container">
          <div className="blocks-grid">
            <div className="info-block">
              <div className="block-icon">🏢</div>
              <h3>Our Organization</h3>
              <p>
                The Brain Injury Connection (BIC) is a nonprofit organization founded to help 
                survivors of brain injury and their caregivers as they attempt to understand 
                their new reality. Our goal is to empower those who have been affected by 
                brain injury and connect them to resources available in the community.
              </p>
              <a href="#" className="read-more">Read More →</a>
            </div>

            <div className="info-block">
              <div className="block-icon">📋</div>
              <h3>Take Our Survey</h3>
              <p>
                This survey typically takes between 20-30 minutes to complete. (Please be 
                sure you are well-rested and use any accommodations necessary.)
              </p>
              <p>
                If you are unable to participate in the online version, you can download 
                the printable version.
              </p>
              <Link to="/surveys" className="read-more">Read More →</Link>
            </div>

            <div className="info-block">
              <div className="block-icon">🤝</div>
              <h3>Connect to Community</h3>
              <p>
                Connect with others who understand your journey. Join support groups, 
                attend events, and access resources to help you navigate life after 
                brain injury.
              </p>
              <Link to="/events" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-heading">
              <h3>BIC Newsletter</h3>
              <h5>For latest updates</h5>
            </div>
            <div className="newsletter-form">
              <form>
                <input type="email" placeholder="Email *" required />
                <input type="text" placeholder="First Name *" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <OnboardingQuizModal
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
      />
    </div>
  );
}

export default HomePage;
