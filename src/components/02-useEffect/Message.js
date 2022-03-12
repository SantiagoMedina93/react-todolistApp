import React, { useEffect, useState } from 'react';

export const Message = (email) => {

    const [coords,setCoords] = useState({ x:0, y:0 });
    const {x, y} = coords;

    const mouseMove = (event) => {
        // Variable Scope: Se puede repetir dentro de la fn
        const coords = { x:event.x, y:event.y }
        setCoords(coords)
        console.log(':D');
    }

    //SIN DEPENDENCIAS ([]) SE EJECUTA SOLO CUANDO EL COMPONENTE ES MOSTRADO POR PRIMERA VEZ
    useEffect(() => {
        // La fn mouseMove se escucha cuando se mueve el mouse (mousemove)
        window.addEventListener('mousemove', mouseMove);
        
        return () =>{
            console.log('Componente desmontado');
            // Se remueve/ se limpia el del evento el componente para evitar SUPERPOSCIÓN
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);



    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
};