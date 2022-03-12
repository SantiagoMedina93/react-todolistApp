import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    // Puedo cambiar a lo que apunta ref sin disparar una renderización de componente
    const inputRef = useRef();
    

    const handleClick = () => {
        // Al suceder el evento onClick se hace focus en el input y se selecciona el contenido
        // inputRef.current = <input ref={ inputRef } />
        // inputRef.current.value = Valor ingresado en el input
        inputRef.current.select();
        /* console.log( inputRef.current.value ); */
    }

    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            />

            <button 
                className='btn btn-outline-primary mt-3'
                onClick={ handleClick }
            >
                Focus
            </button>


        </div>
    )
};