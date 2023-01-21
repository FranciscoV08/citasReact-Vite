import { useEffect, useState } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    //Comprueba si esta vacio el obj
    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])



  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    console.log(random + fecha);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }

    setError(false)

    //OBJ para paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      //SI ACTUALIZO 
      //Cuando vuelvo a construit el OBJPaciente le vuelvo a insertar el id 
      objPaciente.id = paciente.id;
      //Editando el registro)

      const pacienteActualizado = pacientes.map( pacState => pacState.id === paciente.id ? objPaciente : pacState)
      setPacientes(pacienteActualizado);
      //REINICIAMOS EL STATE TEMPORAL
      setPaciente({})
    } else {
      //Nuevo registro 
      //Le agregamos
      objPaciente.id = generarId()

      //Mediante SpreedOperator agregamos un nuevo obj en el arreglo 
      setPacientes([...pacientes, objPaciente]);
    }


    //Reiniciar el formulario
    setNombre('')
    setEmail('')
    setPropietario('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente </h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* VALIDACION */}
        {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota">Nombre Mascota</label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario">
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Nombre Propietario"
            name=""
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email">
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="email"
            placeholder="Email del propietario"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta">
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            type="date"
            name=""
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Describe los sintomas"
            name=""
            cols="30"
            rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <input
          className=" hover:bg-indigo-700 cursor-pointer transition-all   bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md "
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente '}
          type="submit" />
      </form>
    </div>
  )
}
