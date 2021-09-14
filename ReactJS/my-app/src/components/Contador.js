import React , {useState, Fragment} from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(0); //hooks
    //Al crear a la constante, el primer elemente es el nombre del 
    // estado y el segundo, el nombre que lo modifica

    //el fragment igualmente puede ser un div, solo se puede mandar un
    //un elemente por el return!

    const aumentar = () => {
        setNumero (numero + 1)
    }
    return (
        <Fragment> 
            <h3>Mi primer componente! {numero} </h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;