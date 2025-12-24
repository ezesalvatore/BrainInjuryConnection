import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img 
                src="/src/assets/images/BIC-logo.png" 
                alt="Brain Injury Connection" 
                className="logo"
              />
            </div>
            <div className="social-logos">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-section">
              <h4>Useful Links</h4>
              <ul>
                <li><Link to="/about">About BIC</Link></li>
                <li><Link to="/about-brain-injury">About Brain Injury</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/surveys">Surveys & Polls</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Important Links</h4>
              <ul>
                <li><a href="#">BIC Disclaimer</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">BIC Brochure</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="contact-box">
                <p>📍 PO Box 2452</p>
                <p>Alameda, CA 94501</p>
              </div>
              <div className="contact-box">
                <p>📞 <a href="tel:510-865-4953">510-865-4953</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <span>Copyright © 2025 BrainInjury Connection.org</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;