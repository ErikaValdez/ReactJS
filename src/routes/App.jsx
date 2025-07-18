import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Carrito from '../components/Products/Carrito'
import { useState, useEffect } from 'react';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import RutaProtegida from './RutaProtegida';
import { Link } from 'react-router-dom';
import { AuthProvider, setupAxiosInterceptors } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  // Configurar el interceptor de axios
  setupAxiosInterceptors();

  // Asegurarse de que el tema se cargue correctamente en el cliente
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // o un loader
  }

  return(
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main carrito={carrito} setCarrito={setCarrito} />} />
            <Route exact path='/login' element={<Login />} /> 
            <Route exact path='/carrito' element={
              <RutaProtegida>
                <Carrito listaProductos={carrito} />
              </RutaProtegida>} 
            />
            <Route exact path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
