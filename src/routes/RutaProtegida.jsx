import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RutaProtegida({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // O un componente de carga
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RutaProtegida;
