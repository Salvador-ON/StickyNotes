import React from "react";
import PropTypes from "prop-types";


const Cita = ({ cita, EliminarCita }) => {
  const { title, priority, fecha, description, id } = cita;

   
   
  const priorityColor = () => {
   let colorClass =""

    switch (priority) {
      case "High":
        colorClass = "card mb-2 mr-2 text-white w-100 bg-danger"
        break;
      case "Medium":
        colorClass = "card mb-2 mr-2 text-white w-100 bg-warning"
        break;
      case "Low":
        colorClass = "card mb-2 mr-2 text-white w-100 bg-success"
        break;
      default:
        colorClass = "card mb-2 mr-2 text-white w-100 bg-secondary"
        break;
    }

    return colorClass;
  };

  const priorityColorClass = priorityColor();

  return (
    <div className={priorityColorClass}>
      <div className="card-header text-capitalize font-weight-bold">
        {title}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-white">
          <span className="mr-2 text-white font-weight-bold"><span className="mr-2">Date:</span>{fecha}</span>
        </h6>
        <p className="card-text text-white">{description}</p>
        <button
          className="btn btn-outline-light w-100"
          onClick={() => EliminarCita(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  EliminarCita: PropTypes.func.isRequired,
};

export default Cita;
