import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Carrito from '../components/Products/Carrito'
import { useState } from 'react';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';


const App = () => {
  const [carrito, setCarrito] = useState([]);

  /* const productos = [
    { nombre: 'Monitor', price: 12000 },
    { nombre: 'CPU', price: 25000 },
  ]; */

  return(
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main carrito={carrito} setCarrito={setCarrito}/>} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/carrito' element={<Carrito listaProductos={carrito} />} />
            <Route exact path='*' element={<NotFound/>} />

          </Routes>
      </BrowserRouter>
  )
}

export default App
