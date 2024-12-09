import React, { useState } from 'react';
import styled from 'styled-components';

const AddEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f4f8;

  form {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
  }

  input, textarea, button {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    background: #007bff;
    color: white;
    cursor: pointer;
    border: none;

    &:hover {
      background: #0056b3;
    }
  }
`;

const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Added:', formData);
    // Call backend API to save the event
  };

  return (
    <AddEventContainer>
      <form onSubmit={handleSubmit}>
        <h2>Add Event</h2>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Event</button>
      </form>
    </AddEventContainer>
  );
};

export default AddEvent;
