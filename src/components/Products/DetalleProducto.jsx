import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Si los productos vienen de una API global, podrías usar contexto o volver a pedir el producto por ID
// Aquí se asume que puedes obtener el producto por ID desde la API (o desde un array en props/context)

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://687ad5f5abb83744b7edf814.mockapi.io/products/producto/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Producto no encontrado');
        return res.json();
      })
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!producto) return <div>No se encontró el producto.</div>;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#222', color: '#fff', padding: 24, borderRadius: 16 }}>
      <h2 style={{ marginBottom: 16 }}>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: '100%', maxHeight: 400, objectFit: 'contain', background: '#fff', borderRadius: 8 }} />
      <p style={{ marginTop: 16 }}>{producto.description}</p>
      <p><b>Precio:</b> ${producto.price}</p>
    </div>
  );
};

export default DetalleProducto;
