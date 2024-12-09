import React, { useState } from "react";

const AddTicket = () => {
  const [ticketData, setTicketData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulated API call
    console.log("Ticket Added", ticketData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Ticket</h1>
      <input
        type="text"
        placeholder="Event ID"
        onChange={(e) => setTicketData({ ...ticketData, eventId: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setTicketData({ ...ticketData, price: e.target.value })}
      />
      <button type="submit">Add Ticket</button>
    </form>
  );
};

export default AddTicket;
