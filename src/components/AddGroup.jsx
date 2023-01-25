import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export const AddGroup = () => {

    const [inputValue, setInputValue] = useState("");
    const {user, refreshState} = useAuth();
    const navigate = useNavigate();


    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const grupos = JSON.parse(localStorage.getItem("grupo") || "[]");
        if (grupos.includes(inputValue)) return;

        const personas = JSON.parse(localStorage.getItem("personas") || "[]");
        const actualUser = personas.find(u => u.email === user.email);
        actualUser.isAdmin = true;
        actualUser.group = inputValue;

        grupos.push(inputValue);
        localStorage.setItem("grupo", JSON.stringify(grupos));
        localStorage.setItem("personas", JSON.stringify(personas));
        refreshState();
        navigate("/miembros");
    };

    return (
        <div className="derecha">
            <form action="/group/register" onSubmit={(event) => onSubmit(event)}>
                <h2>¿No tienes un grupo? Crealo.</h2>
                <label>Nombre del grupo:</label>
                <br/>
                <input
                    type="text"
                    value={inputValue}
                    onChange={onInputChange}
                    className="w-75 rounded"
                    aria-label="Small"
                    aria-describedby="Small"
                />
                <br/>
                <button className="btn btn-secondary mt-3">Crear Grupo</button>
            </form>
        </div>
    );
};
