import React, { createContext, useState, useEffect, useContext } from 'react';
import { login, logout, getCurrentUser, setupAxiosInterceptors } from '../auth/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
    setLoading(false);
  }, []);

  const loginHandler = async (credentials) => {
    try {
      const userData = await login(credentials);
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logoutHandler = () => {
    logout();
    setUser(null);
  };

  const authContextValue = {
    user,
    loading,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export { setupAxiosInterceptors };
