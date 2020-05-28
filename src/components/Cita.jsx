import React from 'react';

const Cita = ({cita, EliminarCita}) => {

  const { mascota, dueño, fecha, hora, sintomas, id } = cita;

  return (
    <div className="card mb-2 mr-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{mascota}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{dueño}</h6>
        <h6 className="card-subtitle mb-2 text-muted"><span className="mr-2" >Fecha:{fecha}</span> <span>Hora:{hora}</span> </h6>
        <p className="card-text">
          {sintomas}
        </p>
        <button className="btn btn-danger" onClick={()=>EliminarCita(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Cita;
