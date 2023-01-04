import {Link} from "react-router-dom";


export default function DerechaGrupo () {

    return (
      
      
       <div class="card border-primary  d-grid gap-2 d-md-flex justify-content-md-end">
       <div class="card-body text-primary">
       <p class="card-text">Descripcion Del grupo </p>
       <div className="p-2">
       <Link to={"/"} className="btn btn-primary mt-3 px-3" type="button">Agregar</Link>
       </div>
       </div>
       </div>

        
    )}


    