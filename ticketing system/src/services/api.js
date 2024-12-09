const API_URL = "https://your-backend-api.com/api"; // Replace with your actual backend URL

// Utility function to handle fetch requests
const apiRequest = async (url, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${url}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// API Functions

export const loginApi = async (email, password) => {
  return apiRequest("/login", "POST", { email, password });
};

export const registerApi = async (username, email, password, isVendor) => {
  return apiRequest("/register", "POST", { username, email, password, isVendor });
};

export const addTicketApi = async (eventId, price) => {
  return apiRequest("/tickets", "POST", { eventId, price });
};

export const addEventApi = async (name, date) => {
  return apiRequest("/events", "POST", { name, date });
};

export const buyTicketApi = async (ticketId) => {
  return apiRequest(`/tickets/${ticketId}/buy`, "POST");
};

export const getEventDetailsApi = async (eventId) => {
  return apiRequest(`/events/${eventId}`, "GET");
};

// Example: Call API to get event details
// const eventDetails = await getEventDetailsApi(123);
