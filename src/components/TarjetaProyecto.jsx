import { Boton } from "./boton";


export default function TarjetaProyecto ({titulo, descripcion,botonTexto}) {
return (
    <div>
        <h1> {titulo}</h1>
        <p> {descripcion}</p>
        <Boton botonTexto={botonTexto}
        tituloProyecto={titulo}/>
    </div>
);
}