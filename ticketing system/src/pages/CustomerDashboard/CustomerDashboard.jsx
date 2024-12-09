import React from "react";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <div>
      <h1>Customer Dashboard</h1>
      <Link to="/customer-dashboard/event-details">Event Details</Link>
      <Link to="/customer-dashboard/buy-ticket">Buy Tickets</Link>
    </div>
  );
};

export default CustomerDashboard;
