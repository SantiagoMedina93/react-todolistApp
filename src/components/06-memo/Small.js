import React from 'react';


// Solo se renderiza si las property ( argumentos ) cambian,
// caso contrario utiliza la versión memorizada si tiene que redibujar algo
export const Small = React.memo(({ value }) => {
    
    console.log('Me volvi a llamar :(');
    //http?

    return (
        <small>
            { value }
        </small>
    )
});