import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import {useAuth} from "../context/AuthContext";

export default function IzquierdaGrupo() {
    const {user} = useAuth();
    const [showFriend, setShowFriend] = useState(false);
    return <Container className=" pt-4">
        <div className="info-header">
            <div className="fs-5 d-flex align-items-center gap-2">
                <p>Estas en el grupo:</p>
                <p className="fs-4 text fw-bold ">{user.group}</p>
            </div>
            <div className="fs-5 d-flex align-items-center gap-2">
                <p>Tu Amigo Secreto es :</p>
                <p className="fs-4 text fw-bold gap-3 ">{showFriend ?
                    (user.amigo?.nombre ?? "Aún el sorteo no se ha realizado")
                    : "********"}</p>
                <button onClick={() => setShowFriend(prevState => !prevState)}
                        className="btn btn-secondary btn-sm">
                    {showFriend ? "Ocultar" : "Mostrar"}
                </button>
            </div>
        </div>
    </Container>;
};
