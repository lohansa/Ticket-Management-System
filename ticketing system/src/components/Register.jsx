import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const data = { email, password, isVendor };

    try {
      const response = await axios.post("/register", data); // Assuming "/register" endpoint exists
      if (response.data.success) {
        navigate(isVendor ? "/vendor-dashboard" : "/customer-dashboard");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={isVendor}
            onChange={(e) => setIsVendor(e.target.checked)}
          />
          Confirm that you are a vendor
        </label>
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
