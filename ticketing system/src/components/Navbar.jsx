import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { userRole, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {userRole === "vendor" ? (
        <>
          <Link to="/vendor-dashboard">Vendor Dashboard</Link>
          <Link to="/vendor-dashboard/add-ticket">Add Ticket</Link>
          <Link to="/vendor-dashboard/add-event">Add Event</Link>
        </>
      ) : userRole === "customer" ? (
        <>
          <Link to="/customer-dashboard">Customer Dashboard</Link>
          <Link to="/customer-dashboard/buy-ticket">Buy Ticket</Link>
          <Link to="/customer-dashboard/event-details">Event Details</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      {userRole && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
