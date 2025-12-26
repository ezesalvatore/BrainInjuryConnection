import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Link } from 'react-router-dom';
import eventsData from '../data/eventsData.json';
import './Events.css';

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('calendar');
  const [categoryFilter, setCategoryFilter] = useState('all'); // NEW: Category filter
  
  const eventDates = eventsData.events.map(e => new Date(e.date));
  
  // Filter by BOTH date AND category
  const filteredEvents = eventsData.events.filter(event => {
    // Filter by date if one is selected
    const dateMatch = selectedDate 
      ? new Date(event.date).toDateString() === selectedDate.toDateString()
      : true;
    
    // Filter by category
    const categoryMatch = categoryFilter === 'all' 
      ? true 
      : event.category === categoryFilter;
    
    return dateMatch && categoryMatch;
  });

  const categories = [
    'all',
    'Support Group',
    'Educational Workshop',
    'Social Event',
    'Fundraiser',
    'Wellness Activity'
  ];

  return (
    <div className="events-page">
      <header className="events-header">
        <h1>Upcoming Events</h1>
        <p>Join us for support groups, workshops, and community gatherings</p>
      </header>

      {/* View Toggle */}
      <div className="view-toggle">
        <button 
          onClick={() => setViewMode('calendar')}
          className={viewMode === 'calendar' ? 'active' : ''}
          aria-pressed={viewMode === 'calendar'}
        >
          📅 Calendar View
        </button>
        <button 
          onClick={() => setViewMode('list')}
          className={viewMode === 'list' ? 'active' : ''}
          aria-pressed={viewMode === 'list'}
        >
          📋 List View
        </button>
      </div>

      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="calendar-container">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            modifiers={{ hasEvent: eventDates }}
            modifiersStyles={{
              hasEvent: { 
                backgroundColor: '#3498db', 
                color: 'white',
                fontWeight: 'bold' 
              }
            }}
          />
          {selectedDate && (
            <div className="calendar-actions">
              <p className="selected-date-text">
                Showing events for {selectedDate.toLocaleDateString()}
              </p>
              <button 
                onClick={() => setSelectedDate(null)}
                className="clear-date-btn"
              >
                Clear Date Filter
              </button>
            </div>
          )}
        </div>
      )}

      {/* Category Filter Section */}
      <div className="category-filter-section">
        <h3>Filter by Category:</h3>
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={categoryFilter === cat ? 'filter-btn active' : 'filter-btn'}
              aria-pressed={categoryFilter === cat}
            >
              {cat === 'all' ? 'All Categories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedDate || categoryFilter !== 'all') && (
        <div className="active-filters">
          <span className="filter-label">Active Filters:</span>
          {selectedDate && (
            <span className="filter-tag">
              📅 {selectedDate.toLocaleDateString()}
              <button onClick={() => setSelectedDate(null)} aria-label="Remove date filter">✕</button>
            </span>
          )}
          {categoryFilter !== 'all' && (
            <span className="filter-tag">
              {categoryFilter}
              <button onClick={() => setCategoryFilter('all')} aria-label="Remove category filter">✕</button>
            </span>
          )}
          <button 
            onClick={() => {
              setSelectedDate(null);
              setCategoryFilter('all');
            }}
            className="clear-all-btn"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Events List */}
      <div className="events-list">
        <h2>
          {selectedDate || categoryFilter !== 'all' 
            ? `Filtered Events (${filteredEvents.length})` 
            : 'All Upcoming Events'}
        </h2>
        
        {filteredEvents.length === 0 ? (
          <div className="no-events">
            <p>No events match your filters.</p>
            <button 
              onClick={() => {
                setSelectedDate(null);
                setCategoryFilter('all');
              }}
              className="reset-filters-btn"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredEvents.map(event => (
            <article key={event.id} className="event-item">
              <div className="event-badge">{event.category}</div>
              <h3>{event.title}</h3>
              <div className="event-meta">
                <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                <span>🕐 {event.time}</span>
                <span>📍 {event.location}</span>
              </div>
              <p>{event.description}</p>
              
              <div className="event-actions">
                {event.isVirtual && event.meetingLink && (
                  <a 
                    href={event.meetingLink}
                    className="join-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join on Zoom
                  </a>
                )}
                <Link to={`/events/${event.id}`} className="details-button">
                  View Details
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default Events;