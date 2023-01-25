import BotonesGrupo from "../components/BotonesGrupo";
import DerechaGrupo from "../components/DerechaGrupo";
import IzquierdaGrupo from "../components/IzquierdaGrupo";
import ListMembers from "../components/ListMembers";
import SpecialDates from "../components/SpecialDatesAdmin";
import "../components/styles/styles.css";
import {useAuth} from "../context/AuthContext";

export const Miembros = () => {
    const {user} = useAuth();
    return (
        <>
            <BotonesGrupo/>
            <section id="pantalla-d-grupo">
                <IzquierdaGrupo/>
                {user.isAdmin && <DerechaGrupo/>}
            </section>
            <section>
                <ListMembers/>
            </section>
            <section>
                {user.isAdmin && <SpecialDates/>}
            </section>
        </>
    );
};

export default Miembros;
