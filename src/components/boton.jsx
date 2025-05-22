export const Boton = ({ botonTexto, onClick }) => {
   
    return (
      <button onClick={onClick} className="boton-estilizado"> {botonTexto} </button>
    );
  };
  