import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  const [cita, useCita] = React.useState({
    title: "",
    priority: "",
    fecha: "",
    description: "",
  });

  const [error, useError] = React.useState(false);

  const HandleCita = (e) => {
    useCita({
      ...cita,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const { title, priority, fecha, description } = cita;

  const SetError = (value) => {
    useError(value);
  };

  const ResetCita = () => {
    useCita({
      title: "",
      priority: "",
      fecha: "",
      description: "",
    });
  };

  const submitCita = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      priority.trim() === "" ||
      fecha.trim() === "" ||
      description.trim() === ""
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
      <h1>Create Note</h1>

      {error ? (
        <div className="alert alert-danger" role="alert">
          All fields are mandatory
        </div>
      ) : null}

      <form onSubmit={submitCita}>
        <div className="form-group">
          <label className="mx-2 text-white font-weight-bold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            onChange={HandleCita}
            value={title}
          ></input>
        </div>

        {/* <div className="form-group">
          <label className="mx-2">Priority</label>
          <input
            type="text"
            name="priority"
            placeholder="Priority"
            className="form-control"
            onChange={HandleCita}
            value={priority}
          ></input>
        </div> */}

        <div className="form-group">
          <label className="mx-2 text-white font-weight-bold">Priority</label>
          <select
            name="priority"
            className="form-control"
            onChange={HandleCita}
            value={priority}
          >
            <option value="" disabled selected>Select your option</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
            <option>N/A</option>
          </select>
        </div>

        <div className="form-group">
          <label className="mx-2 text-white font-weight-bold">Date</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            onChange={HandleCita}
            value={fecha}
          ></input>
        </div>

        <div className="form-group">
          <label className="mx-2 text-white font-weight-bold">Description</label>
          <textarea
            name="description"
            className="form-control"
            onChange={HandleCita}
            value={description}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success mb-2 w-100">
          Add Note
        </button>
      </form>
    </React.Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
