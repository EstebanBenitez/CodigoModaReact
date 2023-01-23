import { useState } from "react";
import { useNavigate  } from "react-router-dom";

export const SearchGroup = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const onInputChange = ( { target } ) => {
        console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = () => {
        

        const grupos = localStorage.getItem("grupo") || "[]";

        // console.log( grupos );

        let group  = grupos.includes ( inputValue, 0 );

        // console.log( group );

        if (group === true) {
            console.log(group)
            return navigate("/register");
        }else {
            return alert("El grupo no existe, verifica que esté bien escrito o crealo")
        };

        
    }

    return (
        <div className="izquierda">
        <div>
        <h2>¿Ya tienes un grupo al que perteneces?</h2>
        <label>Ingresa el nombre del grupo para unirte:</label>
        <input
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
            className="form-control w-75"
            aria-label="Small"
            aria-describedby="Small"
            placeholder="Nombre del grupo"
        />
        <br />
        <button onClick={ _ => onSubmit() } className="btn btn-secondary mt-3">Ingresar</button>
        </div>
        </div>
  )
}