import './EventFilter.css';

function EventFilter({ currentFilter, onFilterChange }) {
  const categories = [
    'all',
    'Support Group',
    'Educational Workshop',
    'Social Event',
    'Fundraiser',
    'Wellness Activity'
  ];

  return (
    <div className="event-filter">
      <h3>Filter by Category:</h3>
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={currentFilter === cat ? 'active' : ''}
            aria-pressed={currentFilter === cat}
          >
            {cat === 'all' ? 'All Events' : cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventFilter;