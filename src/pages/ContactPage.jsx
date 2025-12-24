import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>PO Box 2452<br />Alameda, CA 94501</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p><a href="tel:510-865-4953">510-865-4953</a></p>
            </div>
            <div className="info-item">
              <h3>✉️ Email</h3>
              <p><a href="mailto:info@braininjuryconnection.org">info@braininjuryconnection.org</a></p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email *" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message *" rows="5" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;