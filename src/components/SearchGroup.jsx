import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export const SearchGroup = () => {
    const [inputValue, setInputValue] = useState("");
    const {user, refreshState} = useAuth();
    const navigate = useNavigate();

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = () => {
        const grupos = JSON.parse(localStorage.getItem("grupo") || "[]");
        if (!grupos.includes(inputValue)) return;

        const personas = JSON.parse(localStorage.getItem("personas") || "[]");
        const actualUser = personas.find(u => u.email === user.email);
        actualUser.isAdmin = false;
        actualUser.group = inputValue;

        localStorage.setItem("personas", JSON.stringify(personas));
        refreshState();
        navigate("/miembros");
    };

    return (
        <div className="izquierda">
            <div>
                <h2>¿Ya tienes un grupo al que perteneces?</h2>
                <label>Ingresa el nombre del grupo para unirte:</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={onInputChange}
                    className="w-75 rounded"
                    aria-label="Small"
                    aria-describedby="Small"
                />
                <br/>
                <button onClick={_ => onSubmit()} className="btn btn-secondary mt-3">Ingresar</button>
            </div>
        </div>
    );
};
