import React from "react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div>
      <h1>Vendor Dashboard</h1>
      <Link to="/vendor-dashboard/add-ticket">Add Tickets</Link>
      <Link to="/vendor-dashboard/add-event">Add Events</Link>
    </div>
  );
};

export default VendorDashboard;
