import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";


function App() {
  
  let citasIniciales = ( localStorage.getItem('citas')? JSON.parse(localStorage.getItem('citas')): [] )
  
 

  const [citas, guardarCitas] = React.useState(citasIniciales);

  const CrearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };
  
  const EliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  React.useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }
    else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas, citasIniciales]);

  return (
    <React.Fragment>
      <h1>Sticky Notes</h1>
      <div className="conatiner-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-5 mx-1">
            <Formulario crearCita={CrearCita} />
          </div>
          <div className="col-5 mx-1">
            <h1>Notes</h1>
            <div className="">
              {citas.map((cita) => (
                <Cita key={cita.id} cita={cita} EliminarCita={EliminarCita} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
