import { useState } from "react"

export const AddGroup = () => {

    const [inputValue, setInputValue] = useState();
    
    const onInputChange = ( { target } ) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        const grupos = JSON.parse(localStorage.getItem("grupo") || "[]");

        grupos.push(inputValue);
        
        localStorage.setItem("grupo", JSON.stringify(grupos));

    }
    
    return (
        <div className="derecha">  
        <form action="/group/register" onSubmit={( event ) => onSubmit (event)}>
        <h2>¿No tienes un grupo? Crealo.</h2>
        <label>Nombre del grupo:</label>
        <br />
        <input 
            type="text"
            value= { inputValue } 
            onChange={ onInputChange }
            className="form-control w-75"
            aria-label="Small" 
            aria-describedby="Small"
        />
        <br />
        <button  className="btn btn-secondary mt-3">Crear Grupo</button>
        </form>
        </div>
  )
}
