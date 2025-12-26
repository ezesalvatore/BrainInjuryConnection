import { useParams, Link, useNavigate } from 'react-router-dom';
import eventsData from '../data/eventsData.json';
import './EventsDetail.css';

function EventsDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  // Find the event by ID
  const event = eventsData.events.find(e => e.id === eventId);
  
  // Handle event not found
  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-not-found">
          <h1>Event Not Found</h1>
          <p>Sorry, we couldn't find the event you're looking for.</p>
          <Link to="/events" className="back-button">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const today = new Date();
  const isPastEvent = eventDate < today;

  return (
    <div className="event-detail-page">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/events')} 
        className="back-button"
        aria-label="Go back to events"
      >
        ← Back to Events
      </button>

      {/* Event Header */}
      <header className="event-detail-header">
        <div className="event-badges">
          <span className="category-badge">{event.category}</span>
          {event.isVirtual && <span className="virtual-badge">🌐 Virtual Event</span>}
          {isPastEvent && <span className="past-badge">Past Event</span>}
        </div>
        <h1>{event.title}</h1>
      </header>

      {/* Event Details Card */}
      <div className="event-detail-card">
        {/* Main Info Section */}
        <section className="event-info-section">
          <h2>Event Information</h2>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">📅</span>
              <div className="info-content">
                <h3>Date</h3>
                <p>{eventDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div className="info-content">
                <h3>Time</h3>
                <p>{event.time}</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⏱</span>
              <div className="info-content">
                <h3>Duration</h3>
                <p>{event.duration}</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <h3>Location</h3>
                <p>{event.location}</p>
              </div>
            </div>

            {event.capacity && (
              <div className="info-item">
                <span className="info-icon">👥</span>
                <div className="info-content">
                  <h3>Capacity</h3>
                  <p>{event.capacity} participants</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Description Section */}
        <section className="event-description-section">
          <h2>About This Event</h2>
          <p className="event-description">{event.description}</p>
        </section>

        {/* Action Buttons */}
        <section className="event-actions-section">
          {!isPastEvent && event.isVirtual && event.meetingLink && (
            <a 
              href={event.meetingLink}
              className="primary-action-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on Zoom
            </a>
          )}
          
          {isPastEvent && (
            <div className="past-event-message">
              <p>This event has already occurred.</p>
            </div>
          )}

          {!isPastEvent && !event.isVirtual && (
            <div className="in-person-message">
              <p>📍 This is an in-person event. Please arrive at the location listed above.</p>
            </div>
          )}
        </section>

        {/* Additional Info */}
        <section className="event-additional-info">
          <h2>Questions?</h2>
          <p>
            For more information about this event, please contact us at{' '}
            <a href="mailto:info@braininjuryconnection.org">
              info@braininjuryconnection.org
            </a>
            {' '}or call{' '}
            <a href="tel:510-865-4953">510-865-4953</a>.
          </p>
        </section>
      </div>

      {/* Related Events Section */}
      <section className="related-events-section">
        <h2>More Events You Might Like</h2>
        <div className="related-events-grid">
          {eventsData.events
            .filter(e => e.id !== eventId && e.category === event.category)
            .slice(0, 3)
            .map(relatedEvent => (
              <Link 
                key={relatedEvent.id} 
                to={`/events/${relatedEvent.id}`}
                className="related-event-card"
              >
                <span className="related-category">{relatedEvent.category}</span>
                <h3>{relatedEvent.title}</h3>
                <p className="related-date">
                  📅 {new Date(relatedEvent.date).toLocaleDateString()}
                </p>
              </Link>
            ))}
        </div>
        {eventsData.events.filter(e => e.id !== eventId && e.category === event.category).length === 0 && (
          <p className="no-related-events">No similar events at this time.</p>
        )}
      </section>
    </div>
  );
}

export default EventsDetail;