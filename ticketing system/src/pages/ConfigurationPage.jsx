import React, { useState } from "react";

const ConfigurationPage = () => {
  const [config, setConfig] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  // Validation logic
  const validateInputs = () => {
    let newErrors = {};

    if (!config.totalTickets || config.totalTickets <= 0) {
      newErrors.totalTickets = "Total Tickets must be a positive number.";
    }

    if (!config.ticketReleaseRate || config.ticketReleaseRate <= 0) {
      newErrors.ticketReleaseRate = "Ticket Release Rate must be positive.";
    }

    if (!config.customerRetrievalRate || config.customerRetrievalRate <= 0) {
      newErrors.customerRetrievalRate = "Customer Retrieval Rate must be positive.";
    }

    if (
      !config.maxTicketCapacity ||
      config.maxTicketCapacity <= 0 ||
      parseInt(config.maxTicketCapacity) < parseInt(config.totalTickets)
    ) {
      newErrors.maxTicketCapacity =
        "Maximum Ticket Capacity must be positive and greater than Total Tickets.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      alert("Configuration saved successfully!");
      console.log("Configuration Data:", config);
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Configure Parameters</h1>
        <form onSubmit={handleSubmit} className="flex-column">
          {/* Total Tickets */}
          <div>
            <label htmlFor="totalTickets">Total Number of Tickets:</label>
            <input
              type="number"
              id="totalTickets"
              name="totalTickets"
              value={config.totalTickets}
              onChange={handleChange}
              placeholder="Enter total tickets"
            />
            {errors.totalTickets && <p className="error">{errors.totalTickets}</p>}
          </div>

          {/* Ticket Release Rate */}
          <div>
            <label htmlFor="ticketReleaseRate">Ticket Release Rate:</label>
            <input
              type="number"
              id="ticketReleaseRate"
              name="ticketReleaseRate"
              value={config.ticketReleaseRate}
              onChange={handleChange}
              placeholder="Enter ticket release rate"
            />
            {errors.ticketReleaseRate && <p className="error">{errors.ticketReleaseRate}</p>}
          </div>

          {/* Customer Retrieval Rate */}
          <div>
            <label htmlFor="customerRetrievalRate">Customer Retrieval Rate:</label>
            <input
              type="number"
              id="customerRetrievalRate"
              name="customerRetrievalRate"
              value={config.customerRetrievalRate}
              onChange={handleChange}
              placeholder="Enter customer retrieval rate"
            />
            {errors.customerRetrievalRate && (
              <p className="error">{errors.customerRetrievalRate}</p>
            )}
          </div>

          {/* Maximum Ticket Capacity */}
          <div>
            <label htmlFor="maxTicketCapacity">Maximum Ticket Capacity:</label>
            <input
              type="number"
              id="maxTicketCapacity"
              name="maxTicketCapacity"
              value={config.maxTicketCapacity}
              onChange={handleChange}
              placeholder="Enter max ticket capacity"
            />
            {errors.maxTicketCapacity && (
              <p className="error">{errors.maxTicketCapacity}</p>
            )}
          </div>

          <button type="submit">Save Configuration</button>
        </form>
      </div>
    </div>
  );
};

export default ConfigurationPage;
