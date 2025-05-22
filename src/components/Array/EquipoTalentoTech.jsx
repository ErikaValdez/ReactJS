import './EquipoTalentoTech.css'

export default function TarjetaEquipoLab({equipo}){

    return (
        <div className="equipoTalentoTech">
            {equipo.map((miembro , index)=> (
                <div key={index} className="tarjeta">
                    <img src={miembro.imagen} alt={miembro.nombre} className="foto"></img>
                    <h3 className='title'>{miembro.nombre}</h3>
                    <p className='description'>{miembro.rol}</p>
                </div>            
            ))}
        </div>
    )
}