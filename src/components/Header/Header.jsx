import React, { useState } from 'react';
import './Header.css';
import shoppingCart from '../../icons/carrito-de-compras.png';
import { Link } from 'react-router-dom';
import sesion from '../../icons/contrasena.png';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  const { carrito } = useCart();
  const { user, logout } = useAuth();
  
  // Calcular el total de ítems en el carrito
  const totalItems = carrito.reduce((total, producto) => total + (producto.cantidad || 1), 0);

  const { theme, toggleTheme } = useTheme();

  return (
      <header className="header-container">
          <div className="nombreLogo">
            <Link to="/">Geraldine Site</Link>
          </div>
          
          <ul className='items'>
              <li><Link to="/">Home</Link></li>
              <li><a href="#">Galeria</a></li>
              <li><a href="#">Contactenos</a></li>
              <li className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
              </li>
              <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                <Link to="/login">
                  <img src={sesion} alt="inicio-sesion" style={{ width: '30px', cursor: 'pointer' }} />
                </Link>
              </li>
              <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                <Link to="/carrito" style={{ position: 'relative' }}>
                  <img src={shoppingCart} alt="shopping cart" style={{ width: '30px', cursor: 'pointer' }} />
                  {totalItems > 0 && (
                    <span style={{
                      position: 'absolute',
                      right: '-8px',
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
          {user && (
            <button onClick={logout} style={{ marginLeft: 16, padding: '6px 16px', background: '#ff5252', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
              Cerrar sesión
            </button>
          )}
        </ul>
      </header>
      
  );

};export default Header