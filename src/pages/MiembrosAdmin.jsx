
import BotonesGrupo from "../components/BotonesGrupo";
import DerechaGrupo from "../components/DerechaGrupo";
import {IzquierdaGrupo} from "../components/IzquierdaGrupo";
import ListMembers from "../components/ListMembers";
import "../components/styles/styles.css";
import SpecialDates from "../components/SpecialDatesAdmin";

export const MiembrosAdmin = () => {
    return (
        <>
            <BotonesGrupo/>
            <section id="pantalla-d-grupo">
                <IzquierdaGrupo/>
                <DerechaGrupo/>
            </section>
            <section>
            <ListMembers/>
            </section>
            <section>
            <SpecialDates/>
            </section>
        </>
    );
};

export default MiembrosAdmin;
