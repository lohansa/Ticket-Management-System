import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthContext Provider component
const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  const login = (role) => {
    setUserRole(role);
    // Optionally save to localStorage or sessionStorage
    localStorage.setItem("userRole", role);
  };

  const logout = () => {
    setUserRole(null);
    localStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
