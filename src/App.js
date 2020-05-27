import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Formulario from "./components/Formulario"

function App() {
  return (
    <React.Fragment>
      <h1>Administracion de Pacientes</h1>
      <div className="conatiner">
        <div className="row d-flex justify-content-center">
            <div className="col-5 mx-1">
            <Formulario/>
            </div>
            <div className="col-5 mx-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
