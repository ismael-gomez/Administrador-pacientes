import { useState, useEffect } from "react"
import Header from "./component/Header"
import Formulario from "./component/Formulario"
import ListaPacientes from "./component/ListaPacientes"
const App = ()=>{
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente ] =useState({});

  useEffect(() => {
    const optenerLS = () =>{
      const pacienteLS =  JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacienteLS)
    }

    optenerLS();
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    console.log(localStorage)
  },[pacientes])

  const eliminandoPaciente = (id) =>{
    const pacienteEliminado = pacientes.filter(p => p.id !== id);
    setPacientes(pacienteEliminado)
  }
  return(
    <div>
      <Header/>
      <div className="seccion">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListaPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminandoPaciente = {eliminandoPaciente}
        />
      </div>
    </div>
  )
}

export default App
