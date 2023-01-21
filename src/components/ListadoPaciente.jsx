import { Paciente } from "./Paciente"

export const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {

  

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>

          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y citas
            </span>
          </p>

          {
            pacientes.map((paciente) =>
            (<Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />))
          }
        </>

      ) : (
        <>
           <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Tus pacientes se mostraran  {''}
            <span className="text-indigo-600 font-bold">
              en este lugar
            </span>
          </p>

        </>
      )}

    </div>
  )
}
