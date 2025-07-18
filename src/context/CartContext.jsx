import { createContext, useContext, useReducer } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Datos de productos iniciales (puedes modificarlos según necesites)
const PRODUCTOS_INICIALES = [
  { id: 1, title: 'Producto 1', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Producto 2', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Producto 3', price: 39.99, image: 'https://via.placeholder.com/150' },
];

// Estado inicial
const initialState = {
  productos: PRODUCTOS_INICIALES,
  carrito: [], // Ahora cada item tendrá { id, nombre, price, cantidad }
};

// Reducer para manejar las acciones del carrito
function cartReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_AL_CARRITO': {
      const productoExistente = state.carrito.find(
        (item) => item.id === action.producto.id
      );

      if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.id === action.producto.id
              ? { ...item, cantidad: (item.cantidad || 1) + 1 }
              : item
          ),
        };
      }

      // Si el producto no está en el carrito, agregarlo con cantidad 1
      return {
        ...state,
        carrito: [...state.carrito, { ...action.producto, cantidad: 1 }],
      };
    }
    case 'ELIMINAR_DEL_CARRITO':
      return {
        ...state,
        carrito: state.carrito.filter((_, index) => index !== action.index),
      };
    case 'VACIAR_CARRITO':
      return {
        ...state,
        carrito: [],
      };
    default:
      return state;
  }
}

// Proveedor del contexto
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_AL_CARRITO', producto });
  };

  const eliminarDelCarrito = (index) => {
    dispatch({ type: 'ELIMINAR_DEL_CARRITO', index });
  };

  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  return (
    <CartContext.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
}