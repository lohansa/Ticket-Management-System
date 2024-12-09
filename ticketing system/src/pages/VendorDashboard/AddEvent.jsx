import React, { useState } from "react";

const AddEvent = () => {
  const [eventData, setEventData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulated API call
    console.log("Event Added", eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Event</h1>
      <input
        type="text"
        placeholder="Event Name"
        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEvent;
