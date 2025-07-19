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
import DetalleProducto from '../components/Products/DetalleProducto';
import Register from '../pages/Register';
const App = () => {
  const [carrito, setCarrito] = useState([]);
  setupAxiosInterceptors();

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
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
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/producto/:id' element={<DetalleProducto />} />
            <Route exact path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
