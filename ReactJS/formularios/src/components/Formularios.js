import React, {useState, Fragment} from 'react'


function Formularios() {
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const send = (event)=>{
        event.preventDefault(); //evita el procesamiento automatico de los forms
        
    }

    const handleInputChange = (event)=>{
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    return (
        <Fragment>
            <form className="row" onSubmit={send}>
                <div className="col-md-3">
                    <input className="form-control" placeholder="Ingrese el nombre" name="nombre" onChange={handleInputChange}  />
                </div>
                <div className="col-md-3">
                    <input className="form-control" placeholder="Ingrese el apellido" name="apellido" onChange={handleInputChange}  />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-info">Enviar</button>
                </div>
            </form>
            <br />
            <h3>{datos.nombre} - {datos.apellido} </h3>
        </Fragment>
    );
  }
  
  export default Formularios;
  