import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo-bar">
        <div className="container">
          <div className="header-content">
            <div className="logo-div">
              <Link to="/">
                <img 
                  src="/src/assets/images/BIC-logo.png" 
                  alt="Brain Injury Connection" 
                  className="logo"
                />
              </Link>
            </div>
            <div className="site-info">
              <ul className="contact-info">
                <li>
                  <a href="tel:510-865-4953">
                    📱 510-865-4953
                  </a>
                </li>
                <li>
                  <a href="mailto:info@braininjuryconnection.org">
                    ✉️ info@braininjuryconnection.org
                  </a>
                </li>
                <li>
                  <button className="search-btn">🔍</button>
                </li>
                <li className="language-switch">
                  [gtranslate]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="main-menu-bar">
        <div className="container">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Brain Injury</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/admin/events">EVENTS ADMIN</Link></li>
            <li><Link to="/directory">Directory</Link></li>
            <li><Link to="/meet-us">Meet Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/surveys">Survey & Polls</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Link to="/donate" className="donate-link">Donate</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;