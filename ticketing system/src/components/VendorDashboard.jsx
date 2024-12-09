import { useNavigate } from "react-router-dom";

function VendorDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Vendor Dashboard</h1>
      <button onClick={() => navigate("/add-event")}>Add Event</button>
      <button onClick={() => navigate("/add-ticket")}>Add Ticket</button>
    </div>
  );
}

export default VendorDashboard;
