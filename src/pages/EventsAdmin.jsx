import { useState, useEffect } from 'react';
import EventCard from '../components/events/EventCard';
import EventFilter from '../components/events/EventFilter';
import eventsData from '../data/eventsData.json';
import './EventsAdmin.css';

function EventsAdmin() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Support Group',
    date: '',
    time: '',
    duration: '',
    location: '',
    description: '',
    isVirtual: true,
    meetingLink: ''
  });

  useEffect(() => {
    // Load events from JSON on mount (mock database)
    setEvents(eventsData.events);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new event with unique ID
    const newEvent = {
      id: `event-${Date.now()}`,
      ...formData
    };
    
    // Add to events list (mock database save)
    setEvents(prev => [...prev, newEvent]);
    
    // Reset form and close
    setFormData({
      title: '',
      category: 'Support Group',
      date: '',
      time: '',
      duration: '',
      location: '',
      description: '',
      isVirtual: true,
      meetingLink: ''
    });
    setShowForm(false);
    
    alert('Event added successfully! (Mock save)');
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Event Management</h1>
        <button 
          className="add-event-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '✕ Cancel' : '+ Add New Event'}
        </button>
      </header>

      {/* Add Event Form */}
      {showForm && (
        <div className="form-card">
          <h2>Create New Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Event Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option>Support Group</option>
                <option>Educational Workshop</option>
                <option>Social Event</option>
                <option>Fundraiser</option>
                <option>Wellness Activity</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="e.g., 6:00 PM EST"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration *</label>
              <input
                type="text"
                id="duration"
                name="duration"
                placeholder="e.g., 90 minutes"
                value={formData.duration}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="e.g., Virtual - Zoom or Physical Address"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="isVirtual"
                  checked={formData.isVirtual}
                  onChange={handleInputChange}
                />
                This is a virtual event
              </label>
            </div>

            {formData.isVirtual && (
              <div className="form-group">
                <label htmlFor="meetingLink">Meeting Link</label>
                <input
                  type="url"
                  id="meetingLink"
                  name="meetingLink"
                  placeholder="https://zoom.us/test"
                  value={formData.meetingLink}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="form-actions">
              <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Create Event
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter Section */}
      <EventFilter 
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      {/* Events List */}
      <div className="events-grid">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventsAdmin;