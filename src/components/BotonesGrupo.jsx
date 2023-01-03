import {Link} from "react-router-dom";

export default function BotonesGrupo () {

return (

<div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to={"/login"} className="btn btn-primary mt-3 px-5" type="button">Asignar Amigos</Link>
    <Link to={"/"} className="btn btn-primary mt-3 px-5" type="button">Regresar</Link>
  
</div>
)}