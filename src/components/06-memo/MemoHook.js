import React, { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css'



export const MemoHook = () => {
    
    const { counter, increment } = useCounter( 3000 );    
    const [show,setShow] = useState(true); 


    // Argumentos: Callback y dependencias
    // Ciclo de vida: 
    //      1. procesoPesado() retorna el valor de memoProcesoPesado solo cuando 
    //      la dependencia [counter] cambia de valor
    //      2. El Hook useMemo toma el valor del callback procesoPesado() y solo 
    //      lo renderiza si la dependeica [counter] cambia
    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [counter] );
    
    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter} </small> </h3>
            <hr />      
            
            <p> { memoProcesoPesado } </p>

            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ms-3'
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </>
    )
};