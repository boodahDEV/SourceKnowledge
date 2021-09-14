import { Fragment, React } from "react";

export default function Saludo(props){
    console.log(props)
    return(
        <Fragment>
            <h4>Hola {props.persona}!</h4>
        </Fragment>
    );
}