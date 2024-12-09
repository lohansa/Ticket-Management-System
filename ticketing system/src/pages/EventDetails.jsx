import React from 'react';
import styled from 'styled-components';

const EventDetailsContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  min-height: 100vh;

  h1 {
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    background: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const EventDetails = () => {
  const events = [
    { id: 1, name: 'Music Concert', date: '2024-12-25' },
    { id: 2, name: 'Tech Expo', date: '2025-01-15' },
  ];

  return (
    <EventDetailsContainer>
      <h1>Event Details</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </EventDetailsContainer>
  );
};

export default EventDetails;
