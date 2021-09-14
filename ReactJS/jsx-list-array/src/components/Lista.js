import React, {Fragment, useState} from 'react'

const Lista = ()=>{
    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5])
    const [numero, setNumero] = useState(1); //hooks

    const agregar = () =>{
        setNumero(numero + 1)
        setArrayNumero( [
            ...arrayNumero,
            numero
        ] )
    }

    return (
        <Fragment>
            <h2>Lista: </h2>
            <button onClick={agregar}>Agregar</button>
            {
                arrayNumero.map((item, index)=> //map recorre
                    <p key={index}> {item} </p>
                )
            }
        </Fragment>
    );
}

export default Lista;