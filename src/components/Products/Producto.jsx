  import { Boton } from '../boton';
import './Product.css'
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
const Producto = ({ id, image, nombre, price, onAgregar, onEliminar }) => {
    const { user } = useAuth();
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
            {user?.role === 'admin' && (
                <button
                    style={{ marginTop: 8, background: '#e53935', color: '#fff', border: 'none', borderRadius: 5, padding: '6px 12px', cursor: 'pointer' }}
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </button>
            )}
        </div>
    );
}
export default Producto;