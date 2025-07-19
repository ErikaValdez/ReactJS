  import { Boton } from '../boton';
import './Product.css'
import { Link } from 'react-router-dom';

const Producto = ({ id, image, nombre, price, onAgregar }) => 
{
    return (
            <div className="contenedor-producto">
                <Link to={`/producto/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img className="foto" src={image} alt={nombre} style={{ cursor: 'pointer' }} />
                    <h3 className="title">{nombre}</h3>
                </Link>
                <p className="title-price">${price}</p>
                <Boton botonTexto='AGREGAR AL CARRITO'
                  onClick={() => onAgregar({ image, nombre, price })}
                  />
            </div>
        
    );
}
export default Producto;