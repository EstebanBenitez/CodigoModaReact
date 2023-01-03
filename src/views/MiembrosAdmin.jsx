import "../components/styles/styles.css";
import BotonesGrupo  from "../components/BotonesGrupo";
import  ListMembers  from "../components/ListMembers";
import DerechaGrupo from "../components/DerechaGrupo";
import { IzquierdaGrupo } from "../components/IzquierdaGrupo";

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

    <h3>Fechas Especiales</h3>
    <input placeholder="Agrega evento y fecha" type="text"></input> <button>Agregar</button>

</section>
<br /><br /><br />

</>
)
};

export default MiembrosAdmin;
