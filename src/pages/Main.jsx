import './index.css'
import Header1 from '../components/Header/Header'
import FooterWeb from '../components/Footer/Footer'
import ProductList from '../components/Products/ListaProductos'

const Main = ({ carrito, setCarrito }) => {
   
    return (
      <div>
          <Header1></Header1>
          <ProductList carrito={carrito} setCarrito={setCarrito} />
          <FooterWeb></FooterWeb>
      </div>
      
    )
  };
  
  export default Main;
  