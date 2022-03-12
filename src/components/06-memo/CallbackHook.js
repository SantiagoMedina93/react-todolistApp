import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter,setCounter] = useState(10);

    // Cuando el componente CallbackHook se renderiza vuelve a generar la fn
    // increment (const) y le asigna un/un nuevo espacio en memoria. 
    // SIEMPRE A PUNTA A UN NUEVO ESPACIO EN MEMORIA => React.momo() no funciona
    
    /* const increment = () => {
        setCounter( counter + 1 )
    }; */
    
    
    // Regresa una versión memorizada de la función 
    // Solo se vuelve a renderizar si se cambia la dependecia ( [] )
    const increment = useCallback( ( num ) => {
        // Problema: Necesito la dependecia counter    
        // Solución: callback con el estado anterior de counter 
        setCounter( counter => counter + num)
    }, [ setCounter ]);
    
    console.log('Me volvi a generar - Padre ');

    // OTRA POSIBLE APLIACIÓN DEL useCallback
    // Cuando la dependencia del useEffect sea la fn del componente hijo
    useEffect(() => {
        //?????
        console.log('Me volvi a generar - Padre useEffect');
    }, [increment]);

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            {/* 
                Proceso:
                    1. Se renderiza todo el componente (padre e hijo)
                    2. Componente hijo: Se dispara el evento onClick={ () => increment() }
                    3. El state del counter cambia: Se renderiza el componente padre e HIJO
                Problema: El componente hijo se vuelve a renderizar innecesariamente
            */}

            <ShowIncrement increment={ increment }/>
        </>
    )
};