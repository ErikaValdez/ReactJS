import Producto from "./Producto";
import AgregarProducto from "./AgregarProducto";
import './Product.css'
import { useEffect, useState } from "react";
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCart();

  const fetchProductos = () => {
    fetch("https://687ad5f5abb83744b7edf814.mockapi.io/products/producto")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const { user } = useAuth();

  return (
    <div>
      {user?.role === "admin" && (
        <AgregarProducto onProductoAgregado={fetchProductos} />
      )}
      <div className="contenedor">
        {productos.map((prod) => (
          <Producto 
            key={prod.id}
            id={prod.id}
            nombre={prod.title}
            price={prod.price}
            image={prod.image}
            onAgregar={() => agregarAlCarrito(prod)}
            onEliminar={async (id) => {
              if(window.confirm('¿Seguro que deseas eliminar este producto?')) {
                await fetch(`https://687ad5f5abb83744b7edf814.mockapi.io/products/producto/${id}`, {
                  method: 'DELETE'
                });
                fetchProductos();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;