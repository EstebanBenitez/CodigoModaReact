import "../components/styles/styles.css";
import BotonesGrupo  from "../components/BotonesGrupo";
import  ListMembers  from "../components/ListMembers";
import DerechaGrupo from "../components/DerechaGrupo";
import { IzquierdaGrupo } from "../components/IzquierdaGrupo";
import { Link } from "react-router-dom";

export const MiembrosAdmin = () => {

  return (
<>
        <BotonesGrupo />

<section id="pantalla-d-grupo">
        <IzquierdaGrupo/>
    <div>
        <DerechaGrupo/>
    </div>
</section>

<br /><br /><br />
        <ListMembers/>
<br /><br /><br />
<section>
    <h3 className="derecha-grupo d-flex flex-row w-100">Fechas Especiales</h3>
    <br/>
    <div className="derecha-grupo d-flex flex-row w-100">
            <textarea autoCapitalize="characters" placeholder="Eventos especiales" className="descripción p-2 w-100%"></textarea>
        <div className="p-2">
            <Link to={"/"} className="btn btn-primary mt-3 px-3" type="button">Agregar</Link>
        </div>
    </div>
    
</section>
<br /><br /><br />

</>
)
};

export default MiembrosAdmin;
