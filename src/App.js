import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  const [citas, guardarCitas] = React.useState([]);

  const CrearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <React.Fragment>
      <h1>Administracion de Pacientes</h1>
      <div className="conatiner">
        <div className="row d-flex justify-content-center">
          <div className="col-5 mx-1">
            <Formulario crearCita={CrearCita} />
          </div>
          <div className="col-5 mx-1">
            <h1>Administracion de citas</h1>
            <div className="d-flex justify-content-center">
              {citas.map((cita) => (
                <Cita key={cita.id} cita={cita} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
