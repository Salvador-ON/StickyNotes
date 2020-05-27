import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Formulario = () => {

  const [cita, useCita] = React.useState({
    mascota:'',
    dueño: '',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const HandleCita = (e) => {
    useCita({
      ...cita,
      [e.target.name]:e.target.value
    })
  }

  const {mascota, dueño, fecha, hora, sintomas} = cita

  const submitCita = () => {
    alert('enviar')
  }


  return (
    <React.Fragment>
      <h1>Crear Cita</h1>
      <form
        onSubmit={submitCita}
      >
        <div className="form-group">
          <label className="mx-2">Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            placeholder="Nombre de la Mascota"
            className="form-control"
            onChange={HandleCita}
            value={mascota}
          ></input>
        </div>

        <div className="form-group">
          <label className="mx-2">Nombre Dueño</label>
          <input
            type="text"
            name="dueño"
            placeholder="Nombre del Dueño"
            className="form-control"
            onChange={HandleCita}
            value={dueño}
          ></input>
        </div>

        <div className="form-group">
          <label className="mx-2">Fecha Visita</label>
          <input 
          type="date" 
          name="fecha" 
          className="form-control"
          onChange={HandleCita}
          value={fecha}>
          
          </input>
        </div>

        <div className="form-group">
          <label className="mx-2">Hora Visita</label>
          <input 
          type="time" 
          name="hora" 
          className="form-control"
          onChange={HandleCita}
          value={hora}></input>
        </div>

        <div className="form-group">
          <label className="mx-2">Descripcion</label>
          <textarea 
          name="sintomas" 
          className="form-control"
          onChange={HandleCita}
          value={sintomas}></textarea>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Confirm identity
        </button>
      </form>
    </React.Fragment>
  );
};

export default Formulario;
