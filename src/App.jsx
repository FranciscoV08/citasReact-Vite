import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"


function App() {
  
  //SI NO HAY NADA EN LOCAL DEJALE []
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   //Funcion obtener lo que hay en localstorage 
  //   const obtenerLS = () => {
  //     const pacientesLS = ;
  //     console.log(pacientesLS)
  //     //Lo que sea que hay en localStorage le mandamos a paciente
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // }, []);
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes]);
  

  const eliminarPaciente = (id) =>{  
    const pacientesActualizado = pacientes.filter( pac => pac.id !== id)

    setPacientes(pacientesActualizado)
  }

  return (

    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex grid">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          
        />
        <ListadoPaciente 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
