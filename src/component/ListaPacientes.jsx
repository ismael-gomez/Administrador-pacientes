import Pacientes from "./Pacientes"

function ListaPacientes({pacientes, setPaciente, eliminandoPaciente}) {
  return (
    <div className="lista-paciente">
      <h2>Lista Pacientes</h2>
      <div  className="caja">
        {
          pacientes.map(paciente =>
          <Pacientes 
          paciente={paciente}
          key = {paciente.id}
          setPaciente={setPaciente}
          eliminandoPaciente={eliminandoPaciente} 
          />)
        }
      </div>
    </div>
  )
}

export default ListaPacientes