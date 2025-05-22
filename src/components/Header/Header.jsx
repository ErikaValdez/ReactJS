import React, { useState } from 'react'
import './Header.css'
import shoppingCart from '../../icons/carrito-de-compras.png' 
import { Link } from 'react-router-dom';
import sesion from '../../icons/contrasena.png'
 const Header = ()=> {
  //const [toggle, setToggle] = useState(false)
   const [toggleOrders, setToggleOrders] = useState(false) // se rompe

  //  const { state } = useContext(AppContext) // se rompe */

  return (
      <header className="header-container">
          <div className="nombreLogo">
            <a href="#">Geraldine Site</a>
          </div>
          
          <ul className='items'>
              <li><a href={"#"}>Home</a></li>
              <li><a href={"#"}>Galeria</a></li>
              <li><a href={"#"}>Contactenos</a></li>
              <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                <Link to="/login">
                  <img src={sesion} alt="inicio-sesion" style={{ width: '30px', cursor: 'pointer' }} />
                </Link>
              </li>
              <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                <Link to="/carrito">
                  <img src={shoppingCart} alt="shopping cart" style={{ width: '30px', cursor: 'pointer' }} />
                </Link>
              </li>
          </ul>

      </header>
      
  );

};export default Header