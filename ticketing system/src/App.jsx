import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import VendorDashboard from "./components/VendorDashboard";
import CustomerDashboard from "./components/CustomerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
