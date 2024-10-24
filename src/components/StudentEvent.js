// src/pages/Events.js
import React, { useState } from 'react';
import './styles/StudentEvent.css'; // CSS styling for the Events page

const eventsData = [
    { id: 1, name: 'Orientation Week', date: '2024-10-30', location: 'Main Hall', description: 'Welcome new students to campus life.' },
    { id: 2, name: 'Hackathon 2024', date: '2024-11-05', location: 'IT Lab', description: 'A 48-hour coding competition.' },
    { id: 3, name: 'Business Seminar', date: '2024-11-12', location: 'Conference Room B', description: 'Learn from top business leaders.' },
    { id: 4, name: 'Graduation Ceremony', date: '2024-12-15', location: 'Auditorium', description: 'Celebrating the achievements of our graduates.' },
    { id: 5, name: 'Christmas Concert', date: '2024-12-20', location: 'Chapel', description: 'Enjoy festive music and performances.' },
  ];
  
  const Events = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
    const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      setFilteredEvents(
        eventsData.filter((event) =>
          event.name.toLowerCase().includes(term) || event.location.toLowerCase().includes(term)
        )
      );
    };
  
    return (
      <div className="events-page-container">
        <h5>Events</h5>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
          className="event-search"
        />
  
        <div className="events-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p className="no-events">No events found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Events;