import React, { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'


function Formularios() {
    const [arrayNombres, setArrayNombres] = useState([])
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data, e) => {
        console.log(data.titulo)
        e.target.reset()
        setArrayNombres([
            ...arrayNombres,
            data.titulo
        ])
    }

    return (
        <div>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3">
                    <input className="form-control" autoComplete="off" name="titulo" {...register("titulo", { required: true })}
                    />
                </div>
                <span className="text-danger text-small d-block mb-2 mt-2">
                    {errors.titulo && "Titulo obligatorio"}
                </span>
                <div className="col-md-3">
                    <button className="btn btn-info">Enviar</button>
                </div>
            </form>
            <br />
            <ul>
                {
                    arrayNombres.map( (item,index)=>(
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Formularios;
