// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn ,username,setUsername,password,setPassword,confirmPassword,setConfirmPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook for convenience
export function useAuth() {
  return useContext(AuthContext);
}
