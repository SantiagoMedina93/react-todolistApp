import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // !!data = existe? 
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSizes,setboxSizes] = useState({});


    // Orden de ecución:
    // 1. DOM => Pantalla se actualiza visualmente => useEffect() { asincrona }
    // 2. DOM => => useEffectLayout () { sincrona } => Pantalla se actualiza visualmente 

    /* Podría usarse cuando notas que la actualización parpadea visualmente, o cuando quieres agrupar varias actualizaciones en una, 
    puedes probar con esto cambiando el useLayoutEffect por el useEffect y notarás ese ligero parpadeo con useEffect pero no con useLayoutEffect */
    useLayoutEffect (() => {
        // pTag.current.getBoundingClientRect() = medidas de <input ref={ pTag }/>
        setboxSizes(pTag.current.getBoundingClientRect());

    }, [quote]);


    return (
        <div>
            <h1>LayoutEffect</h1>  
            <hr />


            <div className='blockquote text-end'> 
                <p 
                    className='mb-0'
                    ref={ pTag }
                > 
                    {quote} 
                </p>
            </div>

        <pre>
            { JSON.stringify( boxSizes, null, 3 ) }
        </pre>


        <button 
            className='btn btn-primary'
            onClick={ increment }>
            Siguiente Quote
        </button>

        </div>
    )
};