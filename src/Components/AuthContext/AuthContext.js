// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(()=>{
    return localStorage.getItem('isLoggedIn') === 'true';
  }
   
  );
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook for convenience
export function useAuth() {
  return useContext(AuthContext);
}
