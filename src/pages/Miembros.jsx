import {useNavigate} from "react-router-dom";
import DerechaGrupo from "../components/DerechaGrupo";
import IzquierdaGrupo from "../components/IzquierdaGrupo";
import ListMembers from "../components/ListMembers";
import SpecialDates from "../components/SpecialDatesAdmin";
import "../components/styles/styles.css";
import {useAuth} from "../context/AuthContext";


export const Miembros = () => {
    const {user, refreshState} = useAuth();
    const navigate = useNavigate();
    const sorteo = () => {
        const personas = JSON.parse(localStorage.getItem("personas"));
        const noParticipantes = personas.filter(p => p.group !== user.group);
        const participantes = personas.filter(p => p.group === user.group);
        const amigos = structuredClone(participantes).sort(() => 0.5 - Math.random());
        for (let i = 0; i < participantes.length; i++) {
            participantes[i].amigo = amigos[i];
        }
        localStorage.setItem("personas", JSON.stringify([...noParticipantes, ...participantes]));
        refreshState();
    };
    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {user.isAdmin && <button onClick={sorteo} className="btn btn-primary mt-3 px-5">Asignar Amigos</button>}
                <button onClick={() => navigate("/")} className="btn btn-primary mt-3 px-5" type="button">Cerrar Sesión
                </button>
            </div>
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
