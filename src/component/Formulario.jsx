import { useState, useEffect } from "react";
import MensajeError from "./mensajeError";

function Formulario({pacientes,setPacientes, paciente, setPaciente}) {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [mensaje, setMensaje] = useState(false);
  let id = Date.now()

  useEffect(()=>{
      if(Object.keys(paciente).length > 0){
        setMascota(paciente.mascota);
        setPropietario(paciente.propietario);
        setCorreo(paciente.correo);
        setFecha(paciente.fecha);
        setSintomas(paciente.sintomas);
      }
  },[paciente])
  
  const handelSubmit = (e)=>{
    e.preventDefault();
    if([mascota, propietario, correo, fecha, sintomas].includes('')){
      setMensaje(true)
      return;
    }

    setMensaje(false)
    const ListaPacientes = {mascota, propietario, correo, fecha, sintomas}

    if(paciente.id){
      ListaPacientes.id = paciente.id
      const pacienteActulizado = pacientes.map(p => p.id === paciente.id ?ListaPacientes : p)
      setPacientes(pacienteActulizado);
      setPaciente({})
      
    }else{ 
      ListaPacientes.id = id;
      setPacientes([...pacientes, ListaPacientes]);
    }

    // limpiar formulario
    setMascota('');
    setPropietario('');
    setCorreo('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="formulario">
      <h2>Llena los datos necesarios</h2>
      <form className="form" onSubmit={handelSubmit}>
        {mensaje && <MensajeError/>}
        <div className="campo">
          <label htmlFor="mascota">Nombre Mascota</label>
          <input
           type="text" id="mascota" placeholder="Mascota"
           onChange={(e)=> setMascota(e.target.value)}
           value ={mascota}
           />
        </div>
        <div className="campo">
          <label htmlFor="propietario">Nombre Propietario</label>
          <input
          type="text" id="propietario"  placeholder="Propietario"
          onChange={(e)=> setPropietario(e.target.value)}
          value = {propietario}
          />
        </div>
        <div className="campo">
          <label htmlFor="correo">Correo</label>
          <input
          id="correo" type="email"  placeholder="correo@correo"
          onChange={(e)=> setCorreo(e.target.value)}
          value = {correo}
          />
        </div>
        <div className="campo">
          <label htmlFor="fecha">Fecha</label>
          <input
          id="fecha" type="date"
          onChange={(e)=> setFecha(e.target.value)}
          value = {fecha}
          />
        </div>
        <div className="campo">
          <label htmlFor="sintomas">Sintomas</label>
          <textarea
          id="sintomas" placeholder="Sintomas.."
          onChange={(e)=> setSintomas(e.target.value)}
          value = {sintomas}
          />
        </div>
        <input className="boton" type="submit" value="Listo" />
      </form>
    </div>
  )
}

export default Formulario