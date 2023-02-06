const Pacientes = ({paciente, setPaciente, eliminandoPaciente})=>{
    const {mascota, propietario, correo, fecha, sintomas, id} = paciente;
    return(
        <div className="pacientes">
            <div className="paciente">
                <p className="paciente-p">Nombre Mascota: <br /> <span className="respuesta">{mascota}</span></p>
                <p className="paciente-p">Nombre Propietario: <br /> <span className="respuesta">{propietario}</span></p>
                <p className="paciente-p">Correo: <br /> <span className="respuesta">{correo}</span></p>
                <p className="paciente-p">Alta: <br /> <span className="respuesta">{fecha}</span></p>
                <p className="paciente-p">Sintomas <br /> <span className="respuesta">{sintomas}</span></p>
                
                <div className="botones">
                    <button
                    className="editar"
                    onClick={() =>  setPaciente(paciente)}
                    >Editar</button>
                    <button
                    className="eliminar"
                    onClick={() => {eliminandoPaciente(id)}}
                    >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Pacientes