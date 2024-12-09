import './Navbar.css' ;
<Link to="/configure">Configure</Link>
import React from "react";
import { Link } from "react-router-dom";
import {useAuth}
 from "../context/AuthContext";

const Navbar = () => {
  const { userRole, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {userRole === "vendor" ? (
          <>
            <Link to="/vendor-dashboard">Vendor Dashboard</Link>
            <Link to="/vendor-dashboard/add-ticket">Add Ticket</Link>
          </>
        ) : userRole === "customer" ? (
          <>
            <Link to="/customer-dashboard">Customer Dashboard</Link>
            <Link to="/customer-dashboard/buy-ticket">Buy Ticket</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {userRole && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;