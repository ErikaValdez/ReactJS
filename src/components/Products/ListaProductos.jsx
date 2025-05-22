import Producto from "./Producto";
import './Product.css'
import { useEffect, useState } from "react";

const ProductList = ( {carrito,setCarrito}) => 
{
    const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []); // solo al montar se ejecuta una vez, si quiero que se actualize poner dependencia ejemplo: },[filtro]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        console.log('Carrito:', [...carrito, producto]);
    };
    return(
        <div>
            <div className="contenedor">
             {productos.map((prod) => (
            <Producto 
                key={prod.id}
                nombre={prod.title}
                price={prod.price}
                image={prod.image}
                onAgregar={agregarAlCarrito}
            />
        ))} 
        </div>
        </div>
        
    );
}

export default ProductList;