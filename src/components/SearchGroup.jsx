import { useState } from "react"

export const SearchGroup = () => {
    
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
        <div className="izquierda">
        <form action="/group/search" onSubmit={( event ) => onSubmit (event)}>
        <h2>¿Ya tienes un grupo al que perteneces?</h2>
        <label>Ingresa el nombre del grupo para unirte:</label>
        <input 
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
            className="form-control"
            aria-label="Small" 
            aria-describedby="Small"

        />
        <button onClick={ onInputChange } className="btn btn-secondary mt-3">Ingresar</button>
        </form>
        </div>
  )
}