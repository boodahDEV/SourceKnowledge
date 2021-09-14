import React, {Fragment, useState} from 'react'

const Jsx = ()=>{

    const saludo = "Hola!"
    const temperatura = 21;

    return (
        <Fragment>
            <h4>{
                temperatura > 20 ? 'Calor':'Frio'
                }</h4>
        </Fragment>
    );
}

export default Jsx;