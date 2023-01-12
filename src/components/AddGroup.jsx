import { useState } from "react"

export const AddGroup = () => {

    const [inputValue, setInputValue] = useState();
    
    const onInputChange = ( { target } ) => {
        console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue);

    }
    
    return (
        <div className="derecha">  
        <form action="/group/register" onSubmit={( event ) => onSubmit (event)}>
        <h2>¿No tienes un grupo? Crealo.</h2>
        <label>Nombre del grupo:</label>
        <input 
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
            className="form-control"
            aria-label="Small" 
            aria-describedby="Small"

        />
        <button onClick={ onInputChange } className="btn btn-secondary mt-3">Crear Grupo</button>
        </form>
        </div>
  )
}
