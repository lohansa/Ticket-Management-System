import { useState } from "react";
import axios from "../api/api";

function TicketForm() {
  const [ticketName, setTicketName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const data = { name: ticketName, price };

    try {
      const response = await axios.post("/add-ticket", data);
      if (response.data.success) {
        alert("Ticket added successfully!");
      }
    } catch (error) {
      console.error("Error adding ticket:", error);
    }
  };

  return (
    <div>
      <h1>Add Ticket</h1>
      <input
        type="text"
        placeholder="Ticket Name"
        value={ticketName}
        onChange={(e) => setTicketName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TicketForm;
