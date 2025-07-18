import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCart();
  const navigate = useNavigate();
  
  const handleEliminar = (index) => {
    if (window.confirm('¿Estás seguro de eliminar este producto del carrito?')) {
      eliminarDelCarrito(index);
    }
  };

  const handleFinalizarCompra = () => {
    alert('¡Gracias por tu compra!');
    vaciarCarrito();
    navigate('/');
  };

  return (
    <div className='p-4 bg-light text-dark'>
      <h2>🛒 Carrito de Compras</h2>
      
      {(!carrito || carrito.length === 0) ? (
        <div className="p-5 text-center">
          <h3>Tu carrito está vacío</h3>
          <Button href="/" variant="primary" className="mt-3">
            Seguir comprando
          </Button>
        </div>
      ) : (
        <>
          <Table striped bordered hover size="md" className="mb-4">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto, index) => (
                <tr key={`${producto.id}-${index}`}>
                  <td>{producto.nombre || producto.title}</td>
                  <td>${producto.price.toFixed(2)}</td>
                  <td>{producto.cantidad || 1}</td>
                  <td>${((producto.price) * (producto.cantidad || 1)).toFixed(2)}</td>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleEliminar(index)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <div className="text-end">
            <h4>
              Total: $
              {carrito
                .reduce((total, producto) => total + (producto.price * (producto.cantidad || 1)), 0)
                .toFixed(2)}
            </h4>
            <div className="mt-3">
              <Button 
                variant="success" 
                className="me-2"
                onClick={handleFinalizarCompra}
              >
                Finalizar Compra
              </Button>
              <Button 
                variant="outline-danger"
                onClick={() => {
                  if (window.confirm('¿Estás seguro de vaciar el carrito?')) {
                    vaciarCarrito();
                  }
                }}
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
