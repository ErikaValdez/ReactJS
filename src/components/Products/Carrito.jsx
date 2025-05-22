import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import { useState } from "react";

/* Manejo del carrito con useState

Crea un estado para el carrito (const [cart, setCart] = useState([])).
Este estado debe actualizarse al agregar o quitar productos. */
const Carrito = ({listaProductos}) => 
{
   
    //const total = listaProductos.reduce((acum, prod) => acum + prod.price, 0);

    return (
        <div className='p-4 bg-light text-dark'>
          <h2>🛒 Carrito</h2>
    
          {listaProductos.length === 0 ? (
            <TextExample listirijilla={listaProductos}></TextExample> 
          ) : (
            <>
               <Table striped bordered hover size="md">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listaProductos.map((prod, index) => (
                        <tr key={index}>
                        <td>{prod.nombre}</td>
                        <td>${prod.price}</td>
                        </tr>
                    ))}
                    </tbody>
              </Table>
           <TextExample listirijilla={listaProductos}></TextExample> 
            </>
          )}
         </div>
    );
};
export default Carrito;

export const TextExample = ({listirijilla}) => {
    const total = listirijilla.reduce((acum, prod) => acum + prod.price, 0);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Detalle de Compra</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Productos</Card.Subtitle>
        <Card.Text>
        {listirijilla.length === 0 ? (
                <p>tu carrito esta vacio</p>
            ):( <ul>
                {listirijilla.map((prod,index)=>(
                    <li key={index}>{prod.nombre} - ${prod.price}</li>
                ))}
            </ul>
            )}
            <h3>Total:${total}</h3>

        </Card.Text>
        <Button variant="info">Pagar Compra</Button>      </Card.Body>
    </Card>
  );
}; 
