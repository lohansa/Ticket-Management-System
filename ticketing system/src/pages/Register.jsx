import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isVendor: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulated API call
    console.log("User Registered", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={formData.isVendor}
          onChange={(e) => setFormData({ ...formData, isVendor: e.target.checked })}
        />
        Register as Vendor
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
