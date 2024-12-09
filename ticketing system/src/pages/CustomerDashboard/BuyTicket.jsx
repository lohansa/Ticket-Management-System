import React, { useState } from "react";

const BuyTicket = () => {
  const [ticketId, setTicketId] = useState("");

  const handlePurchase = async (e) => {
    e.preventDefault();
    // Simulated API call
    console.log("Ticket Purchased", ticketId);
  };

  return (
    <form onSubmit={handlePurchase}>
      <h1>Buy Ticket</h1>
      <input
        type="text"
        placeholder="Ticket ID"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
      />
      <button type="submit">Buy Ticket</button>
    </form>
  );
};

export default BuyTicket;
