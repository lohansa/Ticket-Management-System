import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout(); // Reset authenticated state
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
