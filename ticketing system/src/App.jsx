import React from "react";
import ConfigurationPage from "./pages/ConfigurationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VendorDashboard from "./pages/VendorDashboard/VendorDashboard";
import AddTicket from "./pages/VendorDashboard/AddTicket";
import AddEvent from "./pages/VendorDashboard/AddEvent";
import CustomerDashboard from "./pages/CustomerDashboard/CustomerDashboard";
import BuyTicket from "./pages/CustomerDashboard/BuyTicket";
import EventDetails from "./pages/CustomerDashboard/EventDetails";
import SaveLogs from "./pages/SaveLogs";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendor-dashboard" element={<ProtectedRoute isVendor>
          <VendorDashboard />
        </ProtectedRoute>} />
        <Route path="/vendor-dashboard/add-ticket" element={<ProtectedRoute isVendor>
          <AddTicket />
        </ProtectedRoute>} />
        <Route path="/vendor-dashboard/add-event" element={<ProtectedRoute isVendor>
          <AddEvent />
        </ProtectedRoute>} />
        <Route path="/customer-dashboard" element={<ProtectedRoute>
          <CustomerDashboard />
        </ProtectedRoute>} />
        <Route path="/customer-dashboard/buy-ticket" element={<ProtectedRoute>
          <BuyTicket />
        </ProtectedRoute>} />
        <Route path="/customer-dashboard/event-details" element={<ProtectedRoute>
          <EventDetails />
        </ProtectedRoute>} />
        <Route path="/save-logs" element={<ProtectedRoute>
          <SaveLogs />
        </ProtectedRoute>} />
        <Route path="/configure" element={<ConfigurationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
