  import { Boton } from '../boton';
import './Product.css'

  const Producto = ({image,nombre,price,onAgregar }) => //  image, nombre, price, onAgregar --> son props , valores que pasan al componente desde su componente padre.
  
{
    return (
            <div className="contenedor-producto">
                <img className="foto" src={image} alt="" />
                <h3 className="title">{nombre}</h3>
                <p className="title-price">${price}</p>
                <Boton botonTexto='AGREGAR AL CARRITO'
                  onClick={() => onAgregar({ image, nombre, price })}
                  />
            </div>
        
    );
}
export default Producto;