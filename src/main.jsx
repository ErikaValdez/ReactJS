import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./routes/App" // 👈 este es el componente que arma toda tu aplicación
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
