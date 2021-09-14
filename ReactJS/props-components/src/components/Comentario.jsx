import { Fragment, React } from "react";

export default function Comentario({ sujeto }) {

    return (
        <Fragment>
            <br />
            <h3>Comentarios</h3>
            <hr />
            <div className="media">
                <img src={sujeto.urlImage} className="mr-3" alt="" />
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    <p>{sujeto.texto}</p>
                </div>
            </div>
        </Fragment>
    );
}