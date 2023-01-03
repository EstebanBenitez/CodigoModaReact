import {Link} from "react-router-dom";

export default function DerechaGrupo () {

    return (
    
        <div className="derecha-grupo d-flex flex-row w-100">
        <textarea autoCapitalize="characters" placeholder="Descripción del grupo" className="descripción p-2 w-100%"></textarea>
        <div className="p-2">
        <Link to={"/"} className="btn btn-primary mt-3 px-3" type="button">Agregar</Link>
        </div>
        </div>
    )}