import Producto from "./Producto";
import './Product.css'
import { useEffect, useState, useContext } from "react";
import { useCart } from '../../context/CartContext';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="contenedor">
        {productos.map((prod) => (
          <Producto 
            key={prod.id}
            id={prod.id}
            nombre={prod.title}
            price={prod.price}
            image={prod.image}
            onAgregar={() => agregarAlCarrito(prod)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;