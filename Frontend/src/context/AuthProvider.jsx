import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);  // Default to null, not undefined
  const [loading, setLoading] = useState(true);    // ✅ loading state

  useEffect(() => {
    const storedUser = localStorage.getItem('Users');
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    } else {
      setAuthUser(null);
    }
    setLoading(false);  // ✅ Finish loading
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
