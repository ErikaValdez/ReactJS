import './GaleriaIntereses.css';
import { useState } from 'react';

export default function GaleriaIntereses ({intereses}) {
    const [seleccionados, setseleccionados] = useState([]);
    const ManejarClick = (tema) => {
       setseleccionados((prevSeleccionados) =>
        prevSeleccionados.includes(tema)?
        prevSeleccionados.filter((t)=> t !== tema):[...prevSeleccionados,tema])
    }

    return (
        <div className="galeria-container">
            {intereses.map((tema) => (
                <button key={tema} onClick={() => ManejarClick (tema)} className={`boton-interes ${
                    seleccionados.includes(tema) ? 'seleccionado' : ''
                  }`}>{tema}</button>
            ))}
        </div>
    );

}