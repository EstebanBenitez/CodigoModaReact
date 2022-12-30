import "../components/styles/styles.css"
import {Link} from "react-router-dom"
import ListMembers from "../components/ListMembers2";

export const MiembrosAdmin = () => {

  return (
<>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link to={"/login"} className="btn btn-primary mt-3 px-5" type="button">Asignar Amigos</Link>
    <Link to={"/"} className="btn btn-primary mt-3 px-5" type="button">Regresar</Link>
  
</div>

<section id="pantalla-d-grupo">
  <div class="izquierda-grupo">
    <h4>Estas en el grupo: Los Carteleros</h4>
    <h4>Tu amigo secreto es: Sin definir</h4>
  </div>
  <div class="derecha-grupo">
  <textarea autoCapitalize="characters" disableb placeholder="Descripción del grupo"class="descripción"></textarea>
  </div>
</section>


<ListMembers/>
<main>
    

    <h4>Fechas Especiales</h4>
    <input type="date"></input> <button>Agregar</button>

</main>

</>
)
};

export default MiembrosAdmin;