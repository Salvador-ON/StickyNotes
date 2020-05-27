import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Formulario = ({ crearCita }) => {
  const [cita, useCita] = React.useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, useError] = React.useState(false);

  const HandleCita = (e) => {
    useCita({
      ...cita,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const { mascota, dueño, fecha, hora, sintomas } = cita;

  const SetError = (value) => {
    useError(value);
  };

  const ResetCita = () => {
    useCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  const submitCita = (e) => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      SetError(true);
      return;
    }

    SetError(false);
    crearCita(cita);
    ResetCita();

    
  };

  return (
    <React.Fragment>
      <h1>Crear Cita</h1>

      {error ? (
        <div className="alert alert-danger" role="alert">
          Todos los campos son obligatorios
        </div>
      ) : null}

      <form onSubmit={submitCita}>
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
            value={fecha}
          ></input>
        </div>

        <div className="form-group">
          <label className="mx-2">Hora Visita</label>
          <input
            type="time"
            name="hora"
            className="form-control"
            onChange={HandleCita}
            value={hora}
          ></input>
        </div>

        <div className="form-group">
          <label className="mx-2">Descripcion</label>
          <textarea
            name="sintomas"
            className="form-control"
            onChange={HandleCita}
            value={sintomas}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Confirm identity
        </button>
      </form>
    </React.Fragment>
  );
};

export default Formulario;
