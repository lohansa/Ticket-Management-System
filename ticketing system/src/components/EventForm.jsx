import { useState } from "react";
import axios from "../api/api";

function EventForm() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = async () => {
    const data = { name: eventName, date: eventDate };

    try {
      const response = await axios.post("/add-event", data);
      if (response.data.success) {
        alert("Event added successfully!");
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div>
      <h1>Add Event</h1>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EventForm;
