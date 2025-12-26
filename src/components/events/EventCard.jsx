import './EventCard.css';

function EventCard({ event }) {
  return (
    <div className="event-card-admin">
      <div className="card-header">
        <span className="category-badge">{event.category}</span>
        <div className="card-actions">
          <button className="edit-btn" aria-label="Edit event">✏️</button>
          <button className="delete-btn" aria-label="Delete event">🗑️</button>
        </div>
      </div>
      
      <h3>{event.title}</h3>
      
      <div className="card-details">
        <p><strong>📅 Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>🕐 Time:</strong> {event.time}</p>
        <p><strong>📍 Location:</strong> {event.location}</p>
        <p><strong>⏱ Duration:</strong> {event.duration}</p>
      </div>
      
      <p className="card-description">{event.description}</p>
      
      {event.isVirtual && (
        <span className="virtual-badge">🌐 Virtual Event</span>
      )}
    </div>
  );
}

export default EventCard;