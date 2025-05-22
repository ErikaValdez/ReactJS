import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./routes/App" // 👈 este es el componente que arma toda tu aplicación

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
