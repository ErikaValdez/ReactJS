import React from 'react';
import './Tarjeta.css'; // si deseas agregar estilos aparte
import { Boton } from './boton';

export const Tarjeta = ({ titulo, descripcion, botonTexto }) => {
    return (
        <div className="tarjeta">
            <h2 className="til">{titulo}</h2>
            <p className="tilo">{descripcion}</p>
            <Boton botonTexto={botonTexto}
            tituloProyecto={titulo}/>
        </div>
    );
};
